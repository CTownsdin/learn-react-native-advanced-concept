import { combineReducers } from 'redux';
import auth from './auth';
import jobs from './jobs';

export default combineReducers({
  auth,
  jobs
});
