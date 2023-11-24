export interface TaskProps {
 id: string;
 title: string;
 description?: string;
 completed: boolean;

}

export const taskMock: TaskProps[] = [
  {
    id: "1",
    title: 'Fazer compras no mercado',
    completed: false
  },
  {
    id: "2",
    title: 'Estudar para a prova de matemática',
    completed: true
  },
  {
    id: "3",
    title: 'Limpar o quarto',
    completed: false
  },
  {
    id: "4",
    title: 'Preparar o jantar',
    completed: false
  }
];