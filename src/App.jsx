
import './App.css'
import './components/cards/cards.css'
import CardsComponent from './components/cards/cardsComponent.jsx'
import cards from './components/data.js'

function App() {

  return (
    <>
      <div>
        {cards.map((card) => (
          <CardsComponent
            key={card.title}
            {...card}
          />
        ))}
      </div>
    </>
  )
}

export default App
