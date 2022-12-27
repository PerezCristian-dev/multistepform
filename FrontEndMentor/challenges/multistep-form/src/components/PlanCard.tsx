interface Props {
  img: string;
  title: string;
  price: number;
  handleSelect: () => void;
  isSelected: boolean;
  monthly: boolean;
}

export const PlanCard = ({
  img,
  title,
  price,
  handleSelect,
  isSelected,
  monthly,
}: Props) => {
  let type: string = "mo";
  if (!monthly) {
    type = "yr";
    price *= 10;
  }

  return (
    <div
      className={`plan__card ${isSelected ? "planSelected" : ""}`}
      onClick={handleSelect}
    >
      <img className="plan__card_img" src={img} alt={title} />
      <span>
        <h2 className="plan__card__title">{title}</h2>
        <p className="plan__card__price">{`$${price}/${type}`}</p>
      </span>
    </div>
  );
};
