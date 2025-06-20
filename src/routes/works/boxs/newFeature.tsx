import DemoDropdownSelector, {
  type DemoDropdownType,
  type DemoImgContent,
} from "@components/DemoDropDownSelector";
import orderMain from "@assets/1.5/new feature/Order Manage/main_board.png";
import filterOrderStatus1 from "@assets/1.5/new feature/Order Manage/filter_order_status_1.png";
import filterOrderStatus2 from "@assets/1.5/new feature/Order Manage/filter_order_status_2.png";
import filterPaymentStatusBefore from "@assets/1.5/new feature/Order Manage/filter_payment_status_before.png";
import filterPaymentStatusAfter from "@assets/1.5/new feature/Order Manage/filter_payment_status_after.png";
import beforeChange from "@assets/1.5/new feature/Food Status/before_change.png";
import afterChange from "@assets/1.5/new feature/Food Status/after_change.png";
import memberMain from "@assets/1.5/new feature/Member Dashboard/main_board.png";
import memberInfo from "@assets/1.5/new feature/Member Dashboard/member_info.png";
import orderHistory from "@assets/1.5/new feature/Member Dashboard/order_history.png";
import historyDetail from "@assets/1.5/new feature/Member Dashboard/order_history.png";
import memberPoint from "@assets/1.5/new feature/Member Dashboard/member_point.png";
import filterDayRange from "@assets/1.5/new feature/Order Manage/filter_day_range.png";

const newFeature = () => {
  const foodStatus: DemoImgContent[] = [
    { name: "Before Change", img: beforeChange },
    { name: "After Change", img: afterChange },
  ];

  const memberDashboard: DemoImgContent[] = [
    { name: "", img: memberMain },
    { name: "Member Info", img: memberInfo },
    { name: "Member Order History", img: orderHistory },
    { name: "Order History Detail", img: historyDetail },
    { name: "Member Point", img: memberPoint },
  ];

  const orderManage: DemoImgContent[] = [
    { name: "", img: orderMain },
    { name: "Filter Order Status 1", img: filterOrderStatus1 },
    { name: "Filter Order Status 2", img: filterOrderStatus2 },
    { name: "Filter Payment Before", img: filterPaymentStatusBefore },
    { name: "Filter Payment After", img: filterPaymentStatusAfter },
    { name: " Filter By Day Range", img: filterDayRange },
  ];
  const content: DemoDropdownType[] = [
    {
      title: "Food Order Status",
      content: foodStatus,
    },
    {
      title: "Member Dashboard",
      content: memberDashboard,
    },
    {
      title: "Order Management",
      content: orderManage,
    },
  ];

  return (
    <>
      <DemoDropdownSelector props={content} />
    </>
  );
};

export default newFeature;
