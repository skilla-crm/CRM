import { Inter } from 'next/font/google'
import { redirect } from 'next/navigation'
import { CookiesProvider } from 'next-client-cookies/server';
import { cookies } from 'next/headers'
import "./globals.scss";
import s from './layout.module.scss';
//components
import { Providers } from './providers';



export const metadata = {
  title: "Скилла работа",
  description: "Скилла работа",
};

const inter = Inter({ variable: '--font-inter', subsets: ['cyrillic'], display: 'swap' })


export default async function RootLayout({ children }) {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')

  if (!token) {
    redirect('https://lk.skilla.ru/login/')
  }

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
