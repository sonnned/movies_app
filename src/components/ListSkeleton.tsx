import { FC } from 'react';

interface ListSkeletonProps {
  arr: number[];
}

const ListSkeleton: FC<ListSkeletonProps> = ({ arr }) => {
  return (
    <div className="flex flex-col my-10 sm:my-20">
      <p className="animate-pulse bg-gray-800 h-10 w-40 rounded-md mb-4"></p>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4
"
      >
        {arr.map((_, index) => (
          <div
            className="animate-pulse bg-gray-800 h-96 rounded-md"
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ListSkeleton;
