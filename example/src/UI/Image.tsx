import React from "react"
import { ReactElement } from "react"
import guessCountryFromCurency from "../shares/guessCountryFromCurency"

import { isCurrency } from "../types/isCurrency"
import countryList from "../types/countryList"


type IProps = {
    country: string
    style: string
    size: string
}

const Image = ({country, size, style}: IProps): ReactElement => {
    let countryCode = null

    // Firstly we check if it is a country code
    if (countryList.includes(country)) {
        countryCode = country;
    } // If it is not a country code, we check if it is a currency code
    else if (isCurrency(country)) {
        countryCode = guessCountryFromCurency(country)?? null
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