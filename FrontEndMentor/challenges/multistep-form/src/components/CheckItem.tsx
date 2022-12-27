

interface Props {
  id: string;
  title: string;
  price: number;
  desc: string;

  select: boolean;
  handleChange: any;
  monthly: boolean;
}

export const CheckItem = (Props: Props) => {
  const { id, title, price, desc, select, handleChange, monthly } = Props;

  let type: string = "mo";

  let newPrice: number = price;

  if (!monthly) {
    type = "yr";
    newPrice *= 10;
  }

  return (
    <div className="check__item__container">
      <div className="check__item__titlesec">
        <input
          className="checkBox"
          type="checkbox"
          name={id}
          checked={select}
          onChange={(e) => handleChange(e)}
        />
        <span>
          <label className="checkTitle" htmlFor={id}>
            {title}
          </label>
          <p className="checkDesc">{desc}</p>
        </span>
      </div>
      <span>{`+$${newPrice}/${type}`}</span>
    </div>
  );
};
