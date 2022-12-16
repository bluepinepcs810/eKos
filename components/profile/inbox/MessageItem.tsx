import { FC, useMemo } from "react"
import { MessageItemType } from "../../../libraries/types/chat"
import { convertMessageTime } from "../../../libraries/utils/helpers/date";

type MessageItemProps = {
  data: MessageItemType
}

const currentUserId = 'me';
const MessageItem: FC<MessageItemProps> = ({data}) => {
  const isMe = useMemo(() => currentUserId === data.senderId, [data.senderId]);

  return (
    <div className={'flex w-full ' + (isMe ? 'justify-end' : 'justify-start')}>
      <div className={"max-w-[80%] min-w-[200px] p-2.5 rounded-lg " + (isMe ? 'message-me' : 'message-other')}>
        <div className="text-main-light">
          {data.text}
        </div>
        <div className={"text-main-light text-sm " + (isMe ? 'text-left' : 'text-right')}>
          {convertMessageTime(data.createdAt)}
        </div>
      </div>
    </div>
  )
}
export default MessageItem
