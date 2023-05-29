import express from 'express';
import foodRoutes from './foodRoute.js';

const rootRoute = express.Router();

rootRoute.use('/food', foodRoutes)

export default rootRoute;