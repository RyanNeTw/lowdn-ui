import React from "react"
import { ReactElement } from "react"
import guessFlagStyle from "../shares/guessFlagStyle"
import { FlagStyle } from "../types/types"
import getCountryCodeFromCurrencyCode from "../shares/getCountryCodeFromCurrencyCode"
import isCountrySupported from "../shares/isCountrySupported"


type IProps = {
    country: string
    style?: FlagStyle
    size: string
}

const Image = ({country, size, style}: IProps): ReactElement => {
    let countryCode = null

    // Firstly we check if it is a country code
    if (isCountrySupported(country)) {
        countryCode = country
    } // If it is not a country code, we check if it is a currency code
    else if (getCountryCodeFromCurrencyCode(country)) {
        countryCode = getCountryCodeFromCurrencyCode(country)?? null
    }

    if (!countryCode || !size) return (<><div>Country not found</div></>)
    
    return (
        <>
            <img 
                src={`/flags/${countryCode}.svg`}
                style={style && guessFlagStyle(style)}
            />
        </>
    )
    

}
export default Image