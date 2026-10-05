import { DEMO_MODE } from "@/lib/demo-mode";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Header from "../components/header";
import { Toaster } from "sonner";
import Footer from "../components/footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Los Abuelos · Animal Feed",
	description: "Alimentos y accesorios para tu mascota.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Suspense fallback={null}>
					<Header />
				</Suspense>
				{DEMO_MODE && <div className="mx-auto max-w-[1300px] px-6 py-3 text-center text-xs text-slate-600 bg-slate-50">Demo de portfolio · Productos y precios de ejemplo. No se realizan compras ni cobros.</div>}
				{children}
				<Toaster richColors position="top-right" />

				<Footer />
			</body>
		</html>
	);
}
