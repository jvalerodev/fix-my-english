import { SyncLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen top-0 left-0 absolute z-50">
      <SyncLoader color="#2563EB" size={18} />
    </div>
  );
};

export default LoadingSpinner;
