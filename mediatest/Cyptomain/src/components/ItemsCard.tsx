import React from "react";
import { CardData } from "../data/data";

interface item {
  id: number;
  title: string;
  desc: string;
  img: string;
}

export const ItemsCard = () => {
  return (
    <div className="flex flex-col">
      <h2 className="self-center mb-28 mt-8 font-bold text-3xl text-blue-900">
        Welcome to cryptocurrencies
      </h2>
      <div className="flex flex-wrap w-[100vw - 20px] justify-center">
        {CardData.map((item: item) => (
          <div className="flex items-center card__container" key={item.id}>
            <div className="card__logo">
              <img className="card__img" src={item.img} alt="" />
            </div>
            <div className="flex flex-col  p-6 h-[100%] w-[95%]">
              <div>
                <h3 className="text-white mb-2 w-[100%] text-4xl">
                  {item.title}
                </h3>
                <hr className="line_blue mb-2" />
              </div>
              <p className="text-white w-[85%] leading-normal">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
