import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LateralComponent } from '../Layout/lateral/lateral.component';
import { HeaderComponent } from '../Layout/header/header.component';
import { BarraOpcComponent } from '../Layout/barra-opc/barra-opc.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [CommonModule, LateralComponent, HeaderComponent, BarraOpcComponent, FormsModule, CalendarModule],
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class calendarioComponent {
  date: Date[] | undefined;
  selectedDate: Date = new Date();

  onDateSelect(date: Date) {
    this.selectedDate = date;
  }

  

}
