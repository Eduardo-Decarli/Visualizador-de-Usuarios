import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IAlbum } from "../interfaces/album.interface";
import { AlbumsListResponse } from "../types/album-list-response";

Injectable({
  providedIn: 'root'
})
export class AlbumsListService {
  private readonly _http = inject(HttpClient);

  getUserAlbuns(userId: string): Observable<AlbumsListResponse> {
    return this._http.get<AlbumsListResponse>(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
  }
}
