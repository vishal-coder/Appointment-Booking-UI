export async function addNewDoctor(values, token) {
  try {
    const response = await fetch(`${process.env.REACT_APP_API}/doctor/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-auth-token": token,
      },
      body: JSON.stringify(values),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false, message: "Please try again later" };
  }
}

export async function deleteDoctor(values, token) {
  try {
    const response = await fetch(`${process.env.REACT_APP_API}/doctor/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-auth-token": token,
      },
      body: JSON.stringify(values),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false, message: "Please try again later" };
  }
}

export async function getDoctorList() {
  try {
    const response = await fetch(`${process.env.REACT_APP_API}/doctor/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false, message: "Please try again later" };
  }
}
