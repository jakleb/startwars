import {gql} from '@apollo/client';

export const LOAD_STARWARS_CHARACTERS = gql`
query {
    allPeople {
      people {
        name
      }
    }
  }
`