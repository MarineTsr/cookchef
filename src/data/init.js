import { data } from "./recipes";

const init = async () => {
  try {
    await fetch("https://restapi.fr/api/CookChef", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });
  } catch (e) {
    console.error(e);
  }
};

export default init;
