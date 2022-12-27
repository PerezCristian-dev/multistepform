
import { useNavigate } from "react-router-dom";
import { Summary } from "../components/Summary";

export const SummaryPage = () => {

const navigate = useNavigate();

  const handleConfirm =()=>{
    navigate('/confirmation', {replace: true})
  }

  const handleBack =()=>{
    navigate('/addons', {replace: true})
  }


  return (
    <div className="displayed__page">
      <div className="title__section">
        <h1 className="page__title">Finishing up</h1>
        <p className="page__desc">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <Summary />
      <div className="btn__section">
        <button className="page__btn__back" onClick={handleBack}>Go Back</button>
        <button className="page__btn__forward" onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  );
};
