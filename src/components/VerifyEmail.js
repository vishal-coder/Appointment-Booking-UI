import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function VerifyEmail() {
  const [isValidToken, setIsValidToken] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [responseMsg, setResponseMsg] = useState("");
  const { token } = useParams();
  useEffect(() => {
    HandleTokenFromQueryParams(token);
  }, []);

  const HandleTokenFromQueryParams = async (token) => {
    const response = await fetch(
      `${process.env.REACT_APP_API}/auth/verifyEmail/:${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ token: token }),
      }
    );

    const data = await response.json();
    setIsLoading(false);
    if (data.success) {
      setIsValidToken(true);
      setResponseMsg(data.message);
    } else {
      setIsValidToken(false);
      setResponseMsg(data.message);
    }
  };

  return (
    <div className={isValidToken ? " successResponse" : "errorResponse"}>
      {isLoading ? (
        <>
          <h1>Please wait..Verifying your email </h1>
        </>
      ) : (
        <div className={isValidToken ? " successResponse" : "error"}>
          <h1>
            <strong>{responseMsg}</strong>.{" "}
          </h1>

          <h3>
            {isValidToken ? (
              <Link to="/login">Please Login</Link>
            ) : (
              <Link to="/register">Please Register again</Link>
            )}
          </h3>
        </div>
      )}
    </div>
  );
}

export default VerifyEmail;
