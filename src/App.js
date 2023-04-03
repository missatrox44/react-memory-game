import { useState } from "react";
import "./App.css";

const cardImages = [
  { src: "/imgs/chris-bike.jpeg" },
  { src: "/imgs/chris-repel.jpeg" },
  { src: "/imgs/jaws.jpeg" },
  { src: "/imgs/sara-bike.jpeg" },
  { src: "/imgs/sara-repel.jpeg" },
  { src: "/imgs/sitting-water.jpeg" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  //shuffle cards -> create two of each card, mix them up, add ids
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    //update card state
    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

  return (
    <div className="App">
      <h1>Rio Secreto Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <div>
              <img
                className="front"
                height="200px"
                src={card.src}
                alt="card front"
              />
              <img
                className="back"
                height="200px"
                src="/imgs/cover.jpeg"
                alt="cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
