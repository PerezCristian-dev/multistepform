
import { NavLink } from "react-router-dom";
import { SideBarItem } from "./SideBarItem";

export const SideBar = () => {

  return (
    <div className="side_menu_container">
      <NavLink className={`navbar-link`} to="/*">
        {({isActive})=>(<SideBarItem active={isActive} step={1} desc={"your info"} />)}
      </NavLink>
      <NavLink className="navbar-link" to="/plans">
        {({isActive})=>(<SideBarItem active={isActive} step={2} desc={"select plan"} />)}
      </NavLink>
      <NavLink className="navbar-link" to="/addons">
        {({isActive})=>(<SideBarItem active={isActive} step={3} desc={"add-ons"} />)}
      </NavLink>
      <NavLink className="navbar-link" to="/summary">
        {({isActive})=>(<SideBarItem active={isActive} step={4} desc={"summary"} />)}
      </NavLink>
    </div>
  );
};
