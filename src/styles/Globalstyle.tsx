import * as styled from "styled-components";
import {reset} from "styled-reset";

const GlobalStyle = styled.createGlobalStyle`
  ${reset}
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
