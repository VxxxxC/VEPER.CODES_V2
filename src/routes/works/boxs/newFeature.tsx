import DemoDropdownSelector from "@components/DemoDropDownSelector";

const newFeature = () => {
  const content = [
    {
      title: "Order status by color",
      content:
        "https://github.com/VxxxxC/VEPER.CODES/blob/master/demoSrc/1.5/new%20feature/kitchen_display_system.mov?raw=true",
    },
    {
      title: "Member Dashboard",
      content:
        "https://github.com/VxxxxC/VEPER.CODES/blob/master/demoSrc/1.5/new%20feature/member_dashboard.mov?raw=true",
    },
    // {
    //   title: "Order List",
    //   content:
    //     "https://github.com/VxxxxC/VEPER.CODES/blob/master/demoSrc/1.5/new%20feature/order_list.mov?raw=true",
    // },
  ];

  return (
    <>
      <DemoDropdownSelector props={content} />
    </>
  );
};

export default newFeature;
