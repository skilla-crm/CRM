
import ModuleConnection from '@/components/ModuleConnection/ModuleConnection';

export const metadata = {
  title: "Банк"
};

const Bank = () => {
  return (
    <>
      <ModuleConnection id={'bank'} />
      <div id="modal-root"></div>
    </>
  )
}

export default Bank

