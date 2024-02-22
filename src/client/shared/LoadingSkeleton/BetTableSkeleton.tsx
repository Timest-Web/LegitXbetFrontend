import LoadingSkeleton from ".";

const BetTableLoadingSkeleton = () => {
  const SkeletonCard = () => {
    return (
      <div className="flex items-center justify-between w-[720px] rounded-lg bg-lightAsh px-5 mt-10">
        <LoadingSkeleton className="h-3 w-3 rounded-full" />
        <div className="flex items-center justify-center space-x-2">
          <LoadingSkeleton className="h-3 w-20 rounded-sm " />
          <LoadingSkeleton className="h-3 w-20 rounded-sm " />
        </div>
        <div className="flex items-center justify-center space-x-2">
          <LoadingSkeleton className="h-3 w-20 rounded-sm " />
          <LoadingSkeleton className="h-3 w-20 rounded-sm " />
          <LoadingSkeleton className="h-3 w-20 rounded-sm " />
        </div>
        <LoadingSkeleton className="h-3 w-12 rounded-sm" />
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-between bg-lightAsh px-5 py-8 rounded-xl space-y-3">
      <LoadingSkeleton className="h-1 w-full " />
      <LoadingSkeleton className="h-1 w-full " />
      <LoadingSkeleton className="h-1 w-full " />
      {Array.from({ length: 5 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default BetTableLoadingSkeleton;
