import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
    background: ${colors.background};
    width: 100%;
    max-width: 1120px;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    color: ${colors.background};
    box-shadow: 0 0 100px rgba(0,0,0,0.1);
    border-radius: 6px;
    width: 80vw;
    padding: 40px 96px;

    a {
        display: flex;
        align-items: center;
        color: ${colors.soft_blue};

        svg {
            margin-right: 5px;
        }
    }

    .center-container {
        margin: 50px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    textarea {
        display: flex;
        padding: 10px 16px;
        border-radius: 6px;
        resize: vertical;
        border: 0.1px solid #a4a4a4;
        margin-bottom: 10px;
        width:100%;
        height: 90px;

        font-family: 'Ubuntu', sans-serif;
        color: ${colors.gray};

        &::placeholder {
            font-family: 'Ubuntu', sans-serif;
            color: ${colors.gray};
        }
    }

    .input-date {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 10px 0;
    }

    p {
        color: ${colors.dark_blue};
        font-family: 'Ubuntu', sans-serif;
        font-weight: 500;
        font-size: 11pt;
    }

    p#start {
        margin-right: 20px;
    }

    input{
        padding: 10px;
        border-radius: 6px;
        border: 0.1px solid #a4a4a4; 
        color: ${colors.gray};
    }
`;

