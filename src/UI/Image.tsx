import React from 'react'
import guessFlagStyle from '../shares/guessFlagStyle'
import getCountryCodeFromCurrencyCode from '../shares/getCountryCodeFromCurrencyCode'
import isCountrySupported from '../shares/isCountrySupported'
import { FlagStyle } from '../types/types'

export type IProps = {
  country: string
  style?: FlagStyle
  size: string
}

/**
 * Image component that renders the flag of a country based on the country code or currency code.
 * @param {string} country - Country code or currency code
 * @param {FlagStyle} style - Style of the flag
 * @param {string} size - Size of the flag
 */
const Image = ({ country, size, style }: IProps) => {
  let countryCode = null

  // Firstly we check if it is a country code
  if (isCountrySupported(country)) {
    countryCode = country
  } // If it is not a country code, we check if it is a currency code
  else if (getCountryCodeFromCurrencyCode(country)) {
    countryCode = getCountryCodeFromCurrencyCode(country) ?? null
  }

  if (!countryCode || !size) return <div>Country not found</div>

  return (
    <img
      src={`/flags/${countryCode}.svg`}
      style={style && guessFlagStyle(style)}
      alt='Flag'
    />
  )
}
export default Image
