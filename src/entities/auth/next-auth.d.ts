import 'next-auth';

declare module 'next-auth' {
  interface Session {
    provider?: string;
    userId?: string;
    user?: {
      name?: string;
      image?: string;
      email?: string;
    };
    expires: string;
  }
}
