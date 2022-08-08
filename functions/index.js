const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
('sk_test_51LUKwtESCHfRHm769dOWMJpx25AeibqRcWIUSGjuNQr1zRLJtxgoCgJ39EhWdDAIQCanwENBuPUN2xceu6NiZfXB00UM4KddNl')

// -API

// -App config

const app = express();

// -Middleware
app.use(cors({origin: true}));
app.use(express.json());
// -API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post('/payment/create', async(request, response)=>{
    const total = request.query.total;

    console.log('Payment Request Recieved! for this ammount>>>', total)

    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency: "usd",
    });
    // OK --Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// -listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/challenge-4b2b2/us-central1/api
 