import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account && user) {
        return {
          ...token,
          provider: account.provider,
          userId: user.id,
        };
      }

      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        provider: token.provider,
        userId: token.userId,
      };
    },
  },
});

export { handler as GET, handler as POST };
