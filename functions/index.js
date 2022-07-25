import Stripe from 'stripe'
const functions = require("firebase-functions");
const express = require("express");
const core = require("cors");
const stripe = new Stripe('sk_test_51KzV6wSBQThG9QGzZrGdkpmhoZZvEieERsmVkNjU0C2X1qijYkIzRnLtUtq4gxa9srPtD9anOL15GJcL2QY2Chtz00VDHwstK2')

//API

//API Config

const app = express();
//- Middlewares
app.use(cors({origin: true}));
app.use(express.json());
//- API routes
app.get('/',(request, response) => response.status(200).send('Hello World'))

// - Listen Command
exports.api=functions.https.onRequest(app)