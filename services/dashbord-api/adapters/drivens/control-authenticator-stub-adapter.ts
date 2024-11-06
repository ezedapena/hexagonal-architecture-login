import { AuthDetails, Permissions } from "../../app/schemas";
import { ForControlAuthenticating } from "../../ports/drivens";

const authDetailsMock: AuthDetails = {
    token: 'mockToken123',
    refreshToken: 'mockRefreshToken123'
}

const permissionsMock: Permissions = {
    admin: true,
    user: true,
}



export class ControlAuthenticatorStub implements ForControlAuthenticating {

    getAuthDetails(_email: string, _password: string): Promise<AuthDetails> {
        return Promise.resolve(authDetailsMock)
    }

    getPermissions(_email: string, _password: string): Promise<Permissions> {
        return Promise.resolve(permissionsMock)
    }

}