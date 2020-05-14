const functions = require('firebase-functions')
const express = require('express')
const basicAuth = require('basic-auth-connect')

const config = functions.config();
const app = express();

app.use(basicAuth('soluto', config.basicauth.password))

app.all('/auth', (_req, res) => {
  res.redirect('/index.html')
})

exports.appServer = functions.https.onRequest(app)
