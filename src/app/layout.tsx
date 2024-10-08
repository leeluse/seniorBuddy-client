import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pretendard.variable}>
        <main className="font-pretendard min-h-screen flex flex-col">
          <Header />
          <div className="flex-grow sm:w-1/2 m-auto mb-16 w-full">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
