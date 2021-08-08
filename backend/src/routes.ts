import { Router } from 'express';

import EventController from './app/controllers/EventController';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

import ensureAuthenticated from './app/middlewares/ensureAuthenticated';

const routes = Router();

routes.post('/user/create', UserController.create);
routes.post('/session', SessionController.store);
routes.get('/user/:id', UserController.read);

routes.use(ensureAuthenticated);

routes.put('/user/update', UserController.update);
routes.delete('/user/delete', UserController.delete);

routes.get('/event', EventController.list);
routes.post('/event/create', EventController.create);
routes.put('/event/update/:id', EventController.update);
routes.delete('/event/delete/:id', EventController.delete);

export default routes;
