import { ControlAuthenticatorStub } from "../adapters/drivens/control-authenticator-stub-adapter";
import { RepoQuerierStub } from "../adapters/drivens/repo-querier-stub-adapter";
import { AuthenticatorProxyAdapter } from "../adapters/drivers";
import { DasboardApi } from "./dashboard-api"

const compositionMock = () => {
    const controlAuthenticatorStub = new ControlAuthenticatorStub();
    const repoQuerierStub = new RepoQuerierStub();

    const dashboardApiMock = new DasboardApi(controlAuthenticatorStub, repoQuerierStub);

    const authenticatorProxyAdapter = new AuthenticatorProxyAdapter(dashboardApiMock);

    return {
        authenticatorProxyAdapter
    };
};

export const { authenticatorProxyAdapter } = compositionMock();

const registerMock = {
    name: 'Pedrito Paz',
    email: 'pedritopaz@gmail.com'
};
authenticatorProxyAdapter.register(registerMock, "1234");
authenticatorProxyAdapter.login('pedritopaz@gmail.com', "1234");