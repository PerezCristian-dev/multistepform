import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useOrderContext } from "../store/OrderContext";

export const Summary = () => {
  const { order, setOrder } = useOrderContext();
  const { plans, total, monthly } = order;
  const selectedPlan = plans.filter((plan) => plan.select === true)[0] || [{}];
  const selectedaddons = order.addons.filter(
    (addon) => addon.select === true
  ) || [{}];
  
  let type:string = "mo"
  let newPrice:number = 1;
  if(!monthly){
    type = "yr"
    newPrice *= 10;
  }

  const planTotal: number = selectedPlan.price || 0;

  useEffect(() => {
    setOrder((prev) => {
      let addonsTotal = 0;
      if (!selectedaddons[0]) {
        addonsTotal = 0;
      } else {
        const addonsPrices = selectedaddons.map((addon) => addon.price);
        addonsTotal = addonsPrices.reduce((prev, next) => prev + next);
      }
      let orderTotal = planTotal + addonsTotal;
      return { ...prev, total: orderTotal };
    });
  }, []);


  return (
    <div className="summary__section__container">
      <div className="summary__container">
        <div className="summary__plan__section">
          <div className="summary__plan">
            <span className="summary__plan__title">
              {selectedPlan.name || "no plan selected"}
            </span>
            <Link to="/plans">Change</Link>
          </div>
          <span className="summary__plan__price">{`+$${
            selectedPlan.price * newPrice || "0"
          }/${type}`}</span>
        </div>
        <hr />
        {selectedaddons &&
          selectedaddons.map((addon) => (
            <div className="summary_addons" key={addon.id}>
              <span>{addon.title}</span>
              <span>{`+$${addon.price * newPrice}/${type}`}</span>
            </div>
          ))}
      </div>
      <div className="summary_total">
        <span className="summary_total_title">{`Total ${monthly? "(per month)":"(per year)"}`}</span>
        <span className="summary_total_amount">{`+$${total * newPrice}/${type}`}</span>
      </div>
    </div>
  );
};
