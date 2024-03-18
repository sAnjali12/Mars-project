import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { UserServiceService } from '../../service/user-service.service';
import { faCloudMoon } from '@fortawesome/free-solid-svg-icons';
import { faSunPlantWilt } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-users-card',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FontAwesomeModule],
  providers: [UserServiceService],
  templateUrl: './users-card.component.html',
  styleUrl: './users-card.component.scss'
})
export class UsersCardComponent {
  userList: any=[] 
  faCloudMoon = faCloudMoon;
  faSun = faSunPlantWilt;
  darkMode: boolean = false;


  constructor(private service: UserServiceService) { }

  ngOnInit(): void {
    this.getAllUsers()
    
  }

  getAllUsers(){
    this.service.getUsers().subscribe((res)=>{
      this.userList = res.data
    })
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
    const cv = document.getElementById('cards');
    if (this.darkMode) {
      cv?.classList.add('dark-theme');
    } else {
      cv?.classList.remove('dark-theme');
    }
  }
}
