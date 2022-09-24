export function formatDate(dateStr) {
  const date = new Date(dateStr);
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  let yyyy = date.getFullYear();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  return (dateStr = dd + "-" + mm + "-" + yyyy + " " + hr + ":" + min);
}

export function formatOnlyDate(dateStr) {
  const date = new Date(dateStr);
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  let yyyy = date.getFullYear();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  return (dateStr = dd + "-" + mm + "-" + yyyy);
}
