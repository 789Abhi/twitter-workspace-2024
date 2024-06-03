import NextAuth from "next-auth"
import TwitterProvider from "next-auth/providers/twitter";
import GoogleProvider from "next-auth/providers/google";



export const authOptions = {
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      })
  ]

}

export default NextAuth(authOptions)