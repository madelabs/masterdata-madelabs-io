import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  profileImage: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    var user = this.authService.getUser();

    // setup gravatar
    var hashedEmail = Md5.hashStr(user.email.toLowerCase());
    this.profileImage = `https://www.gravatar.com/avatar/${hashedEmail}?d=mp&s=200`;
  }

  logout(): void {
    this.authService.logout();
  }
}
