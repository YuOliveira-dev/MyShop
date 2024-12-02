// CSS in JS
import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle `
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
    background-color: #f5f5f5;
    color: black;

    }

    body, button, input {
    font-family: 'Poppins', sans serify;
    }
    button {
    cursor: pointer;
    transition: filter 0.3s;
    
    &:hover {
    filter: brightness(1.2);
    transition: filter 0.3s;
    }
    }
`;

