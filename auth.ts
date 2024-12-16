/* eslint-disable @typescript-eslint/no-unused-vars */

import NextAuth, { type DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
import Keycloak from "next-auth/providers/keycloak";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Keycloak],
  callbacks: {
    jwt: ({ token, account }) => {
      if (account?.access_token) {
        token.accessToken = account?.access_token;
      }

      return token;
    },
    session: ({ session, token }) => {
      session.user.accessToken = token.accessToken;

      return session;
    },
  },
});

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      accessToken?: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    accessToken?: string;
  }
}
