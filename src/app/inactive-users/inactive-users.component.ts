import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
  providers: []
})
export class InactiveUsersComponent implements OnInit {
  @Input() users: string[];

  constructor(private userService: UserService) { }
  
  ngOnInit() {
  }

  onSetToActive(id: number) {   
    this.userService.onSetToactive(id);
  }

}
