import React from "react";
export default function signIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      ~resolve({
        token: "djsakjdlajdkajhdkbjdn89846sdassda8ddajkjh3jk",
        user: {
          email: "jfontes.dev@gmail.com",
          nome: "JFontes",
        },
      });
    }, 2000);
  });
}
