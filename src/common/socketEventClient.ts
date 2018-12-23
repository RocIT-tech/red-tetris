import {IRoomState} from '@src/server/RoomManager';

interface IEventSetRoomState {
  room: IRoomState
}

interface IRoomPlayersName {
  roomName: string,
  playerNames: string[],
}

interface IEventSetRoomsPlayersName {
  roomsPlayersName: IRoomPlayersName[]
}

enum ENUM_SOCKET_EVENT_CLIENT {
  SET_ROOM_STATE = 'SET_ROOM_STATE',
  SET_ROOMS_PLAYERS_NAME = 'SET_ROOMS_PLAYERS_NAME',
}

export {
  ENUM_SOCKET_EVENT_CLIENT,
  IEventSetRoomState,
  IEventSetRoomsPlayersName,
  IRoomPlayersName,
};
