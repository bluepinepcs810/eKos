import InboxItem from "./InboxItem";

const ReadsBox = () => {
  return (
    <>
      <div className="uppercase main-shadow p-2.5 rounded-lg text-main-dark font-semibold mb-2">
        Read
      </div>
      <InboxItem />
      <InboxItem />
      <InboxItem />
      <InboxItem />
      <InboxItem />
      <InboxItem />
    </>
  )
}
export default ReadsBox;
