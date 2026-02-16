import ModuleConnection from '@/components/ModuleConnection/ModuleConnection';

export const metadata = {
  title: "Склад",
};

export const referrer = {
  content: "no-referrer"
}

const Stock = () => <ModuleConnection id={'stock'} />

export default Stock;