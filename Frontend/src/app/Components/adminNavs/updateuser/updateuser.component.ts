import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserServiceService } from '../../../Services/user-service.service';

@Component({
  selector: 'app-updateuser',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './updateuser.component.html',
  styleUrl: './updateuser.component.css'
})
export class UpdateuserComponent implements OnInit{


  constructor(private readonly userService:UserServiceService,
    private readonly router: Router,
    private readonly route:ActivatedRoute){}


    userId: any;
    userData: any = {}
    errorMessage:string = ''


  ngOnInit(): void {
    this.getUserById()

  }

  async getUserById(){
      this.userId = this.route.snapshot.paramMap.get('id')
      const token = localStorage.getItem('token')
      if(!this.userId || !token){
          this.showError("User ID or TOken is Required")
          return;
      }

      try {
        let userDataResponse = await this.userService.getUsersById(this.userId, token)
        const {name, email, role, city} = userDataResponse.ourUsers
        this.userData = {name, email, role, city};

      } catch (error:any) {
        this.showError(error.message);
      }
  }

  async updateUser(){
    const confitm = confirm("Are you sure you wanna update this user")
    if(!confirm) return
    try{
      const token = localStorage.getItem('token')
      if(!token){
        throw new Error("Token not found")
      }
      const res = await this.userService.updateUSer(this.userId, this.userData, token);
      console.log("This res is printing inside the updateUser function : " , res)

      if(res.statusCode === 200){
        this.router.navigate(['/users'])
      }else{
        this.showError(res.message)
      }

    }catch(error:any){
      this.showError(error.message)
    }

  }


  showError(mess: string) {
    this.errorMessage = mess;
    setTimeout(() => {
      this.errorMessage = ''
    }, 3000)
  }

}
