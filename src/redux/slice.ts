import { PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface Tasks {
 id?: string;
 title: string;
 completed?: boolean;
}

const initState: Tasks[] = [
 {id: '1', title: 'Task 1', completed: false},
 {id: '2', title: 'Task 2', completed: false},
]

const sliceTask = createSlice({
 name: 'task',
 initialState: initState,
 reducers: {
  addTask(state, { payload }: PayloadAction<string>) {
   return [...state, { title: payload, completed: false, id: Math.random().toString() }]
  }

 }
})

export default sliceTask.reducer;
export const { addTask } = sliceTask.actions;

export const useTask = (state: any) => {
 return state.tasks as Tasks[];
}