import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/ui/Navbar/Navbar";
import Footer from "../../components/ui/Footer/Footer";
import Context from "../../components/ui/Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Mode - ProtoPip",
    description: "For Mode Degen Hackathon 2023",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-black loading">
                <Context>
                    <main
                        id="skip"
                        className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)] max-h-[calc(100dvh)]"
                    >
                        <Navbar />
                        {children}
                        <Footer />
                    </main>
                </Context>
            </body>
        </html>
    );
}
