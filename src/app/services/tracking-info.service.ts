import {Injectable} from '@angular/core';
import {ITasks} from "../models/models";

@Injectable({
  providedIn: 'root'
})
export class TrackingInfoService {

  getTasks(projectId: number) {
    try {
      let tasks = localStorage.getItem(String(projectId));
      if (tasks) {
        tasks = JSON.parse(tasks);
      }
      return tasks;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  setTasks(task: ITasks) {
    const existingTasks = localStorage.getItem(String(task.projectId));
    if (existingTasks) {
      const existingTaskObj = JSON.parse(existingTasks);
      existingTaskObj.push(task);
    }

  }

  constructor() {
  }
}
