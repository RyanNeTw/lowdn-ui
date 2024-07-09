import React from "react"
import { ReactElement } from "react"

import isCountrySupported from "../shares/isCountrySupported"
import getCurrencyCodeToCountryCode from "../shares/getCountryCodeFromCurrencyCode"


type IProps = {
    country: string
    style: string
    size: string
}

const Image = ({country, size, style}: IProps): ReactElement => {
    let countryCode = null

    // Firstly we check if it is a country code
    if (isCountrySupported(country)) {
        countryCode = country;
    } // If it is not a country code, we check if it is a currency code
    else if (getCurrencyCodeToCountryCode(country)) {
        countryCode = getCurrencyCodeToCountryCode(country);
    } else {
        return (<>
            <div>Country not found</div>
        </>)
    }

    if (!countryCode || !size || !style) return (<></>)
    
    return (
        <>
            <img 
                src={`/flags/${countryCode}.svg`}
            />
        </>
    )
    

}
export default Image