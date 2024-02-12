import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { PromotionsService } from '../../services/promotions.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { IngresoForm } from '../../../types';


@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [MatTabsModule, MatButtonModule, MatInput, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.css'
})
export class WalletComponent{

  promotionService: PromotionsService = inject(PromotionsService);

  ingresoForm = new FormGroup({
    codigo: new FormControl(''),
    userId: new FormControl('')
  })

  onIngreso(){
    const formValue = this.ingresoForm.value;
     
    const ingresoForm: IngresoForm = {
      codigo: formValue.codigo || '',
      userId: 1,
      promotionId: 1
    }

    this.promotionService.use(ingresoForm).subscribe(
      
    )
  }
}
