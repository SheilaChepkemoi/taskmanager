import { Todo } from './../models/todo';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  baseurl = "http://localhost:3500";

  public getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseurl}/tasks`);
  }

  public getTodo(id: string): Observable<Todo> {
    return this.http.get<Todo>(this.baseurl+'/tasks/'+ id);
  }
  

  public addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.baseurl}/tasks`, todo);
  }

  // public updateTodo(todo: Todo, id: string): Observable<Todo> {
  //   return this.http.put<Todo>(`${this.baseurl}/tasks/${id}`, todo);
  // }
  public updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.baseurl}/tasks`, todo);
  }

  public deleteTodo(id: string){
    return this.http.delete<Todo>(this.baseurl+'/tasks/'+ id);
  }

  // deleteTodo(id:number){
  //   return this.http.delete<Todo>('http://localhost:4100/tasks/'+id);
  // }
}
