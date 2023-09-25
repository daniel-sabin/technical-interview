import http, { IncomingMessage, ServerResponse } from "http";


const host = 'localhost';
const port = 8000;

const requestListener = (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200);
  res.end("My first server!");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});