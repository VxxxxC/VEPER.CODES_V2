import DemoDropdownSelector, {
  type DemoDropdownType,
  type DemoImgContent,
} from "@components/DemoDropDownSelector";
import oldTableManagement from "@assets/1.2/table_manage_mobile.png";
import newTableManagement from "@assets/1.5/table_manage_mobile.png";
import oldOrderManagement from "@assets/1.2/order_manage_mobile.png";
import newOrderManagement from "@assets/1.5/order_manage_mobile.png";

const mobileVersion = () => {
  const oldUi: DemoImgContent[] = [
    { name: "Table Management", img: oldTableManagement },
    { name: "Order Management", img: oldOrderManagement },
  ];

  const newUi: DemoImgContent[] = [
    { name: "Table Management", img: newTableManagement },
    { name: "Order Management", img: newOrderManagement },
  ];
  const content: DemoDropdownType[] = [
    {
      title: "Before",
      content: oldUi,
    },
    {
      title: "After",
      content: newUi,
    },
  ];

  return (
    <>
      <DemoDropdownSelector props={content} />
    </>
  );
};

export default mobileVersion;
