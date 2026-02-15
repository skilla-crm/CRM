'use client'
/* 
import { cookies } from 'next/headers'
import dynamic from 'next/dynamic'

export const metadata = {
  title: "Дашборд"
};

const DynamicModuleContainer = dynamic(() =>
  import('@/components/ModuleContainer/ModuleContainer')
    .then((module) => module.ModuleContainer)
)

export default async function Dashboard() {
  const cookieStore = await cookies()
  const token = cookieStore?.get('token')
  const role = cookieStore.get('role')
  const ispro = cookieStore.get('is_pro')
  const id = "dashboard"

  return (

    <div id={`root_${id}`} ispro={ispro?.value} role={role?.value} token={`Bearer ${token?.value}`}>
      <DynamicModuleContainer id={id}/>
    </div>


  );
}
 */

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Динамический импорт из remote-приложения 'catalog'
const DashboardPage = dynamic(
  () => import('dashboard/export-app'), // 'catalog' из remotes в конфиге, '/CatalogPage' из exposes
  {
    ssr: false, // Пока можно отключить SSR для упрощения миграции
    loading: () => <p>Загрузка каталога...</p>,
  }
);

export default function DashboardPage() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <DashboardPage />
    </Suspense  >
  );
}
