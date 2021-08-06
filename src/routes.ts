import { Router } from 'express';

import UserController from './app/controllers/UserController';

const routes = Router();

routes.post('/user/create', UserController.create);
routes.get('/user/:id', UserController.read);
routes.put('/user/update/:id', UserController.update);
routes.delete('/user/delete/:id', UserController.delete);

export default routes;
