import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplydocumentService } from '../userservice/applydocument.service';
import { ApplyformService } from '../userservice/applyform.service';

@Component({
selector: 'app-trackpage',
templateUrl: './trackpage.component.html',
styleUrls: ['./trackpage.component.css']
})
export class TrackpageComponent {
id:number;
Applieddocuments: Applyform=new Applyform ();
setApprovalStatus : string;
constructor(private route: ActivatedRoute,private router: Router,
private newService: ApplyformService) { }
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
viewAadhar(id: number){
if(this.Applieddocuments.approvalStatus=="approved"){
this.router.navigateByUrl(`/gaadhar/${id}`);
}
else if(this.Applieddocuments.approvalStatus=="rejected"){
alert("Application has been rejected"); 
} 
}
}
