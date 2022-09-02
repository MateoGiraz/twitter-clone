import {useState} from "react";
import { TweetBox } from "./TweetBox";
import { Contenedor, Header } from "./styled";
import PostList from "./PostList";


export const Home = () => {
  const [tweets, setTweets] = useState([])

  return (
    <Contenedor>
      <Header/>
      <TweetBox tweets={tweets} setTweets={setTweets}/>
      <PostList tweets={tweets}/>
    </Contenedor>
  );
};
