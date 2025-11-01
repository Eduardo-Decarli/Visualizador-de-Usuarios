import { Component, inject, Input } from '@angular/core';
import { UsersListService } from '../../services/users-list.service';
import { Observable, of } from 'rxjs';
import { IUser } from '../../interfaces/user.interface';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-user-container',
  imports: [AsyncPipe],
  templateUrl: './user-container.html',
  styleUrl: './user-container.scss',
})
export class UserContainer {

  user$: Observable<IUser> = of({} as IUser);

  private readonly _usersListService = inject(UsersListService)

  @Input() set userId(value: string) {
    console.log(value);

    this.user$ = this._usersListService.getUser(value);
  }
}
