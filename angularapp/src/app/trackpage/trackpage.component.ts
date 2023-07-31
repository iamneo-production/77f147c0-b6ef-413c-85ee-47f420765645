import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Newcard } from '../userservices/newcard';
import { NewcardService } from '../userservices/newcard.service';
import { Newcarddoc } from '../userservices/newcarddoc';

@Component({
  selector: 'app-trackpage',
  templateUrl: './trackpage.component.html',
  styleUrls: ['./trackpage.component.css']
})
export class TrackpageComponent {
  id:number;
  Applieddocuments:Newcard=new Newcard();
  setApprovalStatus : string;
  newd : Newcarddoc = new Newcarddoc();
  constructor(private route: ActivatedRoute,private router: Router,
    private newService: NewcardService, private docService: NewcardService) { }
    ngOnInit() {
      const profileId = this.route.snapshot.params['id'];
      this.newService.getProfile(profileId).subscribe(
        (data) => {
          this.Applieddocuments = data;
          console.log(data.approvalStatus);
        },
        (error) => {
          console.log('Error fetching profile details:', error);
        }
      );

        
    }
  
      
}