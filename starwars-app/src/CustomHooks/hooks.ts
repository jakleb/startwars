import { useQuery } from "@apollo/client";
import { RefObject, useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useHistory, useRouteMatch } from "react-router-dom";
import { LOAD_ALL_FILMS, LOAD_STARWARS_CHARACTERS } from "../GraphQL/Queries";
import { actionCreators, State } from "../state";
import { Films, Person, QueryFilms, QueryPeople, UrlAppInfoProps, URLQueryParams } from "../types";
import { bindActionCreators } from "redux";

export const useStarWarsApi = (pageNumber: number) => {

    const { addAll } = useAppStore();

    const {error, loading, data} = useQuery<QueryPeople>(LOAD_STARWARS_CHARACTERS);
    let {current} = useRef<Person[]>();
  
    useEffect(() => {
      if(error){
        console.log(`Error! ${error}`)
      }
      if(data?.allPeople && !current?.length){
        current = data?.allPeople.people;
        addAll(data?.allPeople?.people || []);
      }
    }, [pageNumber,loading]);
  }

  export const useFilters = () => {

    const [films, setFilms] = useState<Films>({} as Films);

    const {loading, data} = useQuery<QueryFilms>(LOAD_ALL_FILMS);

    useEffect(() => {
      if(data?.allFilms?.films){
        setFilms(data?.allFilms)
      }
    },[loading])

    return films;
  }
  
  export const useRouter = () => {
    const params = useParams();
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
  
    return useMemo(() => {
      return {
        push: history.push,
        replace: history.replace,
        pathname: location.pathname,
        query: {
           ...params as URLQueryParams
        },
        match,
        location,
        history
      };
    }, [params, match, location, history]);
  };

  export const useOnClickOutside = (ref: RefObject<HTMLDivElement>, handler: (event: Event) => void ) => {
    useEffect(() => {
        const listener = (e: Event) => {
          if (!ref.current || ref.current.contains(e.target as Node)) {
            return;
          }
          handler(e);
        };
        
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      [ref, handler]
    );
  }

  export const useCharacrterListData = (): UrlAppInfoProps => {

    const { all, favorites } = useAppStore()
    const { location:{ search, pathname}} = useRouter();

    const hasFilter: boolean = search.startsWith("?filmtitle")
    const isFavoritesPage = pathname.includes("favorites");
    const characters = isFavoritesPage ? favorites : all;
    const filter = hasFilter ? decodeURI(search.replace("?filmtitle=",'')) : null;
    return {filter, characters, isFavoritesPage}
  }

  export const useAppStore = () => {
    const dispatch = useDispatch();
    const actions = bindActionCreators(actionCreators,dispatch);
    const selectors = useSelector((state: State) => state.bank);

    return {...actions, ...selectors }
  }

  export const useDetail = (personId: string): Person => {
    const [person, setPerson] = useState<Person>();
    const { all } = useAppStore();

    useEffect(() => {
        setPerson(all.find(person => person.id === personId));
    }, [all, personId]);

    return person || {} as Person
}
  