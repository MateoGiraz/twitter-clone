import {useState} from "react";
import { TweetBox } from "./TweetBox";
import { Contenedor, Header } from "./styled";
import PostList from "./PostList";
import useUser from "../../context/userContext";
import useTweet from "../../context/tweetContext";

export const Home = () => {
  const [tweets, setTweets] = useState([])
  const {currentUser} = useUser()
  //const {postTweet, getTweets} = useTweet()

  const saveTweet= async(message,image)=>{
    if(currentUser){
      const newTweet = {message, user:currentUser, image}
      setTweets([newTweet, ...tweets])
     // await postTweet(newTweet)
    }
    else alert("Please Login to tweet")
  }
  //const tweets = await getTweets() 
  return (
    <Contenedor>
      <Header/>
      <TweetBox saveTweet={saveTweet}/>
      <PostList tweets={tweets}/>
    </Contenedor>
  );
};
