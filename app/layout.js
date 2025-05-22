import { Inter } from 'next/font/google'
import { Viewport } from 'next'
import { CookiesProvider } from 'next-client-cookies/server';
import "./globals.scss";
import s from './layout.module.scss';
//components
import { Providers } from '../Providers/Providers';


 
export const viewport = {
  width: '1600',
  initialScale: 0,
}

export const metadata = {
  title: "Скилла работа",
};

const inter = Inter({ variable: '--font-inter', subsets: ['cyrillic'], display: 'swap' })


export default async function RootLayout({ children }) {

  return (
    <CookiesProvider>
      <html lang="ru">
        <body className={inter.className}>
          <main className={s.main}>
            <Providers>{children}</Providers>
          </main>

        </body>
      </html>
    </CookiesProvider>
  );
}
