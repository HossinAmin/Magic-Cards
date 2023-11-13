import "./SingleCard.css";
const cover = { src: "/img/cover.png" };
export default function SingleCard({ card, handelChoice, flipped, disabled }) {
  const handelCardClick = () => {
    if (!disabled) {
      handelChoice(card);
    }
  };
  return (
    <div className="w-[100px] h-[100px]  border-[1px] border-solid border-white">
      <img
        onClick={handelCardClick}
        className={`absolute w-[100px] h-[100px] ${flipped ? "show-flip" : ""}`}
        src={cover.src}
        alt="a card"
      />
      <img
        className={`w-[100px] h-[100px]  ${flipped ? "" : "hide-flip"}`}
        src={card.src}
        alt="a card"
      />
    </div>
  );
}
