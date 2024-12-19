const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const pool =mongoose.createPool({


})

app.get('/User' ,(req,res)=> {
   // try {
   //    const connection = awaitpool

   // }
})

app.post('/User' , async (req, res)=> {


})

app.put('/User/:id', (req , res) => {

})

app.delete('/User/:id', (req, res) => {

});

app.listen(3000, () => {
   console.log("Server started on port 3000 !")
})


// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();

// // Middleware to parse incoming JSON and URL-encoded data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // MongoDB Connection Setup
// mongoose.connect('mongodb://localhost:27017/userManagement', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected successfully'))
//   .catch(err => console.log('MongoDB connection error:', err));

// // User Schema and Model
// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, enum: ['admin', 'user'], default: 'user' }, // Role-based access
// });

// const User = mongoose.model('User', userSchema);

// // GET all users
// app.get('/User', async (req, res) => {
//   try {
//     const users = await User.find(); // Fetch all users
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ error: 'Error fetching users' });
//   }
// });

// // POST a new user (signup)
// app.post('/User', async (req, res) => {
//   const { username, password, role } = req.body;

//   if (!username || !password) {
//     return res.status(400).json({ error: 'Username and password are required' });
//   }

//   try {
//     const newUser = new User({ username, password, role });
//     await newUser.save();
//     res.status(201).json(newUser);
//   } catch (err) {
//     res.status(500).json({ error: 'Error creating user' });
//   }
// });

// // PUT to update a user's details
// app.put('/User/:id', async (req, res) => {
//   const { id } = req.params;
//   const { username, password, role } = req.body;

//   try {
//     const user = await User.findByIdAndUpdate(
//       id, 
//       { username, password, role },
//       { new: true } // Return the updated document
//     );

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     res.json(user);
//   } catch (err) {
//     res.status(500).json({ error: 'Error updating user' });
//   }
// });

// // DELETE a user
// app.delete('/User/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     const user = await User.findByIdAndDelete(id);

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     res.json({ message: 'User deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ error: 'Error deleting user' });
//   }
// });

// // Server setup
// app.listen(3000, () => {
//   console.log('Server started on port 3000!');
// });
