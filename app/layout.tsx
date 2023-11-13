import Providers from "./_providers/providers";

import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/assets/css/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Write",
  description: "A Web3 Example on using NextJs 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;550;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <div>
          <Providers>
            <Header />
            <div>{children}</div>
            {/* <Footer /> */}
          </Providers>
        </div>
      </body>
    </html>
  );
}
