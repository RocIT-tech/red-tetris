import {IOptionGame, IPiece, IPos} from '@src/common/IType';

interface IEventSetRoomPlayerName {
  playerName: string,
  roomName: string,
}

interface IEventSetGameOption {
  optionGame: IOptionGame
}

interface IEventStartGame {
}

interface IEventPlacePiece {
  piece: IPiece,
  pos: IPos
}

enum ENUM_SOCKET_EVENT_SERVER {
  SET_ROOM_PLAYER_NAME = 'SET_ROOM_PLAYER_NAME',
  SET_GAME_OPTION = 'SET_GAME_OPTION',
  START_GAME = 'START_GAME',
  PLACE_PIECE = 'PLACE_PIECE',
}

export {
  ENUM_SOCKET_EVENT_SERVER,
  IEventSetRoomPlayerName,
  IEventSetGameOption,
  IEventStartGame,
  IEventPlacePiece,
};