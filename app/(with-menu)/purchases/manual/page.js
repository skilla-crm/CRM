import ModuleConnection from '@/components/ModuleConnection/ModuleConnection';

export const metadata = {
  title: "Ручной учет",
};

export const referrer = {
  content: "no-referrer"
}

const PurchasesDetail = () => <ModuleConnection id={'purchases'} />

export default PurchasesDetail;