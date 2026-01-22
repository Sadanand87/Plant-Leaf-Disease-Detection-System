import { Component } from '@angular/core';
import { UserServiceService } from '../../Services/user-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  formData: any = {
    name: '',
    email: '',
    password: '',
    role: '',
    city: ''
  };
  errorMessage: string = '';

  constructor(
    private readonly userService: UserServiceService,
    private readonly router: Router
  ) { }

  async handleSubmit() {

    // Check if all fields are not empty
    if (!this.formData.name || !this.formData.email || !this.formData.password || !this.formData.role || !this.formData.city) {
      this.showError('Please fill in all fields.');
      return;
    }

    // Confirm registration with user
    const confirmRegistration = confirm('Are you sure you want to register this user?');
    if (!confirmRegistration) {
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }

      console.log("This is the register form data : " , this.formData);
      const response = await this.userService.register(this.formData, token);
      console.log("This is the register response data : " , response);
      if (response.statusCode === 200) {
        console.log("Login response data : " , response);
        console.log("Login response data ourUser : " , response.ourUsers);

        this.router.navigate(['/users']);
      } else {
        this.showError(response.message);
      }
    } catch (error: any) {
      this.showError(error.message);
    }
  }

  showError(message: string) {
    this.errorMessage = message;
    setTimeout(() => {
      this.errorMessage = ''; // Clear the error message after the specified duration
    }, 5000);
  }
}
