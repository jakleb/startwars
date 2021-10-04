import { Person } from "../types";

export const convertFromCamelCase = (camelCaseString: string): string => {
    return camelCaseString.replace( /([a-z])([A-Z])/g, '$1 $2' ).toLowerCase();
}

export const capitalizeFirstLetter = (text: string) => {
    return `${text.charAt(0).toUpperCase()}${text.slice(1)}:`;
};

export const filterCharacters = (seachText: string, filter: string, characters: Person[] = []): Person[] => {
    let filterResult: Person[] = characters;
    if(seachText && seachText!= ''){
      filterResult = characters.filter(({ name }) => name.toLowerCase().includes(seachText.toLowerCase()));
    }
    
    if(filter){
      filterResult = filterResult.filter(({ _tech_films }) => _tech_films?.films.find(({ title }) => title.includes(filter)) )
    }
  
    return filterResult;
  }
