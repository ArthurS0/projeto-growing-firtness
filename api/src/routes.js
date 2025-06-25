const express = require('express');
const routes = express.Router();

const Usuario = require('./controllers/usuario');
const Telefone = require('./controllers/telefone.js');
const Produto = require('./controllers/produto');
const Pedido = require('./controllers/pedido.js/index.js');
const Item = require('./controllers/item.js/index.js');

routes.get('/', (req, res) => {
  return res.json({ titulo: 'Level Up Fitness' });
});

routes.post('/usuarios', Usuario.create);
routes.get('/usuarios', Usuario.read);
routes.get('/usuarios/:id', Usuario.readOne);
routes.patch('/usuarios/:id', Usuario.update);
routes.delete('/usuarios/:id', Usuario.remove);

routes.post('/telefones', Telefone.create);
routes.get('/telefones', Telefone.read);
routes.get('/telefones/:id', Telefone.readOne);
routes.patch('/telefones/:id', Telefone.update);
routes.delete('/telefones/:id', Telefone.remove);

routes.post('/produtos', Produto.create);
routes.get('/produtos', Produto.read);
routes.get('/produtos/:id', Produto.readOne);
routes.patch('/produtos/:id', Produto.update);
routes.delete('/produtos/:id', Produto.remove);

routes.post('/pedidos', Pedido.create);
routes.get('/pedidos', Pedido.read);
routes.get('/pedidos/:id', Pedido.readOne);
routes.patch('/pedidos/:id', Pedido.update);
routes.delete('/pedidos/:id', Pedido.remove);

routes.post('/itens', Item.create);
routes.get('/itens', Item.read);
routes.get('/itens/:id', Item.readOne);
routes.patch('/itens/:id', Item.update);
routes.delete('/itens/:id', Item.remove);

module.exports = routes;