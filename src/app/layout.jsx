import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/common/sidebar";
import { Header } from "@/components/common/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MVP",
  description: "MVP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen overflow-x-hidden overflow-y-hidden bg-gradient-to-br from-purple-50 via-slate-50 to-purple-100 font-sans">
          <Sidebar />

          <div className="flex-1 flex flex-col h-screen min-w-0">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
