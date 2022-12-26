import { ID } from "../types/common"
import { UserType } from "./user"

export type RoomModel = {
  id: ID,
  users: UserType[]
}

export type RoomListItemModel = {
  id: ID,
  latestMessage: string,
  user?: UserType,
  updatedAt: string
}
