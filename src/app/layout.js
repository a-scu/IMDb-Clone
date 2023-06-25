import "./globals.css";

import Providers from "./Providers";
import Header from "../components/Header";

export const metadata = {
  title: "IMDb Clone",
  description: "This is my IMDb clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
