import { Component, OnInit } from '@angular/core';
import { InventoryLocationListItem } from '../inventory-location-list/inventory-location-list-item';

@Component({
  selector: 'app-inventory-locations-page',
  templateUrl: './inventory-locations-page.component.html',
  styleUrls: ['./inventory-locations-page.component.css']
})
export class InventoryLocationsPageComponent implements OnInit {

  isCreateVisible: boolean = false;
  isDetailVisible: boolean = false;
  selectedLocationId: number;

  constructor() { }

  ngOnInit() {
  }

  onLocationSelected(location: InventoryLocationListItem): void {
    this.selectedLocationId = location.id;
    this.isDetailVisible = true;
  }

  toggleCreateVisibility(): void {
    this.isCreateVisible = !this.isCreateVisible;
  }

  toggleDetailVisibility(visible: boolean): void {
    this.isDetailVisible = visible;
  }
}
