// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes"; 
import ProgressBar from "@/components/ProgressBar"; // <--- Import your new wrapper
import ChatBubble from "@/components/ChatBubble/page";
import Header from "./[lang]/(HOME)/_components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Krimson Aviation",
	description: "Africa’s Premier Aviation Gateway",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
                {/* Use the wrapper here */}
				<ProgressBar />

				<Toaster />
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
				>
					<Header />
					{children}
                    
                    <ChatBubble />
				</ThemeProvider>
			</body>
		</html>
	);
}