import React from "react"
import { ReactElement } from "react"
import guessCountryCodeFromString from "../shares/guessCountryCodeFromString"


type IProps = {
    country: string
    style: string
    size: string
}

const Image = ({country, size, style}: IProps): ReactElement => {

    console?.log({country, size, style})
    const countryCode = guessCountryCodeFromString(country)


    if (!countryCode || !size || !style) {
        console.log({countryCode, size, style})
        return (<></>)
    }
    
    return (
        <>
            <img 
                src={`https://flagsapi.com/${countryCode}/${style}/${size}.png`} 
            />
        </>
    )
    

}
export default Image