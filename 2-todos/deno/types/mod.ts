export interface Task {
  id?: string;
  title: string;
  content: string;
  createdAt: number;
  completedAt: number;
  toCompleted: number,
  completed: boolean,
  comments: Comment[];
}
interface Comment{
  id?: string;
  userID: string;
  content: string;
  createdAt: number;
}

export type createNoteOptions = {
  userID: string;
  note: Task;
};
export type getNoteOptions = {
  userID: string;
  noteID: string;
};
export type updateNoteOptions = {
  userID: string;
  noteID: string;
  newNote: Task;
};
