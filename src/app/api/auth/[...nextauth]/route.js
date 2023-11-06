import NextAuth from "next-auth/next";
import gitHubAuth from "next-auth/providers/github";

export const authOptios = {
  providers: [
    gitHubAuth({
      clientId: process.env.GITHUB_CLIENT,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptios);

export { handler as GET, handler as POST };
