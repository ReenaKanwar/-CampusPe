import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'CampusPe – Connect 10X Faster | Students, Colleges & Employers',
  description:
    'One platform connecting students, colleges & employers — faster. Find jobs, internships, and campus opportunities matched to your profile.',
  keywords: 'campus jobs, student internships, college placement, hiring platform India, AI job matching',
  openGraph: {
    title: 'CampusPe – Connect 10X Faster',
    description: 'One platform connecting students, colleges & employers — faster.',
    url: 'https://campuspe.com',
    siteName: 'CampusPe',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
