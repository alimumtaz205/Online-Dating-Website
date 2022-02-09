import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister=new EventEmitter();
  model:any={};
  registerForm:any;

  constructor(private accountService:AccountService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    // this.registerForm=new FormGroup({
    //   username: new FormControl('', [Validators.required]),
    //   password: new FormControl('', [Validators.required])
    // })
  }

  Register(){
      this.accountService.Register(this.model).subscribe(res=>{
        console.log(res);
        this.Cancel();
      },error=>{
        console.log(error);
        this.toastr.error(error.error);
      })
  } 

  Cancel(){
    this.cancelRegister.emit(false);
  }
}
