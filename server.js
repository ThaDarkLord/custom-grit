const path = require('path');
const Sequelize = require('sequelize');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');


const help = require('./views/layouts/utils/helper')

const app = express();

const PORT = process.env.PORT || 3001;

// Set up sessions
const sess = {
  secret: 'Super secret secret',
  resave: false,
  saveUninitialized: false,
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

Sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});