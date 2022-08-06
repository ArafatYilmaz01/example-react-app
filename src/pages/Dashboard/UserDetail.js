import React, { useState, useEffect } from "react";
import { useParams,Link,useLocation } from "react-router-dom";

function UserDetail() {
    const location=useLocation();
    const { id } = useParams();
  const [user, setUser] = useState(location.state);

 
  console.log(location.state)
  
    useEffect(() => {
        if(!user.id){
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
          .then(res => res.json())
          .then(data => setUser(data));
        }
      }, [id,user]);
  
  
  return (
    <div>
      <h2>Kullanıcı Detay</h2>
  {user&& <pre>{JSON.stringify(user, null, 2)}</pre> }
  <Link to={`/users/${Number(id)+1}`}> Sonraki Kullanıcı</Link>
    </div>
  );
}

export default UserDetail;
