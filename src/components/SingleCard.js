import './SingleCard.css';

export default function SingleCard({ card, handleChoice }) {

  const handleClick = () => {
    handleChoice(card)
  }

  return (
    <div className="card" >
      <div>
        <img className="front" height="200px" src={card.src} alt="card front" />
        <img
          className="back"
          height="200px"
          src="/imgs/cover.jpeg"
          alt="cover"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
