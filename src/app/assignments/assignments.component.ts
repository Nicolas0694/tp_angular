import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import {Assignment} from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  assignmentSelectionne:Assignment;
  // formVisible = false;
  assignments:Assignment[];

  constructor(private assignmentService:AssignmentsService) { }

  ngOnInit(): void {
    //this.assignments = this.assignmentService.getAssignments();
    this.getAssignments();
  }

  getAssignments() {
    this.assignmentService.getAssignments()
      .subscribe((assignments) => {
        this.assignments = assignments
      });
  }

  /*
  onAddAssignmentBtnClick() {
    //this.formVisible = true;
  }
  */

  
  assignmentClique(assignment) {
    this.assignmentSelectionne = assignment;
    console.log(assignment);
  }

  /*
  onNouvelAssignment(event) {
    //console.log("components : onNouvelAssignment")
    // event est un Assignment ajouté par le fils (add-assignment)
    //this.assignments.push(event);

    this.assignmentService.addAssignment(event)
      .subscribe((message) => console.log(message));

    // on cache le formulaire d'ajout
    // this.formVisible = false;
  }
  */
}
