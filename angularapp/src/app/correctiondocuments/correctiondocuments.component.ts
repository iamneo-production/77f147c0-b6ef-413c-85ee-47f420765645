import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CorrectiondocsService } from '../adminservice/correctiondocs.service';
import { Correctiondocs } from '../adminservice/correctiondocs';
@Component({
  selector: 'app-correctiondocuments',
  templateUrl: './correctiondocuments.component.html',
  styleUrls: ['./correctiondocuments.component.css']
})
export class CorrectiondocumentsComponent {
  
  users: Observable<Correctiondocs[]>;
  constructor(private router: Router,private newService: CorrectiondocsService) {}

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.users = this.newService.getAllUpdatedProfile();
  }
  viewDoc(id: number){
    this.router.navigateByUrl(`/verify/${id}`);
  }
}

