
import Iframe from "@/components/Iframe/Iframe";

export default async function Logs() {
  const src = process.env.REACT_APP_URL_LOGS;
  const id = 'root_logs'

  return (
    <Iframe src={src} id={id}/>
  );
}


