import { Component, OnInit } from '@angular/core';
import { KeyProviderService } from '../key-provider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service:KeyProviderService) {
    this.service.getNews().subscribe((data)=>{
      console.log(data)
    })
   }

  ngOnInit() {
  }

  
}
