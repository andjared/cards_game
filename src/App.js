import { useState } from "react";
import "./styles/style.scss";
import Cards from "./components/Cards";

import Players from "./components/Players";

function App() {
  const [cards, setCards] = useState();
  const [round, setRound] = useState(0);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);

  const drawAcard = async () => {
    const response = await fetch(
      `https://deckofcardsapi.com/api/deck/new/draw/?count=2`
    );
    const data = await response.json();
    setCards(data.cards);
    getCardsValues(data.cards);
    setRound((prevRound) => prevRound + 1);
  };

  //get cards value in array type of numbers because drawAcard returns card value type of string
  const getCardsValues = (cards) => {
    const cardsValues = [];
    const honourCards = [
      { name: "ACE", value: 11 },
      { name: "JACK", value: 12 },
      { name: "QUEEN", value: 13 },
      { name: "KING", value: 14 },
    ];
    if (cards) {
      cards.forEach((card) => {
        if (Number(card.value)) {
          cardsValues.push(Number(card.value));
          return;
        }
        honourCards.forEach((item) => {
          if (card.value === item.name) {
            cardsValues.push(item.value);
          }
        });
      });
    }
    biggerCard(cardsValues);
  };
  // determine whose cards is bigger & and its value to previous state
  const biggerCard = (cards) => {
    if (cards[0] > cards[1]) {
      setPlayerOneScore((prevScore) => prevScore + cards[0]);
    } else if (cards[0] < cards[1]) {
      setPlayerTwoScore((prevScore) => prevScore + cards[1]);
    }
  };
  const handleRestart = () => {
    setCards();
    setRound(0);
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
  };
  return (
    <div className="App">
      <div className="container">
        <div className="players">
          <Players
            round={round}
            playerOneScore={playerOneScore}
            playerTwoScore={playerTwoScore}
            handleClick={drawAcard}
            handleRestart={handleRestart}
          />
        </div>
        <Cards cards={cards} />
      </div>
    </div>
  );
}

export default App;
