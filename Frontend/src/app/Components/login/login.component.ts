import { Component } from '@angular/core';
import { UserServiceService } from '../../Services/user-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(
    private readonly usersService: UserServiceService,
    private router: Router
  ) { }

  email: string = ''
  password: string = ''
  errorMessage: string = ''
  isLoggedIn:boolean = false;

  async handleSubmit() {

    if (!this.email || !this.password) {
      this.showError("Email and Password is required");
      return
    }

    try {
      const response = await this.usersService.login(this.email, this.password);
      if(response.statusCode == 200){
        localStorage.setItem('token', response.token)
        localStorage.setItem('role', response.role)
        console.log("Role is : " , response.role);

        if(response.role === "USER"){
          this.router.navigate(['/home']);
        } else{
          // reload the window
        this.router.navigate(['/users']);
        }
      }else{
        this.showError(response.message)
      }
    } catch (error: any) {
      this.showError(error.message)
    }

  }

  showError(mess: string) {
    // this.errorMessage = mess;
    this.errorMessage = 'Failed your connection during the login operation...';

    setTimeout(() => {
      this.errorMessage = ''
    }, 3000)
  }

  
}
