import express, { Router } from 'express';

import { add, deleteById, getAll, getById, updateById } from '../../controllers/boards';
import { validateBody } from '../../middlewares/validateBody';
import { boardsSchema } from '../../schemas/boards';

const router: Router = express.Router();

router.get('/', getAll);

router.get('/:id', getById);

router.post('/', validateBody(boardsSchema), add);

router.put('/:id', validateBody(boardsSchema), updateById);

router.delete('/:id', deleteById);

export default router;
