import { TweetBox } from "./TweetBox";
import { Contenedor, Header } from "./styled";
import PostList from "./PostList";
import useTweet from "../../context/tweetContext";
import useData from "../../utils/useData.js";
import useUser from '../../context/userContext'
import { useState } from "react";

export const Home = () => {
  const {currentUser} = useUser()
  const {postTweet, getTweets} = useTweet()
  const [uploaded, setUploaded] = useState(null)
  const [refresh, setRefresh] = useState(false)
  const {loading, error, data} = useData(getTweets, [refresh])

  if(error) return <h2>An error happend</h2>
  if(loading) return <h2>Loading...</h2>

  const saveTweet = async (message) => {
    
    const image = currentUser.image
    if(currentUser){
      const newTweet = {data:message, user:currentUser, image, uploaded}
      postTweet(newTweet)
      .then(()=> setRefresh(!refresh))
      .catch(e => console.log(e))
    }
    else alert("Please Login to tweet")
  
  }

  const handleFileInput = (e) => {
  
    if(currentUser){
      const inputFile = e.target.files[0]
      setUploaded(inputFile)
    }
    else alert("Please Login to tweet")
  
    }
  
  return (
    <Contenedor>
      <Header/>
      <TweetBox saveTweet={saveTweet} handleFileInput={handleFileInput} />
      <PostList tweets={data}/>
    </Contenedor>
  );
};
