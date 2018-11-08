import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Md5 } from 'ts-md5';
import { StateService } from '../state.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  profileImage: string;

  constructor(
    private authService: AuthService,
    private state: StateService) { }

  ngOnInit() {
    // setup profile image from gravatar
    this.state.user.subscribe(user => {
      console.log('user', user);
      var hashedEmail = Md5.hashStr(user.email.toLowerCase());
      this.profileImage = `https://www.gravatar.com/avatar/${hashedEmail}?d=mp`;
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
