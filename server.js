const express=require('express');
const mongoose=require(mongoose);
const bodyParser=require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://Suruthika-J:Suruthi1407@cluster0.4dtcrfp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});

const itemRouter = require('./routes/itemRoutes');
app.use('/api/items', itemRouter);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
