
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
      <div className="m-2 rounded-xl p-2">
        <div className="text-lg font-bold underline underline-offset-8">
          New Features
        </div>
        {content.map((item, index) => {
          return (
            <div className="m-2 p-2 grid grid-cols-2 mobile:grid-cols-1 justify-center items-center gap-2 border border-opacity-30 border-gray-800 hover:border-gray-400 rounded-xl">
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

export default newFeature;
