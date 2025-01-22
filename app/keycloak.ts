import Keycloak from "keycloak-js";

const getKeycloak = () => {
  const keycloak = new Keycloak({
    url: "http://localhost:8280",
    realm: "master",
    clientId: "tanstack-start-keycloak",
  });

  if (typeof window !== "undefined") {
    keycloak.init({
      onLoad: "check-sso",
    });
  }
  return keycloak;
};

export { getKeycloak };
