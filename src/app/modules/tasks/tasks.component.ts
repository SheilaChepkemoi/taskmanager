import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  today = Date.now();
  todos: Todo[] = [];
  id: string| null = null
  todo: Todo = {} as Todo;
  editTodo: any= Todo;
  // deletetodo:any =Todo;
  todoval= '';
  dateval= '';
  ngOnInit(): void {

    this.getallTasks();
  
  }

  addTask(todoForm: NgForm){
    this.todoService.addTodo(todoForm.value).subscribe((response: Todo)=>{
      this.getallTasks();
      // this.toastr.success('Task added')
      console.log(response);
    }, 
    (error:any)=>{
      // this.toastr.error('failed to add')
      console.log(error);


    })

  }

  getallTasks(){
    this.todoService.getTodos().subscribe((response)=>{
      this.todos = response;
      console.log(response);

      
    },
    (error:any)=>{
      // this.toastr.error('failed to fetch records');
      console.log(error);
      
    })
  }

  edittTask(todoForm:NgForm, id:string): void {
    this.todoService.updateTodo(todoForm.value).subscribe(
      (response: Todo) => {
        // this.toastr.success('Updated successfully');
        console.log(response);
        console.log("clicked")
        this.getallTasks();
      },
      (error: any) => {
        // this.toastr.success('failed to update');
      }
    );
  }

   editTask(todo: Todo): void {
    this.todoService.updateTodo(todo).subscribe(
      (response: Todo) => {
        Swal.fire("Update", "Updated Successfully", "success");
        console.log(response);
        this.getallTasks();
      },
      (error) => {
        alert(error.message);
      }
    );
  }

  deleteTask(id: string): void {
    this.todoService.deleteTodo(id).subscribe(
      (response) => {
        console.log(response);
        console.log('clicked')
        this.getallTasks();
      },
      (error: any) => {
        // this.toastr.error('failed to delete');
        console.log(error);
     
      }
    );
  }
  viewTask(id: string){
    this.todoService.getTodo(id).subscribe((response)=>{
      this.todo = response;
      console.log(response);
    })
    //     this.todoService.getTodo(id).subscribe((response)=>{
    //       this.todos = response;
    //       console.log(response);
    
    //   }
    
    // }
    
}
}

//   