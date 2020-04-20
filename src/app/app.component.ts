import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { LoggingService } from './logging.service';

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
}
