import { useQuery } from "@apollo/client";
import { MouseEvent, RefObject, useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useHistory, useRouteMatch } from "react-router-dom";
import { LOAD_ALL_FILMS, LOAD_STARWARS_CHARACTERS } from "../GraphQL/Queries";
import { actionCreators, State } from "../state";
import { Film, Films, People, Person, QueryFilms, QueryPeople } from "../types";
import { bindActionCreators } from "redux";

export const useStarWarsApi = (pageNumber: number) => {
    const {error, loading, data} = useQuery<QueryPeople>(LOAD_STARWARS_CHARACTERS);
    let people = useRef<Person[]>();
  
    const dispatch = useDispatch();
    const { addAll, getAll } = bindActionCreators(actionCreators,dispatch);
    const { all } = useSelector((state: State) => state.bank);
  
    useEffect(() => {
      if(error){
        console.log(`Error! ${error}`)
      }
      if(data?.allPeople && !people.current?.length){
        people.current = data?.allPeople.people;
        addAll(data?.allPeople?.people || []);
      }
    }, [pageNumber,loading]);
  }

  export const useFilters = () => {

    const [films, setFilms] = useState<Films>({} as Films);

    const {error, loading, data} = useQuery<QueryFilms>(LOAD_ALL_FILMS);

    useEffect(() => {
      if(data?.allFilms?.films){
        console.log(data);
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
           ...params
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