import styled from "styled-components";

export const CardStyle = styled.div`

.input{
  border-radius: 5px;
  font-size: 15px;
  padding: 5px;
  width: 200px;
  height: 25px;
  margin: 5px 15px 5px 0px;
  border-width: 1.5px;
  background: black;
  color: white;

}

.inputSec{
  border-radius: 5px;
  font-size: 15px;
  padding: 5px;
  width: 200px;
  height: 25px;
  margin: 5px 15px 5px 0px;
  border-width: 1.5px;
  background: black;
  color: white;
  width: 425px;
  height: 25px;
}

.formDiv{
  width: 500px;
  height: 37  0px;
  border-radius: 10px;
  background: black;
  padding: 10px;
  margin: 0 auto;
  color: white; 
}

.mainDiv{
  align-items: center;
  text-align: center;
  justify-content: center;
  background: rgb(36,45,53);
  position: absolute;
  top:0px;
  right:0px;
  bottom:0px;
  left:0px;
  margin: 0px;
  color: white !important;
  display: flex;
}

.twitter-icon{
  height: 35px;
  width: 35px;
  color: white;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
}

.text{
  font-size: 30px;
  margin-bottom: 30px;
  margin-left: 0px;
  font-family: "Arial black";
  font-weight: light;
}

.inputSubmit{
  background: white;
  border-radius: 15px;
  font-size: 15px;
  padding: 5px;
  width: 425px;
  height: 40px;
  margin: 30px 15px 5px 0px;
  border-width: 1.5px;
  color: black;
  transition: all .05s ease-in-out;
}

.inputSubmit:hover{
  cursor: pointer;
  background: rgb(239,243,244);
}

.ref:hover{
  cursor:pointer;
}
.textsugestion{
  margin-top: 5px;
  font-size: 12px;
  margin-bottom: 30px;
  margin-left: 0px;
  font-family: "Arial black";
  font-weight: light;
}

@media only screen and (max-width: 500px) {
  .mainDiv{
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    height: 100vh;
    margin: 0px;
    height: 1000px;
    background: black;
    overflow-y: hidden;
  }

  .formDiv{
    position: absolute;
    top: 150px;
    display: block;
    bottom: 0px;
    margin: 0px;
  }

  .inputSec{
    width: 320px;
    
  }

  .inputSubmit{
    width: 300px;

  }


}
`;