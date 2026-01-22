import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  image1:string='https://images.wallpaperscraft.com/image/single/fern_plant_leaves_139338_3840x2400.jpg';
  
 // Write a logic , when the once the component is loaded a reload only for once time and then stop program execute automatically
 constructor() {
  console.log("isReloaded above of the if : " , localStorage.getItem('isReloaded'));

    if (localStorage.getItem('isReloaded') === 'false') {
      localStorage.setItem('isReloaded', 'true');
      // Your code to reload the page or execute any logic here
      // window.location.reload(); // Uncomment this line if you want to reload the page

    }
  console.log("isReloaded above of the if : " , localStorage.getItem('isReloaded'));

    if(localStorage.getItem('isReloaded') === null){
      localStorage.setItem('isReloaded', 'true');
      window.location.reload();
    // localStorage.removeItem('isReloaded');
    }
  }
}
