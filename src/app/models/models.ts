export interface IProjectModel {
  projectName: string;
  id: number;
}

export interface ITasks {
  projectId: number;
  taskName: string;
  timeInSec: number;
  state: TaskState;
}


export enum TaskState {
  start, paused, ended
}
