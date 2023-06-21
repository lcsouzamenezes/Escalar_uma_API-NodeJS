import { createServer } from "http";
import { task } from "./task.mjs";

const requestHandler = async (req, res) => {
  if (req.url === "/data") {
    const data = await task();
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify(data));
  } else {
    res.end("Endpoint inválido");
  }
};

const server = createServer(requestHandler);

server.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
