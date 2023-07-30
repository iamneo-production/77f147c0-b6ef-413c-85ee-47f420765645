import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Newcard } from '../userservices/newcard';
import { NewcardService } from '../userservices/newcard.service';
import { NewcarddocService } from '../userservices/newcarddoc.service';

@Component({
  selector: 'app-generate-aadhar',
  templateUrl: './generate-aadhar.component.html',
  styleUrls: ['./generate-aadhar.component.css']
})
export class GenerateAadharComponent implements OnInit{
  id:number;
  Applieddocuments:Newcard=new Newcard();
  
  imageSrc: any;
  docid:string;
  setApprovalStatus : string;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private verifyService: NewcardService, private docService: NewcarddocService) { }
    ngOnInit() {
     
      this.id = this.route.snapshot.params['id']|| null;
      console.log(this.id);
      this.verifyService.getProfile(this.id)
        .subscribe(data => {
          console.log(data)
          this.Applieddocuments= data;
        }, error => console.log(error));

        this.fetchImage();
    }

    fetchImage() {
      this.verifyService.downloadImageByProfileId(this.id).subscribe(
        (response: any) => {
          const imageBlob = new Blob([response.body], { type: 'image/png' });
          this.imageSrc = this.createImageFromBlob(imageBlob);
        },
        (error) => {
          console.error('Error fetching the image:', error);
        }
      );}

      createImageFromBlob(image: Blob): any {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
          this.imageSrc = reader.result; // url assigned to image
        }, false);
        if (image) {
          reader.readAsDataURL(image);
        }
      }
      
}

