import { TweetBox } from "./TweetBox";
import { Contenedor, Header } from "./styled";
import PostList from "./PostList";
import useTweet from "../../context/tweetContext";
import useData from "./utils/useData.js";
import saveTweet from "./utils/saveTweet";
import useUser from '../../context/userContext'
import { useState } from "react";

export const Home = () => {
  const {currentUser} = useUser()
  const [tweets, setTweets] = useState([])
  const {postTweet, getTweets} = useTweet()
  const {loading, error} = useData(getTweets, setTweets)
  
  if(error) return <h2>An error happend</h2>
  if(loading) return <h2>Loading...</h2>

  return (
    <Contenedor>
      <Header/>
      <TweetBox saveTweet={saveTweet} postTweet={postTweet} setTweets={setTweets} tweets={tweets} currentUser={currentUser}/>
      <PostList tweets={tweets}/>
    </Contenedor>
  );
};
