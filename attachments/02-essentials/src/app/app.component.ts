import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { dummyTasks } from './dummy-tasks'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  users = DUMMY_USERS;
  selectedUserId = '';

  onSelectUser(id: string) {
    console.log('selected' + id)
    this.selectedUserId = id;
  }

  get SelectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }
}
