import './globals.css';
import 'react-toastify/ReactToastify.min.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import { SideBar } from './components/SideBar';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hero Ticket',
  description: 'Crie seu evento rápido e fácil',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <ToastContainer />
        <NavBar />
        <div className="mb-8 mt-16 mr-[90px]">{children}</div>
        <SideBar />
        <Footer />
      </body>
    </html>
  );
}
