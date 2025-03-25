//#region task
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

//#region user

export type createUserOptions = {
  user: Omit<User, "id">;
};
export type getUserOptions = {
  userID: string;
};
export type updateUserOptions = {
  userID: string;
  newUser: User;
};
export interface newUser{
  name: string;
  email: string;
  password: string;
  avatar: string;
}
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar: string;
}
