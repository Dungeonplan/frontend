import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Api } from 'src/app/class/api';

const discordLogoFile =  "./assets/icons/discord.svg";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) { 
    this.matIconRegistry.addSvgIcon('discord', this.domSanitizer.bypassSecurityTrustResourceUrl(discordLogoFile));
  }

  ngOnInit(): void {
  }

  discordLogin() {
    window.open(Api.getDiscordLoginURL(), '_SELF')
  }

}
