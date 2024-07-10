import currencyCodeToCountryCode from '../types/currencyCodeToCountryCode'

const getCountryCodeFromCurrencyCode = (currency: string): string | null => {
  return currencyCodeToCountryCode[currency]
}

export default getCountryCodeFromCurrencyCode
