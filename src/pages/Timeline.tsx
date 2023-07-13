import { FormEvent, useState, KeyboardEvent } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Timeline.css'
import { PaperPlaneRight } from "phosphor-react"



export function Timeline(){

  const [newTweet, setNewTweet] = useState ('')

  const [tweets, setTweets] = useState ([
  'Meu Primeiro Tweet',
  'Teste',
  'Deu certo'
  ])
  
  function handleHotKeySubmit(event: KeyboardEvent){
    if (event.key ==='Enter' && (event.ctrlKey || event.metaKey)){
      setTweets([newTweet, ...tweets ])
      setNewTweet ('')
    }
  }

  function createNewTweet (event: FormEvent){
    event.preventDefault()
    setTweets([newTweet, ...tweets ])
    setNewTweet ('')
  }

   
return (
    <main className="timeline">
    <Header title="Home"/>
    
    
    <form onSubmit={createNewTweet} className="new-tweet-form">
      <label htmlFor="tweet">
        <img src="https://github.com/Dekiwill.png" alt="foto de perfil DekiWill" />
        <textarea
          id="tweet" 
          placeholder="O que está acontecendo?"
          value = {newTweet}
          onKeyDown={handleHotKeySubmit}
          onChange={(event)=> {
            
            setNewTweet (event.target.value)
          }} 
          />
      </label>

      <button type="submit">  
      <PaperPlaneRight/>
      <span>Tweet</span>
      </button>
    </form>
    
    <Separator/>
          {
            tweets.map(tweet =>{
              return <Tweet key={tweet} content={tweet}/>
            }) 
          }
    </main>
)
}