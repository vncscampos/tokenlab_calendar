import { Router } from 'express';

import EventController from './app/controllers/EventController';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import GuestController from './app/controllers/GuestController';

import ensureAuthenticated from './app/middlewares/ensureAuthenticated';

const routes = Router();

routes.post('/user', UserController.create);
routes.post('/session', SessionController.store);

routes.use(ensureAuthenticated);

routes.get('/event', EventController.list);
routes.post('/event', EventController.create);
routes.put('/event/:id', EventController.update);
routes.delete('/event/:id', EventController.delete);

routes.get('/invite', GuestController.list);
routes.delete('/invite/:id', GuestController.delete);

export default routes;
