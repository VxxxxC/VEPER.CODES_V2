import DemoDropdownSelector from "@components/DemoDropDownSelector";

const mobileVersion = () => {
  const content = [
    {
      title: "Order Record",
      content:
        "https://github.com/VxxxxC/VEPER.CODES/blob/master/demoSrc/1.5/mobile%20version/Order_record(mobile).mov?raw=true",
    },
    {
      title: "Ordering and Checkout",
      content:
        "https://github.com/VxxxxC/VEPER.CODES/blob/master/demoSrc/1.5/mobile%20version/Order_record(mobile).mov?raw=true",
    },
  ];

  return (
    <>
      <DemoDropdownSelector props={content} />
    </>
  );
};

export default mobileVersion;
