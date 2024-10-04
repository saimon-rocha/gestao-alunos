// routes/index.js
const { Router } = require('express');
const HomeController = require('./apps/controllers/HomeController');
const homeRoutes = new Router();
const homeController = new HomeController();

homeRoutes.get('/', homeController.inicio.bind(homeController));
homeRoutes.get('/cadastrar', homeController.cadastrar.bind(homeController));
homeRoutes.post('/cadastrar', homeController.salvarCadastro.bind(homeController));

homeRoutes.get('/editar/:id', homeController.editar.bind(homeController));
homeRoutes.post('/editar/:id', homeController.salvarEdicao.bind(homeController));

homeRoutes.post('/excluir/:id', homeController.excluir.bind(homeController));

const routes = new Router();
routes.use('/home', homeRoutes);
routes.get('/', (req, res) => {
    res.redirect('/home/');
});

module.exports = routes;
