import styled from "styled-components";

export const FooterBannerSection = styled.section`
box-sizing:content-box;
width:min(65rem,100%);
display:flex;
justify-content:space-between;
padding:1.5rem 0;
margin:8rem auto 0;
> div{
    display:flex;
    flex-direction:column;
    justify-content:center;
}
p{
    color:var(--Dark-Gray);
}   
`