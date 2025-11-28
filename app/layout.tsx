import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Samrat Giri - Portfolio",
	description: "Personal portfolio of Samrat Giri",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
