import countryList from "../types/countryList"


const isCountrySupported = (input: string): string | null => {
    return countryList[input]
}

export default isCountrySupported