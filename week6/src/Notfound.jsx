import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
function Notfound() {
  const [count, setCount] = useState(10);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => setCount(count - 1), 1000);
    if (count == 0) navigate("/");
  }, [count]);
  return <div>Notfound {count}</div>;
}

export default Notfound;
