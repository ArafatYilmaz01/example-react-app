import React, { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

function UserDetail() {
  const location = useLocation();
  const { id } = useParams();
  const [user, setUser] = useState(location.state);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id, user]);

  return (
    <div>
      <h2>User Detail</h2>
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
      <Link to={`/users/${Number(id) + 1}`}> Next User</Link>
    </div>
  );
}

export default UserDetail;
