import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Error() {
  const [countDown, setCountDown] = useState(5);
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("./");
  };

  useEffect(() => {
    // this iis working without using useEffect..?
    if (countDown > 0) {
      setTimeout(() => {
        setCountDown(countDown - 1);
      }, 1000);
    } else {
      navigate("/");
    }
  }, [countDown, navigate]);

  return (
    <div style={{ color: "red", marginTop: "20px", fontStyle: "italic" }}>
      <h2> Error: Not Found !! </h2>
      <p>Error: Invalid page path, please redirect to home page</p>
      <div>
        <Button onClick={clickHandler} variant="primary">
          Go to Homepage
        </Button>
        <p className="mt-3" style={{ color: "#fff" }}>
          you will be auto-redirect to the home page in {countDown} second
        </p>
      </div>
    </div>
  );
}

export default Error;
