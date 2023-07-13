import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react"

import "./Tweet.css"
import { Link } from "react-router-dom"

interface Tweet {
    content: string
}

export function Tweet(props:Tweet){
    return ( 
        <Link to="/tweet" className="tweet">
            <img src="https://github.com/DekiWill.png" alt="William Watanabe" />

            <div className="tweet-content">
                <div className="tweet-content-header">
                <strong>William Watanabe</strong>
                <span>@DekiWill</span>
                </div>

                <p>
                 {props.content}
                </p>
                <div className="tweet-content-footer">
                    <button type="button"> <ChatCircle/> 20 </button>
                    <button type="button"> <ArrowsClockwise/> Retweet </button>
                    <button type="button"> <Heart/> Likes </button>

                </div>
            </div>

        </Link >
    )
}