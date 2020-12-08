import { Component,/* Input*/ OnInit } from '@angular/core';
import {Assignment} from '../assignment.model';
import {AssignmentsService} from '../../shared/assignments.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  /*@Input() assignmentTransmis:Assignment;*/
  assignmentTransmis:Assignment;

  constructor(private assignmentService:AssignmentsService, 
              private route:ActivatedRoute,
              private router:Router) {}

  ngOnInit(): void {
    //id passé dans URL via l'objet snapshot
    const id = +this.route.snapshot.params.id;
    this.assignmentService.getAssignment(id).subscribe(a => this.assignmentTransmis = a);
  }

  onAssignmentRendu() {
    this.assignmentTransmis.rendu = true;

    this.assignmentService.updateAssignment(this.assignmentTransmis)
      .subscribe((message) => console.log(message));

      this.assignmentTransmis=null;

      this.router.navigate(["home"]);
  }

  onDelete() {
    this.assignmentService.deleteAssignment(this.assignmentTransmis)
    .subscribe((message) => console.log(message));

    this.assignmentTransmis=null;

    this.router.navigate(["home"]);
  }
}
