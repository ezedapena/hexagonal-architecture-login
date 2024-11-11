import { describe, expect, it } from 'vitest';
import { ControlAuthenticatorStub, RepoQuerierStub } from '../adapters/drivens';
import { DasboardApi } from './dashboard-api';
import { AuthenticatedUser, User } from './schemas';

describe("DasboardAPI", () => {
    const controlAuthenticatorStub = new ControlAuthenticatorStub();
    const repoQuerierStub = new RepoQuerierStub();
    const dashboardApiMock = new DasboardApi(controlAuthenticatorStub, repoQuerierStub);


    it.concurrent("should login", async () => {
        //GIVEN ( valores de entrada )
        const mockedParms = {
            email: 'pablitopaz@gmail.com',
            password: "12345"
        }

        const expectedResult: AuthenticatedUser = {
            id: '123456',
            name: 'Pablito Paz',
            email: 'pablitopaz@gmail.com',
            token: 'mockToken123',
            refreshToken: 'mockRefreshToken123',
            permissions: {
                admin: true,
                user: true
            }
        }

        //WHEN
        const result = await dashboardApiMock.login(mockedParms.email, mockedParms.password);

        //THEN
        expect(result).toEqual(expectedResult);
    });


    it.concurrent("should register", async () => {
        //GIVEN ( valores de entrada )
        const mockedUser: User = {
            name: 'Pablito Paz',
            email: 'pablitopaz@gmail.com'
        }

        const expectedResult: AuthenticatedUser = {
            id: '123456',
            name: 'Pablito Paz',
            email: 'pablitopaz@gmail.com',
            token: 'mockToken123',
            refreshToken: 'mockRefreshToken123',
            permissions: {
                admin: true,
                user: true
            }
        }

        //WHEN
        const result = await dashboardApiMock.register(mockedUser, "mockedPassword");

        //THEN
        expect(result).toEqual(expectedResult);
    });

})