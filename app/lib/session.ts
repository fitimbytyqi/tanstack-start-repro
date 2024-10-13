import { useSession } from "vinxi/http";

type SessionUser = {
  email: string;
};

export function useAppSession() {
  return useSession<SessionUser>({
    password: "my-password",
  });
}
