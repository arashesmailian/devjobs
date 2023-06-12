import {DefaultTheme, createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root{
        --Violet:#5964e0;
        --Light-Violet:#939bf4;
        --Very-Dark-Blue:#19202d;
        --Midnight:#121721;
        --White:#fff;
        --Light-Gray:#f4f6f8;
        --Gray:#9daec2;
        --Dark-Gray:#6e8098;
        --background-color-btn2:#eeeffc;
        --background-color-hover-btn2:#c5c9f4;
        --H1-Font-Size:28px;
        --H1-Line-Height:34px;
        --H2-Font-Size:24px;
        --H2-Line-Height:29px;
        --H3-Font-Size:20px;
        --H3-Line-Height:24px;
        --H4-Font-Size:16px;
        --H4-Line-Height:18px;
        --Body-Font-Size:16px;
        --Body-Line-Height:26px;
    }

    *,*::before,*::after{
        box-sizing:border-box;
        margin:0;
        padding:0;
    }
    html{
        scroll-behavior:smooth;
    }
    body{
        font-family: 'Kumbh Sans', sans-serif;
        font-size:var(--Body-Font-Size);
        line-height:var(--Body-Line-Height);
        background-color: var(--Light-Gray);
    }
    button,input{
        border:none;
        outline:none;
        font-family:inherit;
        background-color:transparent;
    }
    button{
        cursor:pointer;
    }
    li{
        list-style:none;
    }
    a{
        text-decoration:none;
    }
    h1,h2,h3{
        color:var(--Very-Dark-Blue);
    }
    h1{
        font-size:var(--H1-Font-Size);
        line-height:var(--H1-Line-Height);
    }
    h2{
        font-size:var(--H2-Font-Size);
        line-height:var(--H2-Line-Height);
    }
    h3{
        font-size:var(--H3-Font-Size);
        line-height:var(--H3-Line-Height);
    }
    h4{
        font-size:var(--H4-Font-Size);
        line-height:var(--H4-Line-Height);
        color:var(--Violet);
    }
`
// declare module 'styled-components' {
//     export interface DefaultTheme {
//       light?: {
//         lightGray?:string;
//         violet?:string;
//         white?:string;
//         veryDarkBlue?:string;
//         darkGray?: string;
//         bgColorBtn2?: string;
//         bgColorHoverBtn2?: string;
//       };
//       dark?:{};
//       shared?:{};
//     }
//   }

export const myTheme = {
    light:{
        lightGray : 'var(--Light-Gray)',
        violet:'var(--Violet)',
        white: 'var(--White)',
        bgColorBtn2: 'var(--background-color-btn2)',
        bgColorHoverBtn2: 'var(--background-color-hover-btn2)',
        bodyBg:'var(--Light-Gray)',
    },
    dark:{
        bodyBg:'var(--Midnight)',
    },
    shared:{
        veryDarkBlue : 'var(--Very-Dark-Blue)',
        lightViolet : 'var(--Light-Violet)',
        darkGray: 'var(--Dark-Gray)',

    }
}

export default GlobalStyles;