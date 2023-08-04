import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
    --primary-color: #f5f5f5;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.4rem;
    --fontMed: 1.3rem;
    --fontSmall: 1.1rem;
}

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Abel', sans-serif;
}
`;

export default GlobalStyles;
