import styled from "styled-components";

export const ModalContainer = styled.div<{isOpen:boolean}>`
    position:absolute;
    z-index:3;
    top:50%;
    left:50%;
    display:flex;
    flex-direction:column;
    align-items:stretch;
    gap:1rem;
    width:calc(100%-10%);
    background-color:var(--background-color-elements);
    border-radius:var(--border-radius-s);
    transform:translate(-50%,-50%);
    div{
    }
    label{
        padding: var(--padding-search-bar-items);
        &:first-child::after{
            content: '';
            position: absolute;
            top: auto;
            bottom: 0;
            left: 0;
            height: 0.1rem;
            width: 100%;
            background-color: var(--color-dark-grey);
            opacity: 0.2;
        }
    }
`