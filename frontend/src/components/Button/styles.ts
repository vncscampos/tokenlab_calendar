import styled from "styled-components";
import { shade } from "polished";

import colors from "../../styles/colors";

export const Container = styled.div`
    width: 22em;
    height: 47px;
    border-radius: 6px;
    background-color: ${colors.dark_blue};

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    button {
        color: #ffff;
        background: transparent;
    }

    &:hover {
        background: ${shade(0.2, colors.dark_blue)};
    }
`;