import { Inter } from 'next/font/google'
import { CookiesProvider } from 'next-client-cookies/server';
import "../globals.scss";
import s from './layout.module.scss';
//components
import Menu from "@/components/Menu/Menu";



export const viewport = {
  width: '1900',
  initialScale: 0,
}

export const metadata = {
  title: "Скилла работа",
};

const inter = Inter({ variable: '--font-inter', subsets: ['cyrillic'], display: 'swap' })
export default async function RootLayout({ children, params }) {

  return (
    <CookiesProvider>
      <html lang="ru">
        <body className={inter.className}>
          <main className={s.main}>
            <Menu />
            <div className={s.container}>
              {children}
            </div>

          </main>

        </body>
      </html>
    </CookiesProvider>
  );
}
