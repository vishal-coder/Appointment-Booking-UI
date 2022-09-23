export async function requestLogin(values) {
  const response = await fetch(`${process.env.REACT_APP_API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(values),
  });

  const data = await response.json();
  return data;
}

export async function submitRegistration(values) {
  try {
    const response = await fetch(`${process.env.REACT_APP_API}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false, message: "Please try again later" };
  }
}

export async function handleforgotpassword(values) {
  const response = await fetch(
    `${process.env.REACT_APP_API}/auth/forgotPassword`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    }
  );

  const data = await response.json();
  return data;
}

export async function handleresetpassword(values, id, token) {
  const response = await fetch(
    `${process.env.REACT_APP_API}/auth/resetPassword?id=${id}&token=${token}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    }
  );

  const data = await response.json();
  return data;
}

export const logoutUser = async (token) => {
  const response = await fetch(`${process.env.REACT_APP_API}/auth/logoutUser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-auth-token": token,
    },
    body: JSON.stringify({ token: token }),
  });

  const data = await response.json();

  return data;
};
