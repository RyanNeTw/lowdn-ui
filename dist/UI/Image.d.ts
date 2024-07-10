import React from 'react';
import { FlagStyle } from '../types/types';
declare type IProps = {
    country: string;
    style?: FlagStyle;
    size: string;
};
declare const Image: ({ country, size, style }: IProps) => React.JSX.Element;
export default Image;
