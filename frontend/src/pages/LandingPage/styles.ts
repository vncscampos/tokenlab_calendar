import styled from 'styled-components';
import { shade } from "polished";

import colors from '../../styles/colors';

export const Container = styled.div`
    display: flex;
    background: linear-gradient(76.6deg, #FD52FF 7.16%, #00DBDE 91.96%, #00DBDE 91.96%);
    align-items: center;
    justify-content: space-around;
    height: 100vh;
`;

export const Content = styled.div`
    height: 19.5em;

    .logo-container {
        text-align: center;
        margin-bottom: 28px;
    }

    h2 {
        font-family: 'Ubuntu', sans-serif;
        font-weight: 300;
        font-size: 24pt;
        line-height: 32px;
        color: #fff;
        margin-bottom: 40px;
    }

    .button-container {
        display: flex;
        justify-content: space-around;
        flex-direction: row;
    }

    .button-container a {
        width: 11em;
        height: 4em;
        border-radius: 6px;
        padding: 0 32px;

        display: flex;

        align-items: center;
        justify-content: space-around;

        text-decoration: none;
    }

    #register {
        background-color: ${colors.dark_blue};
        color: #ffff;
    }

    .button-container a:hover#register {
        background: ${shade(0.2, colors.dark_blue)};
        cursor: pointer;
    }

    #login {
        background-color: ${colors.soft_blue};
        color: #ffff;
    }

    .button-container a:hover#login {
        background: ${shade(0.09, colors.soft_blue)};
        cursor: pointer;
    }
`;
