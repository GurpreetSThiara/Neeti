import type { Metadata } from 'next';
import './globals.css';
import WhatsAppFAB from '@/components/WhatsAppFAB';
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
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              const savedTheme = localStorage.getItem('theme');
              const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            } catch (e) {}
          })()
        ` }} />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
