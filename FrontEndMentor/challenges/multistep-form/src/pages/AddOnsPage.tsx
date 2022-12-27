import { useNavigate } from "react-router-dom";
import { AddOnSelector } from "../components/AddOnSelector";

export const AddOnsPage = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/summary");
  };

  const handleBack = () => {
    navigate("/plans", { replace: true });
  };

  return (
    <div className="displayed__page">
      <div className="title__section">
        <h1 className="page__title">Pick add-ons</h1>
        <p className="page__desc">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <AddOnSelector />
      <div className="btn__section">
        <button className="page__btn__back" onClick={handleBack}>
          Go Back
        </button>
        <button className="page__btn__forward" onClick={handleNext}>
          Next Step
        </button>
      </div>
    </div>
  );
};
