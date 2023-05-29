import express from 'express';
import { getFood, getLikeResFollowRes, getLikeResFollowUser, getRateResFollowRes, getRateResFollowUser, likeRes, orderFood, rateRes, unLikeRes } from '../controllers/foodControllers.js';

const foodRoutes = express.Router();

foodRoutes.get('/get-food', getFood);
foodRoutes.post('/like-res', likeRes)
foodRoutes.delete('/unlike-res', unLikeRes)
foodRoutes.get('/get-like-res-user', getLikeResFollowUser)
foodRoutes.get('/get-like-res', getLikeResFollowRes)
foodRoutes.post('/create-rate', rateRes)
foodRoutes.get('/get-rate-res-user', getRateResFollowUser)
foodRoutes.get('/get-rate-res', getRateResFollowRes)
foodRoutes.post('/order-food', orderFood)
// foodRoutes.post('/createFood', createFood);
// foodRoutes.put('/updateFood', updateFood);
// foodRoutes.delete('/deleteFood', destroyFood);

export default foodRoutes;