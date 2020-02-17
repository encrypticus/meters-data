import {combineReducers} from 'redux';
import metersData from './meters-data';
import stations from './stations';
import modal from './modal';

export default combineReducers({
  metersData,
  stations,
  modal
});
