import styled from "styled-components";

export const Contenedor = styled.div`
  display: flex;
  margin-top: 10px;
  padding-right: 10px;
  flex-direction: column;
  flex: 0.5;
  overflow-y: scroll;
  border: 1px solid #eff3f4;

&::-webkit-scrollbar{
    display: none;
}
-ms-overflow-style: none;
scrollbar-width: none;
  
@media only screen and (max-width: 1280px){
  flex: 0.55;
}

@media only screen and (max-width: 1004px){
  flex: 0.95;
}

@media only screen and (max-width: 600px){
  flex: 1;
  overflow-x: hidden;
}

`;

export const Header = styled.header``;


/*TweetBox*/

export const TweetBoxStyle = styled.div`
border-bottom: 1px solid #ddd;
padding: 5px 15px;
width: 100%;
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
width: 100%;
`;

export const Div = styled.div`
display: flex;
width: 100%;
align-items: center;
padding-top: 10px;
>.columns{
  display: flex;
  flex-direction: column;
  width: 100%;
  >input{
    margin-left: 10px;
    margin-top: 10px;
    width: 100%;
    border: none;
    outline: 0;
    font-size: 20px;
    line-height: 25px;
    color: #0f1419;
  }

}
>input{
  margin-left: 10px;
  width: 100%;
  flex: 1;
  border: none;
  font-size: 20px;
  line-height: 25px;
  color: #0f1419;
  outline: 0;

  @media only screen and (max-width: 600px){
    font-size: 15px;
  }
}
>Button{
  background-color: var(--twitter-color) !important;
  border: none !important;
  color: white !important;
  font-weight: 800 !important;
  text-transform: inherit !important;
  height: 46px !important;
  margin-top: 10px;
  margin-right: 20px;
  padding: 0 30px !important;
  border-radius: 999px !important;
  @media only screen and (max-width: 600px){
    height: 25px !important;
    margin-top: 10px;
    margin-bottom: 7px;
    margin-right: 10px;
    padding: 0 10px !important;
    font-size: 12px !important;
  }
}
`;

export const Avatar = styled.div`
>img{
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: fill;
  margin-right: 20px;
  margin-top: 7px;
  
}
`;

export const DivBox = styled.div`
display: flex;
justify-content: space-around;
align-items: center;

>.MuiSvgIcon-root{
  color: var(--twitter-color) !important;
  margin: 2px;
  border: 1px solid var(--twitter-color);
  width: 20px;
  height: 20px;
  border-radius: 5px;
  cursor: pointer;
}

`;


export const File = styled.input`
max-width: 35px;
position: absolute;
z-index: 10;
padding-top: 10px;
opacity: 0;

${(props) => props.primary &&`
max-width: 20px;
margin-right: 25px;
margin-bottom: 5px;
`}

${(props) => props.secondary &&`
max-width: 20px;
margin-left: 25px;
margin-bottom: 5px;
`}

${(props) => props.main &&`
max-width: 40px;
`}

`

/*POST*/

export const PostStyle = styled.div`
width: 100%;
padding: 10px 15px;
border-top: 1px solid #ddd;
margin-top: 5px;
display: flex;
align-items: flex-start;
>.post-avatar{
margin-top: 5px;
}
`;


export const PostBodyStyle = styled.div`
padding-left: 10px;
width: 100%;
overflow: hidden;
>div span{
  font-weight: 600;
  font-size: 15px;
  color: #5b7083;
}
.post-icon{
  margin-right: 5px;
  font-size: 14px !important;
  color: var(--twitter-color) !important;
}
h3{
  padding: 0;
  margin: 0;
}
.post-description{
  margin-top: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 0;
  font-size: 16px !important;
  line-height: 16.6875px;
  color: #0f1419;
  @media only screen and (max-width: 600px){
    margin-right: 15px;
  }
}
`;

export const PostFooter = styled.div`
display: flex;
width: 90%;
justify-content: space-between;
margin-top: 10px;
color #5b7083;
transition: all 100ms ease-in;
>.MuiSvgIcon-root:hover:nth-child(1){
  fill: #1da1f2;
  cursor: pointer;
}
>.MuiSvgIcon-root:hover:nth-child(2){
  fill: #17bf63;
  cursor: pointer;
}
>.MuiSvgIcon-root:hover:nth-child(3){
  fill: #e02452;
  cursor: pointer;
}
>.MuiSvgIcon-root:hover:nth-child(4){
  fill: #1da1f2;
  cursor: pointer;
}

`;



export const Images = styled.div`
>img{
  border-radius: 20px;
  min-width: 100%
  width: 100%;
  min-height: 300px;
  margin-top: 10px;

@media only screen and (max-width: 600px){
  border-radius: 20px;
  max-height: 80%;
  max-width: 90%;
  margin-top: 5px;
}
}
`;
