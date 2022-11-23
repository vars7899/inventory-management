import { Button } from "@chakra-ui/react";
import { IconPlus } from "@tabler/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import CustomLoaderSkeleton from "../../components/CustomLoader/CustomLoaderSkeleton.component";
import CustomModal from "../../components/CustomModal/CustomModal.component";
import CustomTable from "../../components/CustomTable/CustomTable.component";
import DashboardTabHeader from "../../components/DashboardTabHeader/DashboardTabHeader.component";
import CreateSupplier from "../../components/Supplier/CreateSupplier.component";
import { useRedirectLoggedOut } from "../../hooks/useRedirect";
import { fetchAllSupplier, RESET } from "../../redux/feature/supplierSlice";
import { theme } from "../../styles/globalTheme.style";
import Layout from "../Layouts/Layout";

const SupplierScreen = () => {
  const dispatch = useDispatch();
  const { isError, isLoading, isSuccess, message, supplierList } = useSelector(
    (state) => state.supplier
  );
  useRedirectLoggedOut("/", "/dashboard/supplier");
  useEffect(() => {
    dispatch(fetchAllSupplier());
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      toast.success(message);
    }
    dispatch(RESET());
  }, []);

  return (
    <Layout>
      <DashboardTabHeader
        addElement={
          <CustomModal heading="Supplier Details" element={<CreateSupplier />}>
            <Button
              leftIcon={<IconPlus />}
              bg={theme.color.accent}
              color={theme.color.text}
              marginRight="10px"
            >
              Add Supplier
            </Button>
          </CustomModal>
        }
      />
      {isLoading && <CustomLoaderSkeleton />}
      {supplierList && <CustomTable given_data={supplierList} />}
    </Layout>
  );
};

export default SupplierScreen;
