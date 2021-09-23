import {gql} from '@apollo/client';

export const LOAD_STARWARS_CHARACTERS = gql`
query{
  allPeople{
    people{
      name
      birthYear
      eyeColor
      gender
      height
      mass
      skinColor
      homeworld {
        name
        diameter
        gravity
        population
        
      }
      species {
        name
        language
      }
      _tech_films:filmConnection{
        films{
          title
          description: openingCrawl
        }
      }
      _tech_starchiships:starshipConnection{
        starships{
          name
          model
        }
      }
      _tech_vechicles:vehicleConnection{
        vehicles{
          name
          model
        }
      }
    }
  }
}
`

export const LOAD_PERSON_BY_ID = (id: string) => gql`
query {
    person(id: ${id}) {
      name
      height
      mass
      hairColor
      skinColor
      created
      edited
      id
    }
  }
`