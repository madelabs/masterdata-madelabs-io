import { Component, OnInit } from '@angular/core';
import { InventoryItemListItem } from '../inventory-item-list/inventory-item-list-item';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'inventory-items-page',
  templateUrl: './inventory-items-page.component.html',
  styleUrls: ['./inventory-items-page.component.css']
})
export class InventoryItemsPageComponent implements OnInit {

  isCreateVisible: boolean = false;
  isDetailVisible: boolean = false;
  isImportVisible: boolean = false;
  selectedItemId: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.setupPageByUrl();
  }

  onItemSelected(item: InventoryItemListItem): void {
    this.router.navigate(['/inventory/items', item.id]);
  }
  
  toggleCreateVisibility(): void {
    this.isCreateVisible = !this.isCreateVisible;
  }

  toggleDetailVisibility(visible: boolean): void {
    this.isDetailVisible = visible;
  }

  toggleImportVisibility(): void {
    this.isImportVisible = !this.isImportVisible;
  }

  private setupPageByUrl(): void {
    this.route.params.subscribe(params => {
      
      // Check for selected item to display details
      if (params.id) {  
        this.selectedItemId = params.id;
        this.isDetailVisible = true;
      }
    });

    var action = this.route.snapshot.url[this.route.snapshot.url.length - 1].path;
    switch(action) {
      // Check if creating new item
      case 'create':
        this.isCreateVisible = true;
        break;
      // Check if importing items
      case 'import':
        this.isImportVisible = true;
        break;
      // Nothing
      default:
        break;
    }
  }
}
