import {
  ClientBuilder,
  type AuthMiddlewareOptions,
  type HttpMiddlewareOptions
} from '@commercetools/sdk-client-v2';

import { ApiRoot, createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';

const { REACT_APP_CTP_PROJECT_KEY, REACT_APP_CTP_CLIENT_ID, REACT_APP_CTP_CLIENT_SECRET } =
  process.env;
export default function (): ApiRoot {
  const httpMiddlewareOptions: HttpMiddlewareOptions = {
    host: 'https://api.europe-west1.gcp.commercetools.com',
    fetch
  };

  const authMiddlewareOptions: AuthMiddlewareOptions = {
    host: 'https://auth.europe-west1.gcp.commercetools.com',
    projectKey: REACT_APP_CTP_PROJECT_KEY ?? '',
    credentials: {
      clientId: REACT_APP_CTP_CLIENT_ID ?? '',
      clientSecret: REACT_APP_CTP_CLIENT_SECRET ?? ''
    },
    fetch
  };

  const client = new ClientBuilder()
    .withProjectKey(REACT_APP_CTP_PROJECT_KEY ?? '')
    .withHttpMiddleware(httpMiddlewareOptions)
    .withClientCredentialsFlow(authMiddlewareOptions)
    .build();

  return createApiBuilderFromCtpClient(client);
}
