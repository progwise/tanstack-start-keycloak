import { createFileRoute, Link, useRouteContext } from "@tanstack/react-router";
import { Navbar } from "../components/navbar";

const Home = () => {
  const context = useRouteContext({
    strict: false,
  });

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <Navbar />
      {context?.auth?.isLoggendIn ? (
        <>
          <p>Username: {context.auth.user.username}</p>
          <p>Name: {context.auth.user.name}</p>
          <p>Email: {context.auth.user.email}</p>
          <button onClick={context.auth.logout}>Logout</button>
        </>
      ) : (
        <>
          <p>Not authenticated</p>
          <button onClick={context?.auth?.login}>Login</button>
        </>
      )}
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: Home,
  beforeLoad: ({ context }) => {
    console.log("index beforeload");
    return { ...context, auth: { ...context.auth } };
  },
  loader: async ({ context }) => {
    console.log("index auth loader", context.auth);
  },
});
