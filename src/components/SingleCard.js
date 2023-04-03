import "./SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
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
