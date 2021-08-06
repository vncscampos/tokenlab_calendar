import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

const routes = Router();

routes.post('/user/create', UserController.create);

routes.post('/session', SessionController.store);

routes.get('/user/:id', UserController.read);
routes.put('/user/update/:id', UserController.update);
routes.delete('/user/delete/:id', UserController.delete);

export default routes;
