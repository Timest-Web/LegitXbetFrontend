import HotlineCall from "@/src/client/shared/Svg/HotlineCall";

const HotlineBar = () => {
  return (
    <div className="bg-white w-[17rem] h-[7.5rem] mt-4 rounded-2xl p-6 flex flex-col space-y-3 text-sm">
      <div className="flex space-x-3">
        <HotlineCall />
        <h3 className="font-bold">24/7 Call lines</h3>
      </div>
      <h3>+234 818 217 5835</h3>
      <h3>+234 818 217 5835</h3>
    </div>
  );
};

export default HotlineBar;
