import {combineReducers} from 'redux';
import metersData from './meters-data';
import stations from './stations';

export default combineReducers({
  metersData,
  stations
});
