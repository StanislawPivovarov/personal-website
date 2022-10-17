import { createGlobalStyle } from 'styled-components';

import Comfortaa from "../assets/fonts/Comfortaa-Regular.woff";
import PlayfairBlack from "../assets/fonts/PlayfairDisplay-Black.woff";
import PlayfairItalic from "../assets/fonts/PlayfairDisplay-Italic.woff"

export default createGlobalStyle`
@font-face {
    font-family: 'Comfortaa';
    src: local('Comfortaa'), local('Comfortaa'),
    url(${Comfortaa}) format('woff');
}
@font-face {
    font-family: 'PlayfairBlack';
    src: local('PlayfairBlack'), local('PlayfairBlack'),
    url(${PlayfairBlack}) format('woff');
}
@font-face {
    font-family: 'PlayfairItalic';
    src: local('PlayfairItalic'), local('PlayfairItalic'),
    url(${PlayfairItalic}) format('woff');
}
`