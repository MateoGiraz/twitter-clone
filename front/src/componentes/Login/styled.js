import styled from "styled-components";

export const CardStyle = styled.div`
.mainDiv{
  display: flex;
  max-width: 1250px;
  height: 100vh;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  background-color: white;

  @media only screen and (max-width: 500){
    max-width: 100%;
    padding: 0;

  }

}

.formDiv{

  --twitter-color: #1da1f2;

  background: var(--twitter-color);
  flex: 0.4;
  height: 572px;
  border-radius: 15px;

  @media only screen and (max-width: 1280px){
    flex: 0.5;
  }

  @media only screen and (max-width: 1000px){
    flex: 0.7;
  }

}
`;