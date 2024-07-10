import { default as React_2 } from 'react';

/**
 * Image component that renders the flag of a country based on the country code or currency code.
 * @param {string} country - Country code or currency code
 * @param {FlagStyle} style - Style of the flag
 * @param {string} size - Size of the flag
 */
export declare const Flag: ({ country, size, style }: FlagProps) => React_2.JSX.Element;

export declare type FlagProps = {
    country: string;
    style?: FlagStyle;
    size: string;
};

export declare enum FlagStyle {
    CURVED = "curved",
    BLACK_AND_WHITE = "black_and_white",
    REVERSE = "reverse",
    SHADOW = "shadow",
    SEPIA = "sepia",
    BLUR = "blur"
}

export { }
