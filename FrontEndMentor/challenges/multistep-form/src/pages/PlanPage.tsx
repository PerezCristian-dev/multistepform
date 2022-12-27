import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlansSelector } from "../components/PlansSelector";
import { useOrderContext } from "../store/OrderContext";

export const PlanPage = () => {

  const [planSelected, setPlanSelected] = useState(false)
  const {order} = useOrderContext();
  const navigate = useNavigate();

  const {plans} = order;


  const handleNext = () => {
      const isSelected = plans.filter(plan=>plan.select === true)
       if(!isSelected[0]){setPlanSelected(prev=>true); return;}
      navigate("/addons");
  };
 
  const handleBack =()=>{
    navigate('/info', {replace: true})
  }


  return (
    <div className="displayed__page">
      <div className="title__section">
        <h1 className="page__title">Select your plan</h1>
        <p className="page__desc">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <PlansSelector isSelected={planSelected}/>
      <div className="btn__section">
        <button className="page__btn__back" onClick={handleBack}>Go Back</button>
        <button className="page__btn__forward" onClick={handleNext}>Next Step</button>
      </div>
    </div>
  );
};
