"use client"
import { useSession } from "next-auth/react"
import Image from "next/image"

export default function UserInfoClient() {
    const { data: session } = useSession()

    if (!session?.user) return null

    return <div>
        <p>{JSON.stringify(session)}</p>
        <Image src={session.user.image || ''} alt="User Avatar" />
    </div>
}