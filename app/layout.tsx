import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Neeti Collective | Political Intelligence & Election Strategy',
  description: 'Positioned at the intersection of political insight and strategic intelligence. We provide data-driven electoral insights and war-room consulting for modern elections.',
  keywords: 'political consulting India, election campaign strategy, political intelligence firm, booth level election strategy, political survey company, campaign war-room consulting',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
