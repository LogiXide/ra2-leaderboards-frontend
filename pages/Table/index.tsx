import dynamic from "next/dynamic"; 

const TableExample = dynamic(() => import("@/components/Table/Table"), { ssr: false, });

const TablePages: React.FC = (): JSX.Element => {
  return <TableExample />;
};

export default TablePages;
