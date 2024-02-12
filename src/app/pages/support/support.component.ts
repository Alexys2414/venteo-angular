import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../../services/issues.service';
import { Issue } from '../../../types';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [SupportComponent],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})

export class SupportComponent {
    
  }