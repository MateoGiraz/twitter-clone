import styled from 'styled-components'

export const Contenedor = styled.div`
padding: 20px;
flex: 0.2;
min-width: 255px;
>.twitter-icon{
    margin: 10px 0;
    width: 46px;
    height: 30px;
    fill: var(--twitter-color) !important; 
}
>Button{
    background-color: var(--twitter-color) !important;
    border: none !important;
    color: white !important;
    font-weight: 800 !important;
    text-transform: inherit !important;
    height: 46px !important;
    margin-top: 10px;
    padding: 0 30px !important;
    border-radius: 999px !important;

}

@media only screen and (max-width: 1280px){
    flex: 0.05;
    min-width: 50px;
>button{
    display: none;
}
h2{
    display: none;
}

@media only screen and (max-width: 1000px){
    width: 40px;
}

@media only screen and (max-width: 600px){
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 99;
    height: 50px;
    background-color: white !important;
    width: 100%;
    padding: 0;
    .twitter-icon{
        display: none;
    }
}

}
`

export const SidebarIcon = styled.div`
display: flex;
align-items: center;
padding: 14px 10px;
>h2{
    font-size: 19px;
    margin: 0 15px 0 20px;
    font-weight: 700;
}
>.MuiSvgIcon-root{
    width: 30px;
    height: 30px;
}
&:hover{
    background-color: var(--Hover) !important;
    color: var(--twitter-color) !important;
    transform: color 100ms ease-out;
}
${(props) => props.active && `
background-color: var(--Hover) !important;
color: var(--twitter-color) !important;
`}

@media only screen and (max-width: 600px){
    display: ${props => props.secondary ? 'none' : 'flex'};
}`