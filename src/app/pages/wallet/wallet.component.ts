import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { PromotionsService } from '../../services/promotions.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UserPromotion, User } from '../../../types';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [MatTabsModule, MatButtonModule, MatInput, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.css'
})
export class WalletComponent{
  cookieService: CookieService = inject(CookieService);

  promotionService: PromotionsService = inject(PromotionsService);

  userPromotionForm = new FormGroup({
    codigo: new FormControl(''),
    userId: new FormControl('')
  })

  onIngreso(){
    const formValue = this.userPromotionForm.value;
     
    const userPromotionForm: UserPromotion = {
      codigoPromotion: formValue.codigo || '',
      userId: 1,
    }

    this.promotionService.use(userPromotionForm).subscribe(
      (result) => {
        if(result == false){
          return 'La promoción no existe o ya fue utilizada';
        }else{
          const usuario: User = JSON.parse(this.cookieService.get('user'));
          
        }
      }
    )
  }
}
