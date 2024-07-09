import { CountryCode, isCountryCode } from "../types/isCountryCode"



const guessCountryCodeFromString = (country: string): CountryCode | null=> {

    if (isCountryCode(country)) return country


    return null
}

export default guessCountryCodeFromString