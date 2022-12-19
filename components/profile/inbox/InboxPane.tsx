import ReadsBox from './ReadsBox';
import UnreadsBox from './UnreadsBox';

const InboxPane = () => {
  return (
    <div className="py-4 px-5">
      <div className="flex justify-start gap-x-2.5 mb-4">
        <button className="rounded-full bg-main-dark text-main-light hover:opacity-80 px-5 py-2.5">
          Selling
        </button>
        <button className="rounded-full bg-main text-main-dark hover:opacity-80 px-5 py-2.5">
          Buying
        </button>
      </div>
      <UnreadsBox />
      <div className="h-6"></div>
      <ReadsBox />
    </div>
  );
};

export default InboxPane;
