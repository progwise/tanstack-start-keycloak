import {
  createFileRoute,
  redirect,
  useRouteContext,
} from "@tanstack/react-router";
import { Navbar } from "../components/navbar";

export const Route = createFileRoute("/private")({
  component: RouteComponent,
  loader: async ({ context }) => {
    console.log("private auth loader", context.auth);
    if (!context.auth.isLoggendIn) {
      throw redirect({ to: "/public" });
    }
  },
});

function RouteComponent() {
  const context = useRouteContext({
    strict: false,
  });
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to private page</p>
      <Navbar />
      <p>
        This is you user name:
        {context?.auth?.user.username}
      </p>
    </div>
  );
}
