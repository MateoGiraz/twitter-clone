import {useState} from "react";
import { TweetBox } from "./TweetBox";
import { Contenedor, Header } from "./styled";
import PostList from "./PostList";
import useUser from "../../context/userContext";

export const Home = () => {
  const [tweets, setTweets] = useState([])
  const {currentUser} = useUser()


  const saveTweet=(message,gif)=>{
    if(currentUser){
      const newTweet = {message, user:currentUser, gif}
      setTweets([newTweet, ...tweets])
    }
    else alert("Please Login to tweet")
  }

  return (
    <Contenedor>
      <Header/>
      <TweetBox saveTweet={saveTweet}/>
      <PostList tweets={tweets}/>
    </Contenedor>
  );
};
