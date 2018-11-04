import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  profileImage: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // setup profile image from gravatar
    var user = this.authService.getUser();
    var hashedEmail = Md5.hashStr(user.email.toLowerCase());
    this.profileImage = `https://www.gravatar.com/avatar/${hashedEmail}?d=mp`;
  }

  logout(): void {
    this.authService.logout();
  }
}
