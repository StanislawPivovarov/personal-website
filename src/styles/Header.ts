import styled from "styled-components"

export const HeaderWrapper = styled.div`
height: auto;
width: 100%;
display: flex;
flex-direction: column;

@media(min-width: 992px){
    height: 60px;
    flex-direction: row;
    justify-content: space-between;
}
`;

export const Logo = styled.img`
width: 100%;
fill: #273329;
`;

export const Links = styled.div`
padding-top: 24px;
font-size: 16px;
display: flex;
flex-direction: column;
font-family: Comfortaa;
`

export const Link = styled.a`
text-align: center;
color: #273329;
padding-top: 8px;
&:hover{
    color: #fff;
}
`
