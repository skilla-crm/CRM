
import { cookies } from 'next/headers'
import dynamic from 'next/dynamic'
//utils
import { firstUpper } from '@/utils/firstUpper';

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

      <DynamicModuleContainer
        src={`${process.env.NEXT_PUBLIC_STATIC_URL}/static_${id}/js/main${firstUpper(id)}.js`}
        srcCss={`${process.env.NEXT_PUBLIC_STATIC_URL}/static_${id}/css/main${firstUpper(id)}.css`}
        id={`root_${id}`}
      />
    </div>


  );
}
