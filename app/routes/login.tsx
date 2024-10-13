import { useMutation } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { loginFn } from "~/server-functions/login";

export const Route = createFileRoute("/login")({
  component: () => <LoginPage />,
});

function LoginPage() {
  const loginMutation = useMutation({
    mutationFn: loginFn,
  });

  return (
    <main className="w-full h-screen grid place-items-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);

          loginMutation.mutate({
            email: formData.get("email") as string,
            password: formData.get("password") as string,
          });
        }}
      >
        <div>
          <label htmlFor="email" className="block text-xs">
            Username
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="px-2 py-1 w-full rounded border border-gray-500/20 bg-white dark:bg-gray-800"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-xs">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="px-2 py-1 w-full rounded border border-gray-500/20 bg-white dark:bg-gray-800"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-cyan-600 text-white rounded py-2 font-black uppercase"
          // disabled={loginMutation.status === "pending"}
        >
          Login
        </button>
      </form>
    </main>
  );
}
