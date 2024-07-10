import currencyCodeToCountryCode from '../types/currencyCodeToCountryCode'

/**
 * Get country code from currency code
 * @param {string} currency - Currency code
 * @returns {string | null} - Country code
 */
const getCountryCodeFromCurrencyCode = (currency: string): string | null => {
  return currencyCodeToCountryCode[currency]
}

export default getCountryCodeFromCurrencyCode
