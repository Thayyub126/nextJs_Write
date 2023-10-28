import Providers from './_providers/providers'

import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../public/assets/css/style.css";
import Header from './components/Header';
import Footer from './components/Footer';



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Write',
  description: 'A Web3 Example on using NextJs 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ display: "flex", flexDirection: "column", minHeight: "100%" }} >

        <Providers>
          <Header/>
          <div style={{minHeight: "100%" }}>
          {children}
          </div>
         
          <Footer/>
          </Providers>
        
        </body>
    </html>
  )
}



