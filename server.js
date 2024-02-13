const path = require('path');
const sequelize = require('./config/connection');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers')
require('dotenv').config();
const helpers = require('./utils/helpers')

const app = express();

const PORT = process.env.PORT || 3001;

// Set up sessions
const sess = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};

app.use(session(sess));

// const hbs = exphbs.create({ helpers });
const hbs = exphbs.create({helpers});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

app.use(routes);



sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Server listening on: http://localhost:' + PORT));
});