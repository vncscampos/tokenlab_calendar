import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        border: 0;
    }

    body {
        background-color: ${colors.background};
    }

    input, button, a {
        font-family: 'Ubuntu', sans-serif;
        font-weight: 500;
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }
`;