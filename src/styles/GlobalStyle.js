import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalSTyle = createGlobalStyle`
    ${reset};

    body {
        background-color: white;
    }
`;

export default GlobalSTyle;