import { Component, inject, OnInit } from '@angular/core';
import { UsersListService } from '../../services/users-list.service';
import { IUser } from '../../interfaces/user.interface';
import { Observable, of } from 'rxjs';
import { UsersListResponse } from '../../types/users-list-response';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-user-list',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList implements OnInit {
  private readonly _usersListService = inject(UsersListService)
  usersList$: Observable<UsersListResponse> = of([]);

  ngOnInit() {
    this.usersList$ = this._usersListService.getUsers();
  }
}
