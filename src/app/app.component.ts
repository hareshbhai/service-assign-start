import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})

export class AppComponent implements OnInit {
  title = 'service-test-assign';

  activeUsers : string[] = [];
  inactiveUsers : string[] = [];

  constructor(private userService : UserService){ }

  ngOnInit(): void {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
  }

  onSetToInactive(id: number) {
    console.log(this.activeUsers[id]);   
  }
  onSetToactive(id: number) {
    console.log(this.inactiveUsers[id]);    
  }
}
