import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/ui/Navbar/Navbar";
import Footer from "../../components/ui/Footer/Footer";
import Context from "../../components/ui/Context";

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
                        className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)] max-h-[calc(100dvh)] "
                    >
                        <Navbar />
                        <div className="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow">
                            {/* left */}
                            <div className="w-fixed w-full flex-shrink flex-grow-0 px-4">
                                
                            </div>
                            {/* main */}
                            <div className="w-full flex-grow pt-1 px-3">
                                {children}
                            </div>
                            {/* right */}
                            <div className="w-fixed w-full flex-shrink flex-grow-0 px-2" />
                        </div>
                        <Footer />
                    </main>
                </Context>
            </body>
        </html>
    );
}
