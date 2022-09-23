import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function VerifyToken() {
  const navigate = useNavigate();

  useEffect(() => {
    HandleTokenFromQueryParams();
  }, []);

  const HandleTokenFromQueryParams = async () => {
    const query = new URLSearchParams(window.location.search);
    const id = query.get("id");
    const token = query.get("token");

    const date = await fetch(
      `${process.env.REACT_APP_API}/auth/verifyToken?id=${id}&token=${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ id: id, token: token }),
      }
    );

    const response = await date.json();
    if (response.success) {
      localStorage.setItem("id", id);
      localStorage.setItem("token", token);
      navigate("/resetPassword");
    } else {
      alert("Invalid Token..Try resetting your password again");
      navigate("/forgotpassword");
    }
  };

  const [isValidToken, setIsValidToken] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Please wait..Verifying your token </h1>
    </div>
  );
}

export default VerifyToken;
