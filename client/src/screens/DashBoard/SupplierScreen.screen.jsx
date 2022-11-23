import { Button } from "@chakra-ui/react";
import { IconDownload, IconPlus } from "@tabler/icons";
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
import { CSVLink } from "react-csv";

// for csv header
const headers = [
  { label: "Supplier ID", key: "_id" },
  { label: "Supplier Name", key: "name" },
  { label: "Street Address", key: "street" },
  { label: "City", key: "city" },
  { label: "State", key: "state" },
  { label: "Country", key: "country" },
  { label: "Postal Code", key: "postalCode" },
  { label: "Phone Number", key: "phone" },
  { label: "Fax Number", key: "fax" },
];

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
          <>
            <CSVLink
              data={
                supplierList
                  ? supplierList.map((_) => ({
                      _id: _._id,
                      name: _.name,
                      street: _.street,
                      city: _.city,
                      state: _.state,
                      country: _.country,
                      postalCode: _.postalCode,
                      phone: _.phone,
                      fax: _.fax,
                    }))
                  : []
              }
              headers={headers}
              filename="supplier-list.csv"
            >
              <Button leftIcon={<IconDownload />} mr="10px">
                Export CSV
              </Button>
            </CSVLink>
            <CustomModal
              heading="Supplier Details"
              element={<CreateSupplier />}
            >
              <Button
                leftIcon={<IconPlus />}
                bg={theme.color.accent}
                color={theme.color.text}
                marginRight="10px"
              >
                Add Supplier
              </Button>
            </CustomModal>
          </>
        }
      />
      {isLoading && <CustomLoaderSkeleton />}
      {supplierList && <CustomTable given_data={supplierList} />}
    </Layout>
  );
};

export default SupplierScreen;
