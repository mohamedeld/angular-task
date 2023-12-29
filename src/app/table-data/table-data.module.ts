import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { TableModule } from 'primeng/table';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    TableModule,
    InputSwitchModule,
    FormsModule,
    PaginatorModule,
    DropdownModule,
    TooltipModule,
  ],
  exports: [TableComponent],
})
export class TableDataModule {}
