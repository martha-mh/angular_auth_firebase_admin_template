import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { ModalComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  ModalBodyComponent,
  ModalFooterComponent,
  ThemeDirective,
  CardGroupComponent,CardModule, SpinnerComponent, ContainerComponent, RowComponent, ColComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { NgStyle } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    ModalComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ModalBodyComponent,
    ModalFooterComponent,
    ThemeDirective,
    CardModule,
    CardGroupComponent,
    NgStyle,
    RouterModule,
    MatIconModule,
    FormsModule,
    CommonModule,
    IconDirective,
    SpinnerComponent,
    ContainerComponent,
    RowComponent,
    ColComponent,
    TextColorDirective,
    CardComponent,
    CardBodyComponent,
    FormDirective,
    InputGroupComponent,
    InputGroupTextDirective,
    FormControlDirective,
    ButtonDirective
  ],
  exports: [
    ModalComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ModalBodyComponent,
    ModalFooterComponent,
    ThemeDirective,
    CardModule,
    CardGroupComponent,
    NgStyle,
    RouterModule,
    MatIconModule,
    FormsModule,
    CommonModule,
    IconDirective,
    SpinnerComponent,
    ContainerComponent,
    RowComponent,
    ColComponent,
    TextColorDirective,
    CardComponent,
    CardBodyComponent,
    FormDirective,
    InputGroupComponent,
    InputGroupTextDirective,
    FormControlDirective,
    ButtonDirective
  ]
})
export class SharedModule { }
