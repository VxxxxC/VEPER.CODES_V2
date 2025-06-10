import DemoDropdownSelector from "@components/DemoDropDownSelector";

const revamp = () => {
  const content = [
    {
      title: "Close Shop",
      content: [
        "https://github.com/VxxxxC/VEPER.CODES/blob/master/demoSrc/1.5/close_shop.mov?raw=true",
      ],
      isVideo: true,
    },
    {
      title: "Ordering and Checkout",
      content: [
        "https://github.com/VxxxxC/VEPER.CODES/blob/master/demoSrc/1.5/Ordering_to_checkout.mov?raw=true",
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

export default revamp;
