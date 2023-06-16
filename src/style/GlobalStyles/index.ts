import { createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`

    :root{
        --color-violet: #5964e0;
        --color-light-violet: #939bf4;
        --color-very-dark-blue: #19202d;
        --color-midnight: #121721;
        --color-white:#fff;
        --color-light-grey:#f4f6f8;
        --color-grey:#9daec2;
        --color-dark-grey:#6e8098;
        --background-color-btn2:#eeeffc;
        --background-color-hover-btn2:#c5c9f4;
        --font-size-h1:28px;
        --line-height-h1:34px;
        --font-size-h2:24px;
        --line-height-h2:29px;
        --font-size-h3:20px;
        --line-height-h3:24px;
        --font-size-h4:16px;
        --line-height-h4:18px;
        --font-size-body:16px;
        --line-height-body:26px;
        --border-radius-xxs: 0.3rem;
        --border-radius-xs: 0.5rem;
        --border-radius-s: 0.6rem;
        --border-radius-m: 1.2rem;
        --border-radius-l: 1.5rem;
        --border-radius-xl: 10rem;
        --padding-layout: 0 10%;
        --padding-search-bar-items: 2rem 3.2rem;
    }

    *,*::before,*::after{
        box-sizing:border-box;
        margin:0;
        padding:0;
    }
    html{
        scroll-behavior:smooth;
        font-size:62.5%;
    }
    body{
        font-family: 'Kumbh Sans', sans-serif;
        font-size:var(--font-size-body);
        line-height:var(--line-height-body);
        /* background-color: var(--color-light-grey); */
        color:var(--color-dark-grey);
    }

    #root{
        min-height: 100vh;
        background-color: var(--background-color-app);
        overflow: auto;
        transition: 0.2s linear;
    }
    #root[data-theme="light"] {
        --background-color-app: var(--color-light-grey);
        --background-color-elements: var(--color-white);
        --color-text: var(--color-very-dark-blue);
        --color-checkbox: #e7e8e9;
        --background-color-btn-2: #eeeffc;
        --background-color-btn-2-hover: #c5c9f4;
        --color-btn-2: var(--color-violet);
    }
    #root[data-theme="dark"] {
        --background-color-app: var(--color-midnight);
        --background-color-elements: var(--color-very-dark-blue);
        --color-text: var(--color-white);
        --color-checkbox: #313743;
        --background-color-btn-2: #303642;
        --background-color-btn-2-hover: #696e76;
        --color-btn-2: var(--color-white);
    }

    #modal[data-theme="dark"]{
        --background-color-elements: var(--color-very-dark-blue);
        --color-checkbox: #313743;
    }
    #modal[data-theme="light"]{
        --background-color-elements: var(--color-white);
        --color-checkbox: #e7e8e9;
    }

    button,input {
        border:none;
        outline:none;
        font-family:inherit;
        background-color:transparent;
    }
    button {
        cursor:pointer;
    }
    li {
        list-style:none;
    }
    a {
        text-decoration:none;
    }
    h1,h2,h3{
        color:var(--color-text);
        transition: 0.2s linear;
    }
    h1{
        font-size:var(--font-size-h1);
        line-height:var(--line-height-h1);
    }
    h2{
        font-size:var(--font-size-h2);
        line-height:var(--line-height-h2);
    }
    h3{
        font-size:var(--font-size-h3);
        line-height:var(--line-height-h3);
    }
    h4{
        font-size:var(--font-size-h4);
        line-height:var(--line-height-h4);
        color:var(--color-violet);
    }

    @media (max-width: 75em){
        :root {
            --padding-layout: 0 5%;
            --padding-search-bar-items: 2rem;
        }
    }
    @media (max-width: 48.12em) {
        :root {
            --padding-search-bar-items: 2.2rem;
            --border-radius-xl: 0;
        }
    }   
`

// export const myTheme = {
//     light:{
//         lightGray : 'var(--color-light-grey)',
//         violet:'var(--color-violet)',
//         white: 'var(--color-white)',
//         bgColorBtn2: 'var(--background-color-btn2)',
//         bgColorHoverBtn2: 'var(--background-color-hover-btn2)',
//         bodyBg:'var(--color-light-grey)',
//     },
//     dark:{
//         bodyBg:'var(--color-midnight)',
//     },
//     shared:{
//         veryDarkBlue : 'var(--color-very-dark-blue)',
//         lightViolet : 'var(--color-light-violet)',
//         darkGray: 'var(--color-dark-grey)',

//     }
// }

export default GlobalStyles;