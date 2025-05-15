import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/client/hearder";
// import SignInButton from "@/components/sign-in-button";
// import SignOutButton from "@/components/sign-out-button";
// import UserInfo from "@/components/user-info";

export const metadata: Metadata = {
	title: "Next Discuss",
	description: "=-=",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`antialiased`}
			>
				<Providers>
					<Header></Header>
					{children}
					<hr />
					{/* <SignInButton></SignInButton>
					<SignOutButton></SignOutButton>
					<UserInfo></UserInfo> */}
				</Providers>
			</body>
		</html>
	);
}
