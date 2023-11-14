import { useEffect, useState } from "react";
import "./styles/main.css";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { src: "/img/potion-1.png", matched: false },
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [numTurns, setNumTurns] = useState(null);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const newGame = () => {
    // suffles card deck
    const suffledCards = [...cardImages, ...cardImages]
      .map((card) => ({
        id: Math.random(),
        ...card,
      }))
      .sort(() => Math.random() - 0.5);

    setCards(suffledCards);

    setNumTurns(0);
  };

  const handelChoice = (card) => {
    // save selection
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    const compareCards = () => {
      if (choiceOne.src === choiceTwo.src) {
        // found a match
        setCards(
          cards.map((item) => {
            if (item.src === choiceOne.src) {
              item.matched = true;
            }
            return item;
          })
        );
      }
    };

    const resetChoices = () => {
      setTimeout(() => {
        setChoiceOne(null);
        setChoiceTwo(null);
      }, 1000);

      setNumTurns((prevState) => prevState + 1);
    };
    // check two cards are selected
    if (choiceOne && choiceTwo) {
      compareCards();
      resetChoices();
    }
  }, [choiceOne, choiceTwo, cards]);

  return (
    <div className="flex flex-col justify-start items-center gap-2 bg-purple-900 h-screen">
      <h1 className="title-text my-6">Magic Card Game</h1>
      <button className="primary-button" onClick={newGame}>
        Start New Game
      </button>

      <div className="card-deck flex flex-wrap gap-[25px] items-center w-[375px] my-[15px]">
        {cards.map((card) => {
          return (
            <SingleCard
              key={card.id}
              card={card}
              handelChoice={handelChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={choiceOne && choiceTwo}
            />
          );
        })}
      </div>

      <h3 className="text-white">
        {numTurns != null && <span>{numTurns} Turns Made </span>}
      </h3>
    </div>
  );
}

export default App;
