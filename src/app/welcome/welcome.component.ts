import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  camp ='CodeTribe';

  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  onWelcome() {
  this.router.navigateByUrl("login")
  }
}
