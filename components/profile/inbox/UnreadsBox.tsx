import InboxItem from './InboxItem';

const UnreadsBox = () => {
  return (
    <>
      <div className="uppercase main-shadow p-2.5 rounded-lg text-main-dark font-semibold mb-2">
        Unread
      </div>
      <InboxItem />
      <InboxItem />
      <InboxItem />
      <InboxItem />
      <InboxItem />
      <InboxItem />
    </>
  );
};
export default UnreadsBox;
