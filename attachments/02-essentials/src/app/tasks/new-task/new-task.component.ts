import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancellingNewTask = new EventEmitter<boolean>(); 
  @Output() sendingData = new EventEmitter<Task>(); 
  @Input({required: true}) selectedUserId!: string

  cancelNewTask = false;
  data: Task = {
    id: new Date().getTime().toString(),
    userId: '',
    title: '',
    summary: '',
    dueDate: ''
  }

  onCancellingNewTask() {
    this.cancelNewTask = true;
    this.cancellingNewTask.emit(this.cancelNewTask)
  }

  onSendingData() {
    this.sendingData.emit(this.data)

  }
}
