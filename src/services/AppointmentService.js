export async function addAppointment(values, token) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API}/appointment/add`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(values),
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false, message: "Please try again later" };
  }
}

export async function getAppointments(values, token) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API}/appointment/get`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(values),
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false, message: "Please try again later" };
  }
}

export async function updateAppointments(values, token) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API}/appointment/update`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(values),
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false, message: "Please try again later" };
  }
}
