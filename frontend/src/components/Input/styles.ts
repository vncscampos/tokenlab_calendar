import styled from "styled-components";
import colors from '../../styles/colors';

export const Container = styled.div`
    width: 22em;
    height: 47px;
    padding: 10px 16px;
    border-radius: 6px;
    margin-bottom: 21px;
    background-color: #fff;
    color: ${colors.gray};

    display: flex;
    align-items: center;

    input {
        flex: 1;
        color: ${colors.gray};
        background: transparent;
        
        &::placeholder {
            color: ${colors.gray};
        }
    }

    svg {
        margin-right: 16px;
    }
`;