export const convertFromCamelCase = (camelCaseString: string): string => {
    return camelCaseString.replace( /([a-z])([A-Z])/g, '$1 $2' ).toLowerCase();
}

export const capitalizeFirstLetter = (text: string) => {
    return `${text.charAt(0).toUpperCase()}${text.slice(1)}:`;
};