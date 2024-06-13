import React from "react"
import Joke from "./Components/Joke"

const App = () => {
    return (<main>
        <Joke setup="What's the best thing about Switzerland?" punchline="I don't know, but the flag is a big plus!"/>
        <Joke setup="How would you describe a male ant that floats?" punchline="Bouyant"/>
        <Joke punchline="I got back from the hospital and the doctor told us that my wife is eating for two now (she has a tapeworm)"/>
        <Joke setup="How many software engineers does it take to change a lightbulb" punchline="Three. One to hold the lightbulb and two to spin the ladder"/>
    </main>)
}

export default App