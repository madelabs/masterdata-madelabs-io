import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-callback-page',
  templateUrl: './callback-page.component.html',
  styleUrls: ['./callback-page.component.css']
})
export class CallbackPageComponent implements OnInit {

  constructor(private authService: AuthService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe((fragment) => {

      // note: i am sure there is a better supported way to do this,
      // but this.route.params or queryparams both would not pick up
      // the url fragment "#".  So manually splitting to get tokens.
      var fragmentParts = fragment.split('&');
      var params = [];
      for (var i = 0; i < fragmentParts.length; i++) {
        var key = fragmentParts[i].split('=')[0];
        var val = fragmentParts[i].split('=')[1];

        params[key] = val;
      }
    
      // call service to login and store tokens
      this.authService.login(
        params['id_token'],
        params['access_token'],
        params['expires_in'],
        params['token_type']
      );
    });
  }
}
