import Iframe2 from '@/components/Iframe2/Iframe2'

export const metadata = {
    title: "Отправить данные"
  };

export default async function SendPassport() {
    const src = process.env.REACT_APP_URL_PASSPORT;
    const id = 'root_sendpassport'

    return (
        <Iframe2 src={src} id={id} />
    );
}








