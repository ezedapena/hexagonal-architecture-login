import { User as RepoUser } from "../../../repository/app/schemas";
import { User } from "../../ports/drivers";
import { ForRepoQuerying } from "../../ports/drivens";

const userMock: RepoUser = {
    id: '123456',
    name: 'Pablito Paz',
    email: 'pablitopaz@gmail.com'
}

export class RepoQuerierStub implements ForRepoQuerying {
    getUser(_email: string): Promise<RepoUser> {
        throw new Error("Method not implemented.");
    }
    createUser(_user: User, _password: string): Promise<RepoUser> {
        throw new Error("Method not implemented.");
    }

}