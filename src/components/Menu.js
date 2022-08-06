import React from "react";
import { Link,useNavigate } from "react-router-dom";
function Menu() {
    const navigate = useNavigate()
  return (
    <div>
      <ul className="menu">
        <li>
          <Link to="/"> Ana Sayfa </Link>
        </li>
        <li>
          <Link to="users"> Kullanıcılar</Link>
        </li>
        <li>
          <Link to="contact"> İletişim </Link>
        </li>
        {/* Link to yerine useNavigate hook'unu bu şekilde kullanabiliyoruz */}
        {/* parametreyi -1 verince bir önceki sayfaya gidiyor */}
        <li onClick={()=>navigate(-1)}> 
          İletişim 
        </li>
      </ul>
    </div>
  );
}

export default Menu;
