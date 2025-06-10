import Iframe from '@/components/Iframe/Iframe'

export const metadata = {
  title: "Покупка"
};

export default async function DocumentsIn() {
  const src = process.env.REACT_APP_URL_DOCUMENTIN;
  const id = 'documents_in'

  return (
    <Iframe src={src} id={id} />
  );
}
