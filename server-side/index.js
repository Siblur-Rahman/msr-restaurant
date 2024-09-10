const express = require("express");
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const port = process.env.PROT || 5000;


// middleware
app.use(cors())
app.use(express.json());
const uri = "mongodb://localhost:27017";
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ts8x6gb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
     // Get the database and collection on which to run the operation
     const menuCollection = client.db("msrRestaurantDb").collection("menu");
     const reviewsCollection = client.db("msrRestaurantDb").collection("reviews");
     const cartsCollection = client.db("msrRestaurantDb").collection("carts");
     const usersCollection = client.db("msrRestaurantDb").collection("users");

  // jwt related api
  app.post('/jwt', async(req, res) =>{
    const user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1h"});
    res.send({ token})
  })

  // mddleware  
  const verifyToken = (req, res, next) =>{
    console.log("inside verify Token", req.headers);;
    if(!req.headers.authorization){
      return res.status(401).send({message: "foebidden access"})
    }
    const token = req.headers.authorization.split(' ')[1];

    next()
  }
    // user Related api
 // Save a user data in db for user

 app.get("/users", verifyToken, async(req, res) =>{
  console.log(req.headers)
  const result = await usersCollection.find().toArray();
  res.send(result)
 })
 app.post('/signup', async (req, res) => {
  const userData = req.body
  const query = { email: userData.email };
  const existingUser = await usersCollection.findOne(query);
  if (existingUser) {
    return res.send({ message: "user already exists", insertedId: null });
  }
  const result = await usersCollection.insertOne(userData)
  res.send(result)
})
     app.get('/menu', async (req, res) =>{
        const result = await menuCollection.find().toArray();
        res.send(result)
     })

     app.get('/reviews', async(req, res) =>{
        const result = await reviewsCollection.find().toArray();
        res.send(result)
     })
app.delete('/user/:id', async(req, res) =>{
  const id = req.params.id;
  const query = {_id: new ObjectId(id)};
  const result = await usersCollection.deleteOne(query);
  res.send(result);
})
app.patch('/user/admin/:id', async(req, res) =>{
  const id = req.params.id;
  const filter = {_id: new ObjectId(id)};
  const updatedDoc ={
    $set:{
      role: 'Admin'
    }
  }
  const result = await usersCollection.updateOne(filter, updatedDoc);
  res.send(result);
})
    //  carts Collection
    app.get("/carts", async (req, res) =>{
      const email = req.query.email;
      const query = {email: email}
      const result = await cartsCollection.find(query).toArray();
      res.send(result);
    })
    
     app.post("/carts", async(req, res) =>{
      const cartItem = req.body;
      const result = await cartsCollection.insertOne(cartItem);
      res.send(result)
     })

     app.delete("/cart/:id", async(req, res) =>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await cartsCollection.deleteOne(query);
      res.send(result)
     })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) =>{
    res.send('MSR Restaurant server is runing')
})

app.listen(port, () =>{
    console.log(`MSR Restaurant server is runing on port ${port}`)
})
