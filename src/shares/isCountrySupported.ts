import countryList from '../types/countryList'

/**
 * Check if country is supported
 * @param {string} input - Input
 * @returns {boolean} - True if country is supported
 */
const isCountrySupported = (input: string): boolean => {
  return countryList.includes(input)
}

export default isCountrySupported
