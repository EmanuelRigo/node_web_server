//const express = require("express");
import express from "express";

//const path = require("path");
import path from "path";

export const startServer = (option) => {
  const { port, public_path = "public" } = option;

  const app = express();

  //Para poder usar middlewares se usa la palabra "use" (express)
  app.use(express.static(public_path)); // contenido estatico que ponemos disponible

  app.get("*", (req, res) => {
    const indexPath = path.join(__dirname + `../../${public_path}/index.html`);
    res.sendFile(indexPath);
  });

  app.listen(port, () => {
    console.log(`escuchando en el puerto ${port}`);
  });
};
