import React from "react";
import { BASE_ENDPOINT_API } from "../../constants";

export const saveProduct = async (data) => {
  const form = new FormData();
  form.append("pic", data.picture);
  const res = await fetch(`${BASE_ENDPOINT_API}/api/product/pic`, {
    method: "POST",
    body: form,
  }).then((res) => res.json());
  if (res) {
    const product = await fetch(`${BASE_ENDPOINT_API}/api/product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.productName,
        price: +data.price,
        pic: res.file,
      }),
    }).then((res) => res.json());
    return product;
  }
};
