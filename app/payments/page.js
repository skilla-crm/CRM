import Iframe from '@/components/Iframe/Iframe'

export default async function Payments() {
    const src = process.env.REACT_APP_URL_BANK;
    const id = 'root_payments'

    return (
        <Iframe src={src} id={id} />



    );
}








