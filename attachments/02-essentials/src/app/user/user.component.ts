import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../models/user.model';


@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user!: User;
  @Input({required: true}) selected!: boolean
  @Output() select = new EventEmitter<string>();

  get imageSrc() {
    return 'assets/users/' + this.user.avatar
  }

  onSelectUser() {
    console.log('clicked')
    this.select.emit(this.user.id)
  }
}
