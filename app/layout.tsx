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
      <body className={inter.className}>
        <div className="layoutcontainer">
          <Providers>
            <Header />
            <div className="main">{children}</div>
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
