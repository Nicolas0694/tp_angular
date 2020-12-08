import { Component, OnInit } from '@angular/core';
import { Assignment } from  '../assignment.model';
import { AssignmentsService} from '../../shared/assignments.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent implements OnInit {

  assignment:Assignment;
  nom:string;
  datedeRendu:Date;
  constructor(private assignmentService:AssignmentsService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
      const id = +this.route.snapshot.params.id;
      this.assignmentService.getAssignment(id).subscribe(ass => this.assignment =ass);

  }

  onSaveAssignment(event) {
    event.preventDefault();

    if (this.nom) {
      this.assignment.nom = this.nom;
    }

    if(this.datedeRendu) {
      this.assignment.dateDeRendu = this.datedeRendu;
    }

    this.assignmentService.updateAssignment(this.assignment).subscribe(message => console.log(message));

    this.router.navigate(['home']);

  }

}
