
const revamp = () => {
  const content = [
    {
      title: "Close Shop",
      content:
        "https://github.com/VxxxxC/VEPER.CODES/blob/master/demoSrc/1.5/close_shop.mov?raw=true",
    },
    {
      title: "Ordering and Checkout",
      content:
        "https://github.com/VxxxxC/VEPER.CODES/blob/master/demoSrc/1.5/Ordering_to_checkout.mov?raw=true",
    },
  ];

  return (
    <>
      <div className="m-2 rounded-xl p-2">
        <div className="text-lg font-bold underline underline-offset-8">
          Revamp POS
        </div>
        {content.map((item, index) => {
          return (
            <div className="m-2 p-2 grid grid-cols-2 mobile:grid-cols-1 justify-center items-center gap-2 border border-opacity-30 border-gray-700 hover:border-gray-500 rounded-xl">
              <div className="text-center text-base font-medium">
                {item.title}
              </div>
              <div>
                <video controls>
                  <source src={item.content} type="video/mp4" />
                </video>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default revamp;
