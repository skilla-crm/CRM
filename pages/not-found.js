import { redirect } from 'next/navigation';

export default function NotFound() {
  // Редирект на главную страницу
  redirect('/');
  
  return null; // Или можно вернуть компонент ошибки
}