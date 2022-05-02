import { Router } from 'express';
import itemsRouter from './items.routes';
import transactionsRouter from './transactions.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import categoriesRouter from './categories.routes';

const routes = Router();

routes.use('/items', itemsRouter);
routes.use('/categories', categoriesRouter);
routes.use('/transactions', transactionsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
