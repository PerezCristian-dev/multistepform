import { addon, useOrderContext } from "../store/OrderContext";
import { CheckItem } from "./CheckItem";

export const AddOnSelector = () => {
  const { order, setOrder } = useOrderContext();

  const { addons } = order;

  const handleChange = (addon: addon) => {
    const { id } = addon;
    setOrder((prev) => {
      const { client, plans, monthly, addons, total } = prev;
      const updatedAddons = addons.map((addon) => {
        const { id: addonId, price, select, title, type, desc } = addon;
        if (addon.id === id) {
          return { id: addonId, price, select: !select, title, type, desc };
        } else {
          return { ...addon };
        }
      });
      return { client, plans, monthly, addons: updatedAddons, total };
    });
  };

  return (
    <div className="addons__container">
      {addons.map((addon) => (
        <CheckItem
          key={addon.id}
          id={addon.type}
          monthly={order.monthly}
          title={addon.title}
          desc={addon.desc}
          price={addon.price}
          select={addon.select}
          handleChange={() => handleChange(addon)}
        />
      ))}
    </div>
  );
};
