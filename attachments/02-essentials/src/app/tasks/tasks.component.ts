import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from '../dummy-tasks';
import { User } from '../models/user.model';
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() selectedUser!: User
  tasks = dummyTasks;
  isAddingTask = false;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.selectedUser.id)
  }

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if(tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

  onCompleteTask(id:string) {
    console.log('id', id)
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();

  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancellingNewTask(isCancelling: boolean) {
    console.log('isCancelling', isCancelling)
    if(isCancelling) {
      this.isAddingTask = false;
    }
  }

  onGettingData(data:any) {
    console.log({data})
    this.tasks.push({
      ...data,
      userId: this.selectedUser.id
    })
    console.log('tasks', this.tasks)
    this.isAddingTask = false;
    this.saveTasks();
  } 
}
