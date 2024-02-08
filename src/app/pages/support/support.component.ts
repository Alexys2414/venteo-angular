import { Component } from '@angular/core';
import { IssuesService } from '../../services/issues.service';

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

}
