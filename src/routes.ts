import { Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { DeleteUserController } from './controllers/DeleteUserController';
import { GetAllUserController } from './controllers/GetAllUserController';
import { UpdateUserController } from './controllers/UpdateUserController';

const router = Router();
const createUserController = new CreateUserController();
const getAllUserController = new GetAllUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

router.get('/', (request: Request, response: Response) => {
    return response.json({mensagem: 'Bem vindo a nossa DIO API' })
})

router.post('/usuarios', createUserController.handle)
router.get('/usuarios', getAllUserController.handle)
router.patch('/usuario', updateUserController.handle)
router.delete('/usuario/:id', deleteUserController.handle)

export { router }
