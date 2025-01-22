// app/router.tsx
import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { QueryClient } from "@tanstack/react-query";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";
import { getKeycloak } from "./keycloak";

export function createRouter() {
  const queryClient = new QueryClient();

  const keycloak = getKeycloak();
  const auth = {
    isLoggendIn: !!keycloak.authenticated,
    login: () => {
      keycloak.login();
    },
    logout: () => {
      keycloak.logout();
    },
    user: {
      username: keycloak.tokenParsed?.preferred_username,
      name: keycloak.tokenParsed?.name,
      email: keycloak.tokenParsed?.email,
    },
  };
  const router = createTanStackRouter({
    routeTree,
    context: { queryClient, auth },
    defaultPreload: "intent",
    defaultErrorComponent: (error) => (
      <div>Ups, something went wrong! {JSON.stringify(error, null, 2)}</div>
    ),
    defaultNotFoundComponent: () => <div>Not found!</div>,
    defaultPendingComponent: () => <div>Loading...</div>,
  });

  keycloak.onAuthSuccess = async () => {
    auth.isLoggendIn = true;
    auth.user = {
      username: keycloak.tokenParsed?.preferred_username,
      name: keycloak.tokenParsed?.name,
      email: keycloak.tokenParsed?.email,
    };
    await router.invalidate({});
  };
  return routerWithQueryClient(router, queryClient);
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
