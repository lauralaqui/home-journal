import React from "react"
import data from "./data"
import Nav from "./components/Nav"
import Cards from "./components/Cards"

export default function App() {
    const cards = data.map(destination => 
     <Cards 
        key={destination.title}
        destination={destination}
        />
    )
    
    return (
    <div>
        <Nav />
        <main className="cards-list">
            {cards}
        </main>
    </div>
    )
}