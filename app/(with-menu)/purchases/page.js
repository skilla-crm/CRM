import ModuleConnection from '@/components/ModuleConnection/ModuleConnection';

export const metadata = {
  title: "Закупки",
};

export const referrer = {
  content: "no-referrer"
}

const PurchasesDetail = () => <ModuleConnection id={'purchases'} />

export default PurchasesDetail;