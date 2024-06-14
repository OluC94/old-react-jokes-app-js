import React from "react"
import Joke from "./Components/Joke"
import { jokeData } from "./jokeData"

const App = () => {
    const jokeElements = jokeData.map(joke => {
        return (<Joke setup={joke.setup} punchline={joke.punchline} />)
    })
    return (<main>
        {jokeElements}
    </main>)
}

export default App