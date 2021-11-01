import createConnection from '../database';
import { getConnection } from 'typeorm';
import { Request } from 'express';
import { makeMockResponse } from '../utils/mocks/mockResponse';
import { UpdateUserController } from './UpdateUserController';
import { FakeData } from '../utils/FakeData';

describe('UpdateUserController', () => {
    beforeAll(async () => {
        const connection = await createConnection()
        connection.runMigrations()
    })

    afterAll(async () => {
        const connection = getConnection()
        connection.query('DELETE FROM usuarios')
        connection.close()
    })

    const fakeData = new FakeData();

    it('Deve retornar status 204 quando usuário for editado', async () => {
        
        const mockUser = await fakeData.createUser()
        
        const updateUserController = new UpdateUserController()

        const request = {
            body: {
                id: mockUser.id,
                nome: 'Outro nome',
                email: 'email@email.com.br'
            }
        } as Request

        const response = makeMockResponse();

        await updateUserController.handle(request, response)

        expect(response.state.status).toBe(204)
    })
})