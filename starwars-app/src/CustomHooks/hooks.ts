import { useQuery } from "@apollo/client";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useHistory, useRouteMatch } from "react-router-dom";
import { LOAD_STARWARS_CHARACTERS } from "../GraphQL/Queries";
import { actionCreators, State } from "../state";
import { People, Person, QueryPeople } from "../types";
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