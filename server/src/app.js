import express from 'express';
import config from './config/config';
import GroceryListRouter from './routes/grocerylist';
import DataSource from './config/datasource';

const app = express();
const router = express.Router();

app.config = config;
app.datasource = DataSource(app);

app.use("/grocerylists", GroceryListRouter(app.datasource.models.GroceryList, router));


export default app;