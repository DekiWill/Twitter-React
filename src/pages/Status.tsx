import { FormEvent, useState, KeyboardEvent } from 'react'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'
import './Status.css'
import { PaperPlaneRight } from 'phosphor-react'


export function Status(){
  const [newAnswers, setNewAnswers] = useState ('')

  const [answers, setAnswers] = useState ([
      '1 Resposta',
      '2 Respostas',
      '3 Respostas'
  ])

  function handleHotKeySubmit(event: KeyboardEvent){
    if (event.key ==='Enter' && (event.ctrlKey || event.metaKey)){
      setAnswers([newAnswers, ...answers ])
      setNewAnswers ('')
    }
  }

  function createNewAnswer (event: FormEvent){
    event.preventDefault()
    setAnswers([newAnswers, ...answers ])
    setNewAnswers ('')
  }

    return (
        <main className="timeline">
        <Header title="Tweet"/>

        <Tweet content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam maiores voluptatum 
        necessitatibus rem consectetur, culpa labore eius quos repellendus inventore magni, dolorum tempore vel laudantium corrupti 
        sunt nemo quo odio?'/>
        
        <Separator/>

        <form onSubmit={createNewAnswer} className="answer-tweet-form">
          <label htmlFor="tweet">
            <img src="https://github.com/Dekiwill.png" alt="foto de perfil DekiWill" />
            <textarea  
            id="tweet"
            value = {newAnswers} 
            placeholder="Digite sua resposta" 
            onKeyDown={handleHotKeySubmit}
            onChange={(event)=> {
            
              setNewAnswers (event.target.value)

            }} 
            />
          </label>
          <button type="submit">
            <PaperPlaneRight/>
            <span>Responder</span> 
          </button>
        </form>
        
        {
            answers.map(answers => {
            return <Tweet key={answers} content={answers}/>
            })
        }
        </main>
    )
    

    
}