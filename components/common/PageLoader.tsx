import BounceLoader from 'react-spinners/BounceLoader';
type PageLoaderProps = {
  loading: boolean;
};
const PageLoader: React.FC<PageLoaderProps> = ({ loading }) => {
  if (!loading) return null;
  return (
    <div className="fixed top-0 left-0 z-50 transition bg-white bg-opacity-60 w-full h-full flex justify-center items-center">
      <BounceLoader size={60} color="#C883FF" />
    </div>
  );
};
export default PageLoader;
