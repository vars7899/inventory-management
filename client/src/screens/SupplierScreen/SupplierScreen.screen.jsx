import { useEffect } from "react";
import Supplier from "../../components/Supplier/Supplier.component";
import Layout from "../Layout";

const SupplierScreen = () => {
  useEffect(() => {
    fetch("/api/v1/supplier")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <Layout>
      <Supplier />
    </Layout>
  );
};

export default SupplierScreen;
