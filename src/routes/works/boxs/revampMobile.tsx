import DemoDropdownSelector, {
  type DemoDropdownType,
} from "@components/DemoDropDownSelector";

const mobileVersion = () => {
  const content: DemoDropdownType[] = [
    {
      title: "Order Record",
      content: [
        "https://github.com/VxxxxC/VEPER.CODES/blob/master/demoSrc/1.5/mobile%20version/Order_record(mobile).mov?raw=true",
      ],
      isVideo: true,
    },
    {
      title: "Ordering and Checkout",
      content: [
        "https://github.com/VxxxxC/VEPER.CODES/blob/master/demoSrc/1.5/mobile%20version/Order_record(mobile).mov?raw=true",
      ],
      isVideo: true,
    },
  ];

  return (
    <>
      <DemoDropdownSelector props={content} />
    </>
  );
};

export default mobileVersion;
