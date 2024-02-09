import { Component } from '@angular/core';
import { IssuesService } from '../../services/issues.service';
import { Issue } from '../../../types';
import { error } from 'console';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [SupportComponent],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {

  constructor(
    private issueService: IssuesService) { }
  
  saveIssue(issue: Issue):void {
    this.issueService.saveIssue(issue).subscribe(
      {
        next: 
         (savedIssue) => {
            console.log('Issue guardado:', savedIssue);
      

      }, error:(error) => {console.log("error",error)}

      })
    }
    
  }

