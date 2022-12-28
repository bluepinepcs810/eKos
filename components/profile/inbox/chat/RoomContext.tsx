'use client';

import React, {
  PropsWithChildren,
  useContext,
  useMemo,
  useCallback,
} from 'react';
import { useGetChatRoom } from '../../../../hooks/api.hooks';
import { RoomModel } from '../../../../libraries/models/chat';
import { ID } from '../../../../libraries/types/common';
import { useStoreState } from '../../../../store/types';
import PageLoader from '../../../common/PageLoader';

export const RoomContext = React.createContext<RoomModel>({
  id: -1,
  users: [],
});

type RoomContextProviderProps = {
  roomId: ID;
} & PropsWithChildren;

export const RoomContextProvider: React.FC<RoomContextProviderProps> = ({
  children,
  roomId,
}) => {
  const { isLoading, data } = useGetChatRoom(roomId);

  return (
    <>
      <PageLoader loading={isLoading} />
      {data && (
        <RoomContext.Provider value={data}>{children}</RoomContext.Provider>
      )}
    </>
  );
};

export const useRoom = () => {
  const room = useContext(RoomContext);
  const { me } = useStoreState((state) => state.session);

  const otherParty = useMemo(() => {
    return room.users.find((user) => user.id !== me?.id);
  }, [me?.id, room.users]);

  const isMe = useCallback((userId: ID) => me?.id === userId, [me?.id]);

  return {
    room,
    otherParty,
    isMe,
  };
};
