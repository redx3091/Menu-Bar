require('dotenv').config();
require('express-async-errors');

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss');

//* Routers
const ProductRouter = require('./routers/product.router');
const AuthRouter = require('./routers/auth.router');

//* DB connection
const connectDB = require('./db/connect');

//* Error Handler
const ErrorHandler = require('./middleware/error-handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

//* Routes
app.use('/api/v1/auth', AuthRouter)
app.use('/api/v1/productos', ProductRouter)

//* Middlewares
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
