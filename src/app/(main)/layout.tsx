import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen relative`}
      >
        <div className="fixed inset-0 bg-gradient-to-r from-slate-700 via-purple-800 to-slate-700 -z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed inset-0 w-full h-full object-cover -z-10"
        >
          <source src="/background-video-2.mp4" type="video/mp4" />
        </video>
        <div className="fixed inset-0 -z-10 bg-gradient-to-r from-[rgba(3,7,18,0.8)] via-[rgba(23,23,23,0.8)] to-[rgba(3,7,18,0.8)]"></div>
        <Header />
        <main className="flex-grow">
          <div className="max-w-[1280px] mx-auto pt-[80px]">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
