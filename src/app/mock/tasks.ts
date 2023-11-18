interface Task {
 id: string;
 title: string;
 description: string;
 completed: boolean;

}

export const tasks: Task[] = [
 {
   id: "1",
   title: "Task 1",
   description: "Descrição da tarefa 1",
   completed: false,
 },
 {
   id: "2",
   title: "Task 2",
   description: "Descrição da tarefa 2",
   completed: true,
 },
 {
   id: "3",
   title: "Task 3",
   description: "Descrição da tarefa 3",
   completed: false,
 },
];