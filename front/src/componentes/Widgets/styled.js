import styled from "styled-components";

export const WidgetsStyle = styled.div`
flex: 0.3;
margin-left: 20px;
overflow-y: scroll;
box-sizing: border-box;
&::-webkit-scrollbar{
    display: none;
}
-ms-overflow-style: none;
scrollbar-width: none;

@media only screen and (max-width 1280px){
    flex: 0.4;
}

@media only screen and (max-width: 1000px){
    display: none;
}`;


export const Header = styled.div`
background-color: white;
height: 50px;
position: sticky;
padding-top: 10px;
width: 100%;
`;
export const DivIcon = styled.div`
display: flex;
align-items: center;
background-color: #eee;
padding: 10px;
border-radius: 20px;
>.searchIcon{
    color: #5b7083;
}
>input{
    border: none;
    outline: 0;
    padding-left: 10px;
    background-color: #eee;
    font-size: 16px;
}
`;
export const DivContent = styled.div`
width: 100%;
`;
