import countryList from "../types/countryList"


const isCountrySupported = (input: string): boolean => {
    return countryList.includes(input);
}

export default isCountrySupported