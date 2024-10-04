const express = require('express');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const expressHandlebars = require('express-handlebars');
const cors = require('cors');
require('dotenv').config();

const hbsInstance = expressHandlebars.create({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, '/views/layouts'),
  helpers: {
    json: function (context) {
      return JSON.stringify(context);
    }
  }
});

const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000; // Defina um valor padrão se PORT não estiver definido
const { ENABLED_CORS } = process.env;

// Adicione o middleware cors
app.use(cors({
  origin: ENABLED_CORS || '*',  // Use '*' como valor padrão se ENABLED_CORS não estiver definido
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use(express.static(path.join(__dirname, '/public/')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const isProduction = process.env.NODE_ENV === 'production';

app.use(session({
  secret: 'secreto',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1 * 60 * 1000,
    secure: isProduction
  }
}));

app.use(flash());

app.use((req, res, next) => {
  res.locals.successMessage = req.flash('successMessage'); // Corrigido de 'sucessMessage' para 'successMessage'
  res.locals.errorMessage = req.flash('errorMessage');
  next();
});

app.engine('handlebars', hbsInstance.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/views'));

app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando no http://localhost:${PORT}/`);
});
