import "./SingleCard.css";
import { useMediaQuery } from "@mui/material";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {

  const isMobile = useMediaQuery("(max-width: 600px)");
  const size = isMobile ? "75px" : "200px";

  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img 
          className="front" 
          height={size}
          width={size} 
          src={card.src} 
          alt="card front" />
        <img
          className="back"
          height={size}
          width={size}
          src="/imgs/cover.jpeg"
          alt="cover"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
