import { getServerSession } from "next-auth"
import { authOptios } from "@/app/api/auth/[...nextauth]/route" 

export const authUserSession = async() => {
    const session = await getServerSession(authOptios)
    return session?.user
}