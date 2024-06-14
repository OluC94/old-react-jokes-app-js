import React from "react"
import Joke from "./Components/Joke"

const App = () => {
    const jokeData = [
        {
            setup: "How would you describe a male ant that floats?",
            punchline: "Bouyant"
        },
        {
            setup: "",
            punchline: "I got back from the hospital and the doctor told us that my wife is eating for two now (she has a tapeworm)"
        },
        {
            setup: "How many software engineers does it take to change a lightbulb",
            punchline: "Three. One to hold the lightbulb and two to spin the ladder"
        },
        {
            setup: "",
            punchline: "Time flies like an arrow. Fruit flies like a banana"
        },
        {
            setup: "A policy officer caught two kids playing with a firework and a car battery.",
            punchline: "He charged one and let the other off."
        }
        
    ]
    return (<main>
        {jokeData.map(joke => {
            return (<Joke setup={joke.setup} punchline={joke.punchline} />)
        })}
    </main>)
}

export default App