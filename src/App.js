import { useState } from "react";
const cardImages = [
  { src: "/img/helment-1.png" },
  { src: "/img/potion-1.png" },
  { src: "/img/ring-1.png" },
  { src: "/img/scrool-1.png" },
  { src: "/img/shield-1.png" },
  { src: "/img/sword-1.png" },
];

function App() {
  const [cards, setCards] = useState([]);

  const suffleCards=()=>{
    setCards()
  }
  return (
    <div className="flex flex-col items-center bg-purple-400 h-[100vh]">
      <h1 className="text-center m-0">Magic card Game</h1>
      <button>Start New Game</button>

      <div>
        <img src={cardImages[1].src} alt="a card" />
      </div>
    </div>
  );
}

export default App;
