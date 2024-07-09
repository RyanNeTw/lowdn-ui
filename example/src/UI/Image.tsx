import React from "react"
import { ReactElement } from "react"
import guessCountryCodeFromString from "../shares/guessCountryCodeFromString"
import guessCountryFromCurency from "../shares/guessCountryFromCurency"
import { isCurrency } from "../types/isCurrency"


type IProps = {
    country: string
    style: string
    size: string
}

const Image = ({country, size, style}: IProps): ReactElement => {

    let countryCode = null

    if (isCurrency(country)) {
        countryCode = guessCountryFromCurency(country)?? null
    } else {
        countryCode = guessCountryCodeFromString(country) ?? null
    }

    if (!countryCode || !size || !style) return (<></>)
    
    return (
        <>
            <img 
                src={`https://flagsapi.com/${countryCode}/${style}/${size}.png`} 
            />
        </>
    )
    

}
export default Image