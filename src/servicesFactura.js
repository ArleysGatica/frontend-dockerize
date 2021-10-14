import axios from "axios";
const apiUrl = "0";
export async function postFactura(Factura) {
  const baseUrl = apiUrl;
  console.log(Factura);
  await axios
    .post(baseUrl, Factura)
    .then((response) => console.log("success full"))
    .catch((error) => console.log(error));
}
