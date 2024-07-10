import React from 'react';
import { FlagStyle } from '../types/types';
export type IProps = {
    country: string;
    style?: FlagStyle;
    size: string;
};
/**
 * Image component that renders the flag of a country based on the country code or currency code.
 * @param {string} country - Country code or currency code
 * @param {FlagStyle} style - Style of the flag
 * @param {string} size - Size of the flag
 */
declare const Image: ({ country, size, style }: IProps) => React.JSX.Element;
export default Image;
//# sourceMappingURL=Image.d.ts.map