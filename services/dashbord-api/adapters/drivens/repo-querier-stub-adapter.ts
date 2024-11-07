import { User as RepoUser } from "../../../repository/app/schemas";
import { User } from "../../app/schemas";
import { ForRepoQuerying } from "../../ports/drivens";

const userMock: RepoUser = {
    id: '123456',
    name: 'Pablito Paz',
    email: 'pablitopaz@gmail.com'
}

export class RepoQuerierStub implements ForRepoQuerying {
    getUser(_email: string): Promise<RepoUser> {
        return Promise.resolve(userMock);
    }
    createUser(_user: User, _password: string): Promise<RepoUser> {
        return Promise.resolve(userMock);
    }

}