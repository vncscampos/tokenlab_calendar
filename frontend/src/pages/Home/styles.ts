import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    background: ${colors.background};
`;

export const Header = styled.header`
    background: linear-gradient(76.6deg, #FD52FF 7.16%, #00DBDE 91.96%, #00DBDE 91.96%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10rem;
    height: 10vh;

    a {
        display: flex;
        align-items: center;
        color: #ffff;
        text-decoration: none;
    }

    a p {
        font-family: 'Ubuntu', sans-serif;
        font-weight: 500;
        margin-left: 8px;
    }
`;

export const Content = styled.div`
    margin: 2.8em 10rem;
    color: ${colors.dark_blue};
    font-family: 'Ubuntu', sans-serif;

    h1 {
        font-family: 'Ubuntu', sans-serif;
        font-weight: 500;
        color: ${colors.dark_blue};
        margin-bottom: 36px;
    }

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 24px;
        list-style: none;
    }

    ul li {
        background-color: #fff;
        padding: 24px;
        border-radius: 6px;
    }

    .event-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }

    p {
        font-weight: 300;
    }
`;

