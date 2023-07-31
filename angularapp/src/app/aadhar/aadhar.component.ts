import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CorrectiondocsService } from '../adminservice/correctiondocs.service';
import { Applieddoc } from '../adminservice/applieddoc';


@Component({
  selector: 'app-aadhar',
  templateUrl: './aadhar.component.html',
  styleUrls: ['./aadhar.component.css']
})
export class AadharComponent implements OnInit {

  id:number;
  Applieddocuments:Applieddoc=new Applieddoc();
 
  constructor(private route: ActivatedRoute,private router: Router, private adminService: CorrectiondocsService ) { }
  ngOnInit() {
     
    this.id = this.route.snapshot.params['id']|| null;
    console.log(this.id);
    this.adminService.getProfile(this.id)
      .subscribe(data => {
        console.log(data)
        this.Applieddocuments= data;
      }, error => console.log(error));


  }
  

  generateAadhar(id: number){
    alert("Aadhar card Generated Successfully!");
    this.router.navigateByUrl(`/gaadhar/${id}`);
  }


}
