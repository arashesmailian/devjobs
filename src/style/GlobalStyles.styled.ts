import {createGlobalStyle,DefaultTheme} from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root{
        --Violet:#9e7f66;
        --Light-Violet:#939bf4;
        --Very-Dark-Blue:#19202d;
        --Midnight:#121721;
        --White:#fff;
        --Light-Gray:#f4f6f8;
        --Gray:#9daec2;
        --Dark-Gray:#6e8098;
    }
    @font-face {
        font-family: 'Kumbh Sans' ;
        src: url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;500;600;700&display=swap');
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
`
