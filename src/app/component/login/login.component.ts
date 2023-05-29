import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ManagerServiceService } from 'src/app/service/manager-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg?: any
  username: string = ''
  password: string = ''
  ngOnInit(): void {

  }
  constructor(private managerService: ManagerServiceService) { }

  login(loginOperatorForm: NgForm) {
    this.username = loginOperatorForm.value.username
    this.password = loginOperatorForm.value.password

    this.managerService.login(this.username, this.password).subscribe(response => {
      this.msg = response
      console.log(response)
    })
  }

}
