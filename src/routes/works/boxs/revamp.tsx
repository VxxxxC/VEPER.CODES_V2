import DemoDropdownSelector, {
  type DemoDropdownType,
  type DemoImgContent,
} from "@components/DemoDropDownSelector";
import oldTableManage from "@assets/1.2/table_manage.png";
import newTableManage from "@assets/1.5/table_manage.png";
import oldCloseShop from "@assets/1.2/close_shop.png";
import newCloseShop from "@assets/1.5/close_shop.png";
import oldFoodItem from "@assets/1.2/food_items.png";
import oldFoodItemDetail from "@assets/1.2/food_item_detail.png";
import newFoodItem from "@assets/1.5/food_items.png";
import newFoodItemDetail from "@assets/1.5/food_item_detail.png";

const revamp = () => {
  const oldUi: DemoImgContent[] = [
    { name: "Table Management", img: oldTableManage },
    { name: "Close and Settlement", img: oldCloseShop },
    { name: "Food Item", img: oldFoodItem },
    { name: "Item Detail", img: oldFoodItemDetail },
  ];
  const newUi: DemoImgContent[] = [
    { name: "Table Management", img: newTableManage },
    { name: "Close and Settlement", img: newCloseShop },
    { name: "Food Item", img: newFoodItem },
    { name: "Item Detail", img: newFoodItemDetail },
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

export default revamp;
