import { TweetBox } from "./TweetBox";
import { Contenedor, Header } from "./styled";
import PostList from "./PostList";
import useTweet from "../../context/tweetContext";
import useData from "../../utils/useData.js";
import useUser from '../../context/userContext'
import { useState } from "react";
import cryptoRandomString from 'crypto-random-string';

export const Home = () => {
  const {currentUser} = useUser()
  const {postTweet, getTweets, uploadImage} = useTweet()
  const [upload, setUpload] = useState(null)
  const [refresh, setRefresh] = useState(false)
  const {loading, error, data} = useData(getTweets, [refresh])

  if(error) return <h2>An error happend</h2>
  if(loading) return <h2>Loading...</h2>
  
  const randomCode = () => cryptoRandomString({length: 30})

  const saveTweet = async (message) => {
    const tweetCode = randomCode()

    const formData = new FormData()
    formData.append('image', upload)
    formData.append('code', tweetCode)

    const image = currentUser.image
    if(!currentUser){
      alert("Please Login to tweet")
      return
    }
    
    const newTweet = {data:message, user:currentUser, image, tweetCode}
    postTweet(newTweet)
    .then(() => uploadImage(formData))
    .then(()=> setRefresh(!refresh))
    .catch(e => console.log(e))
    
  
  }

  const handleFileInput = (e) => {
  
    if(currentUser){
      const inputFile = e.target.files[0]
      setUpload(inputFile)
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
