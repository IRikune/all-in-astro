import { type NewTask, Priority, type User } from "../types/mod.ts";

interface GetInitialTasksOptions {
  userID: User["id"];
}

export function getInitialTasks(
  { userID }: GetInitialTasksOptions,
): Array<NewTask> {
  const firstTask: NewTask = {
    title: "Welcome to DeTasks 🎉",
    creator: userID,
    content:
      "This a example of a task to initialize your new project experience 🦖",
    date: {
      created: Date.now(),
    },
    priority: Priority.high,
    group: "Carnivores 🦖",
  };
  const secondTask: NewTask = {
    title: "You are the owner of your future 🦕",
    creator: userID,
    content:
      "From now on, you have the opportunity to make your project a success!",
    date: {
      created: Date.now(),
    },
    priority: Priority.important,
    group: "Herbivores 🦕",
  };
  return [firstTask, secondTask];
}
