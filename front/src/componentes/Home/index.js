import {useEffect, useState} from "react";
import { TweetBox } from "./TweetBox";
import { Contenedor, Header } from "./styled";
import PostList from "./PostList";
import useUser from "../../context/userContext";
import useTweet from "../../context/tweetContext";

export const Home = () => {
  const [tweets, setTweets] = useState([])
  const [loading,setLoading]= useState(true)
  const [error,setError]=useState()
  const {currentUser} = useUser()
  const {postTweet, getTweets} = useTweet()

  //transformar a custom hook, ej: const {data,error,loading} = useData(getTweets,[])
  useEffect(()=>{
    setLoading(true)
    getTweets()
    .then(data=>setTweets(data))
    .catch(e=>setError(e))
    .finally(()=>setLoading(false))
  },[])
  if(error){
    console.log(error)
    return <h2>An error happend</h2>
  }

  if(loading){
    return <h2>Loading...</h2>
  }
  //debugin
  console.log(tweets)

  const saveTweet= async(message,image)=>{
    if(currentUser){
      const newTweet = {data:message, user:currentUser, image}
      setTweets([newTweet, ...tweets])
      await postTweet(newTweet)
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
