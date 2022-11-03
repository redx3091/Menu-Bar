require('dotenv').config();
require('express-async-errors');

const express = require('express');
const cors = require('cors');

const ProductRouter = require('./routers/router');
const connectDB = require('./db/connect');
const ErrorHandler = require('./middleware/error-handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

//*Routes
app.use('/api/v1/productos', ProductRouter)

//*Middlewares
app.use(ErrorHandler);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`aplicacion corriendo en el puerto http://localhost:${port}`);
    });
  } catch (error) {

  }
}

start();
