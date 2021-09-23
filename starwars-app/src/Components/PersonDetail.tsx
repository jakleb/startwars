import { useQuery, useLazyQuery } from "@apollo/client";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "../CustomHooks/hooks";
import { LOAD_PERSON_BY_ID, LOAD_STARWARS_CHARACTERS } from "../GraphQL/Queries";
import { State } from "../state";
import { People, Person, QueryPeople, UrlMatch } from "../types";

export const PersonDetail = ({match}: UrlMatch) => {

    const [person, setPerson] = useState<Person>();
    let personId = match?.params?.personid;

    const router = useRouter();
    let totalCount = useRef<number>(0);
    const { all } = useSelector((state: State) => state.bank);
    const [characters, setCharacters] = useState<Person[]>([] as Person[]);

    useEffect(() => {
        setPerson(all.find(person => person.id === personId));
    }, [all])

   return (
       <div>
           {
               person && person.name
           }
       </div>
   ) 
}

