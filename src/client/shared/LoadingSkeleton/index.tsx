const LoadingSkeleton = ({className}:{className: string}) => {
   return <div className={`animate-pulse bg-slate-400 ${className}`}></div>;
};

export default LoadingSkeleton;
