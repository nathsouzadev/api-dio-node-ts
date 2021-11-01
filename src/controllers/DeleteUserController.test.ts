import createConnection from '../database';
import { getConnection } from 'typeorm';
import { makeMockResponse } from '../utils/mocks/mockResponse';
import { makeMockRequest } from '../utils/mocks/mockRequest';
import { FakeData } from '../utils/FakeData';
import { DeleteUserController } from './DeleteUserController';

describe('DeleteUserController', () => {
    beforeAll(async () => {
        const connection = await createConnection()
        connection.runMigrations()
    })

    afterAll(async () => {
        const connection = getConnection()
        connection.close()
    })

    const fakeData = new FakeData();

    it('Deve retornar status 204 quando o usuário for deletado', async() => {
        const mockUser = await fakeData.createUser();

        const deleteUserController = new DeleteUserController();

        const request = makeMockRequest({
            params: {
                id: mockUser.id
            }
        });

        const response = makeMockResponse()

        await deleteUserController.handle(request, response);

        expect(response.state.status).toBe(204)
    })
})