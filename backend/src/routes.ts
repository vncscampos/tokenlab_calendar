import { Router } from 'express';

import EventController from './app/controllers/EventController';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

import ensureAuthenticated from './app/middlewares/ensureAuthenticated';

const routes = Router();

routes.post('/user', UserController.create);
routes.post('/session', SessionController.store);
routes.get('/user/:id', UserController.read);

routes.use(ensureAuthenticated);

routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.delete);

routes.get('/event', EventController.list);
routes.post('/event', EventController.create);
routes.put('/event/:id', EventController.update);
routes.delete('/event/:id', EventController.delete);

export default routes;
