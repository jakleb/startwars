import {gql} from '@apollo/client';

export const LOAD_STARWARS_CHARACTERS = (first: number, last: number = 10) => gql`
query {
    allPeople(first: ${first}, last: ${last}) {
      people {
        name
      }
    }
  }
`