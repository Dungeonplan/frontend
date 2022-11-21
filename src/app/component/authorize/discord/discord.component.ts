import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Api } from 'src/app/class/api';
import { UserFactory } from 'src/app/class/user-factory';
import { LoginResponse } from 'src/app/interface/login-response';
import { UserStoreService } from 'src/app/service/user-store.service';

@Component({
  selector: 'app-discord',
  templateUrl: './discord.component.html',
  styleUrls: ['./discord.component.css']
})
export class DiscordComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private userStore: UserStoreService, private app: AppComponent) { 
    let token;
    this.route.paramMap.subscribe(params => {
      token = params.get('token')
    });

    if (token == null) {
      this.router.navigateByUrl('/login')
    }

    const body = {token: token}
    const url = Api.getTokenexchangeURL()
    
    this.http.post<LoginResponse>(url, body).subscribe(data => {
      let user = UserFactory.fromObject(data)
      this.userStore.setCurrentUser(user)
      this.app.user = user
      this.router.navigateByUrl('/dashboard')
    });
  }

  ngOnInit(): void {
  }

}
