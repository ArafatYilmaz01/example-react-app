import React from "react";
import { Link,useNavigate } from "react-router-dom";
function Menu() {
    const navigate = useNavigate()
  return (
    <div>
      <ul className="menu">
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="users"> Users</Link>
        </li>
        <li>
          <Link to="contact"> Contact </Link>
        </li>
        {/* Link to yerine useNavigate hook'unu bu şekilde kullanabiliyoruz */}
        {/* parametreyi -1 verince bir önceki sayfaya gidiyor */}
        <li onClick={()=>navigate(-1)}> 
          Previous Page 
        </li>
      </ul>
    </div>
  );
}

export default Menu;
