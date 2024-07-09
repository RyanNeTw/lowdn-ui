import listCountries from "../types/countries"


const guessCountryFromCurency = (currency: string): string | null => {

    if (currency === 'USD') return 'US'
    if (currency === 'EUR') return 'EU'
    if (currency === 'GBP') return 'GB'

    const countries = listCountries()
    const country = countries.find((i) => i.currency.code === currency)

    return !!country ? country.code : null
}

export default guessCountryFromCurency