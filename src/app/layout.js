import "./globals.css";

import Header from "../components/Header";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "IMDb Clone",
  description: "This is my IMDb clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
