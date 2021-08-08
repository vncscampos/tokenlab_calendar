import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        border: 0;
    }

    input, button, a {
        font-family: 'Ubuntu', sans-serif;
        font-weight: 500;
    }

    button {
        cursor: pointer;
    }
`;