import {React} from "react";

function NavLink(props) {
    const {name,handleClick}=props;
  return (
    <div>
      <li className="nav-item">
        <p className="nav-link" aria-current="page" style={{cursor:"pointer"}} onClick={handleClick}>{name}</p>
        {/* <a className="nav-link" aria-current="page" href="/">
          {props.name}
        </a> */}
      </li>
    </div>
  );
}

export default NavLink;
