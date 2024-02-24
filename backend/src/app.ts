import express from 'express';

const PORT = 3002;

const server = express();
const route = express.Router();

route.get('/', (req, res) => res.send('funciona'));

server.use(route);

server.listen(PORT, () => {
  console.log('The server is running at port: ', PORT);
});
