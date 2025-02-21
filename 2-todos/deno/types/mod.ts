export interface Task {
  id?: string;
  title: string;
  content: string;
  completed: boolean;
  comments: Comment[];
  subTasks: Task[];
  date: {
    created: number;
    completed: number;
    expected: number;
  };
  priority: Priority;
}

export enum Priority {
  low = 4,
  medium = 3,
  high = 2,
  important = 1,
}

interface Comment {
  id?: string;
  userID: string;
  content: string;
  createdAt: number;
}

export type createTaskOptions = {
  userID: string;
  task: Task;
};
export type getTaskOptions = {
  userID: string;
  taskID: string;
};
export type updateTaskOptions = {
  userID: string;
  taskID: string;
  newTask: Task;
};
