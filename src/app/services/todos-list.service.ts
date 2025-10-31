import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodosListService {

  private readonly _htto = inject(HttpClient);

  getUserTodos(userId: string): Observable<TodosListService> {
    return this._htto.get<TodosListService>(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
  }
}
