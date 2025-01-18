export interface Note {
  id?: string;
  title: string;
  content: string;
  date: number;
}

export type createNoteOptions = {
  userID: string;
  note: Note;
};
export type getNoteOptions = {
  userID: string;
  noteID: string;
};
export type updateNoteOptions = {
  userID: string;
  noteID: string;
  newNote: Note;
};
