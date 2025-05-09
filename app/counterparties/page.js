import Iframe from '@/components/Iframe/Iframe'

export const metadata = {
  title: "Контрагенты"
};

export default async function Сounterparties() {
  const src = process.env.REACT_APP_URL_COUNTERPARTIES;
  const id = 'root_counterparties'

  return (
    <Iframe src={src} id={id} />
  );
}
