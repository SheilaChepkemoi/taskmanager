import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import Swal from 'sweetalert2';
// import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
// import { Popover } from 'node_modules/bootstrap/dist/js/bootstrap.esm.min.js';

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')


@Component({
  selector: 'app-myday',
  templateUrl: './myday.component.html',
  styleUrls: ['./myday.component.css']
})
export class MydayComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  today = Date.now();
  todos: Todo[] = [];
  editTodo: any= Todo;
  completed: boolean = false;
  // deletetodo:any =Todo;
  todoval= '';
  dateval= '';
  ngOnInit(): void {

    this.getallTasks();
    // Array.from(document.querySelectorAll('button[data-bs-toggle="popover"]'))
    // .forEach(popoverNode => new Popover(popoverNode))
  
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
  }


