import Nextauth from "next-auth"
import GitHubProvider from "next-auth/providers/github";

export default Nextauth({
    providers: [
        GitHubProvider({
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET
        })
      ],
      secret:process.env.JWT_SECREAT_KEY
})
