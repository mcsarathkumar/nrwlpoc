import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmailsubComponent } from './emailsub/emailsub.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule],
  declarations: [EmailsubComponent],
  exports: [EmailsubComponent]
})
export class EmailsubscriptionModule {}
