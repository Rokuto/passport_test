const express       = require('express');
const morgan        = require('morgan');
const mongoose      = require('mongoose');
const passport      = require('passport');
const bodyParser    = require('body-parser');
const flash         = require('connect-flash');
const cookieParser  = require('cookie-parser');
const session       = require('express-session');

const configDB = require('./config/database.js');
require('./config/passport')(passport); // pass passport for configuration


mongoose.connect(configDB.url, {
  promiseLibrary: global.Promise
}); // connect to our database

const app      = express();
const port     = process.env.PORT || 8080;

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({
  secret: '9*u&CPVZwu87y8aocaishohg',
  resave: true,
  saveUninitialized: true

})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);