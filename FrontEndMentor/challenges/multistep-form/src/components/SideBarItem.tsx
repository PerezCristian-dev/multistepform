interface Props {
  active: boolean;
  step: number;
  desc: string;
}

export const SideBarItem = ({ active, step, desc }: Props) => {
  return (
    <div className="side_menu_item">
      <span className={`step ${active ? "isActive" : "null"}`}><h1>{step}</h1></span>
      <span className="info">
        <h3 className="step__info">{`STEP ${step}`}</h3>
        <h2 className="step__desc">{desc}</h2>
      </span>
    </div>
  );
};
