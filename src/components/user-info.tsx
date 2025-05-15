import Image from "next/image"
import { auth } from "../auth"

export default async function UserInfo() {
    const session = await auth()

    if (!session?.user) return null
    return (
        <div>
            <p>{JSON.stringify(session)}</p>
            <Image src={session.user.image || ''} alt="User Avatar" />
        </div>
    )
}