import {IState} from '@src/client/reducers/reducer';
import {IOnSetRoomesPlayersName, IOnSetRoomeState, IPieceMove} from '@src/client/actions/action-creators';

const reducerOnSetRoomState = (state: IState, action: IOnSetRoomeState): IState => {
  return state; // TODO
};

const reducerOnSetRoomsPlayersName = (state: IState, action: IOnSetRoomesPlayersName): IState => {
  return state; // TODO
};

const reducerPieceMove = (state: IState, action: IPieceMove): IState => {
  return state; // TODO
};

export {
  reducerOnSetRoomState,
  reducerOnSetRoomsPlayersName,
  reducerPieceMove,
};
