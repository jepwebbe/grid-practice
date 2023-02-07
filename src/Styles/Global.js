import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}
html {
    font-size: 16px;
    scroll-behavior: smooth;
    height: 100%;
}
body {
    width: 100%;
    height: 100%;
    margin: 0 auto;
}
#root {
    height: 100%;
    grid-template-rows: "auto";
    grid-template-columns: "1fr auto";
    grid-template-areas: "content sidebar";
}
img {
    display: block;
    max-width: 100%;
    height: auto;
}
`