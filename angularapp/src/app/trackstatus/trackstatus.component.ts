import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Newcard } from '../userservices/newcard';
import { NewcardService } from '../userservices/newcard.service';

@Component({
  selector: 'app-trackstatus',
  templateUrl: './trackstatus.component.html',
  styleUrls: ['./trackstatus.component.css']
})
export class TrackstatusComponent {
  id:number
  Applieddocuments:Newcard=new Newcard();
  
  constructor(private router: Router,private newService: NewcardService ){}
  ngOnInit(): void {
    
  }

  track(id:number){ 
    this.router.navigateByUrl(`/status/${this.id}`);
  
}
}
