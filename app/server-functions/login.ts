import { createServerFn } from "@tanstack/start";
// importing this piece throws a weird error
import { useSession } from "vinxi/http";

export const loginFn = createServerFn(
  "POST",
  async (payload: { email: string; password: string }) => {
    console.log({ payload });
    const session = await useSession({ password: "hello-world" });

    return "Ok";
  }
);
