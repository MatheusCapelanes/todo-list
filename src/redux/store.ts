import { configureStore } from '@reduxjs/toolkit';
import sliceTask from './slice';

const store = configureStore({
 reducer: {
  tasks: sliceTask,
 },
})

export default store;
