export interface Task extends SubTask {
  subTasks?: SubTask[];
}
export interface SubTask {
  id?: string;
  title: string;
  creator: string;
  content?: string;
  completed: boolean;
  comments?: Comment[];
  date: {
    created: number;
    completed?: number;
    expected?: number;
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
  creator: string;
  content: string;
  createdAt: number;
}

export type createTaskOptions = {
  userID: string;
  task: Omit<Task, "id">;
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
