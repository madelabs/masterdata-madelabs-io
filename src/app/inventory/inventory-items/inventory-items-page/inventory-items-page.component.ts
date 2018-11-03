import { Component, OnInit } from '@angular/core';
import { InventoryItemListItem } from '../inventory-item-list/inventory-item-list-item';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { StateService } from '../../../common/state.service';
import { InventoryItem } from '../inventory-item';
import { InventoryItemService } from '../inventory-item.service';

@Component({
  selector: 'inventory-items-page',
  templateUrl: './inventory-items-page.component.html',
  styleUrls: ['./inventory-items-page.component.css']
})
export class InventoryItemsPageComponent implements OnInit {

  isCreateVisible: boolean = false;
  isDetailVisible: boolean = false;
  isImportVisible: boolean = false;

  constructor(
    private inventoryItemService: InventoryItemService,
    private route: ActivatedRoute,
    private router: Router,
    private state: StateService) { }

  ngOnInit() {
    this.setupPageByUrl();
    this.setupPageComponents();
  }

  onItemSelected(item: InventoryItem): void {
    this.state.activeInventoryItem.next(item);
    this.router.navigate(['/inventory/items', item.id]);
  }

  private setupPageByUrl(): void {
    this.route.params.subscribe(params => {
      
      // Check for selected item to display details
      if (params.id) {  
        this.inventoryItemService.getSingle(params.id)
          .then(item => {
            this.state.activeInventoryItem.next(item);
            this.state.isInventoryItemDetailVisible.next(true);
          });
      }
    });

    var action = this.route.snapshot.url[this.route.snapshot.url.length - 1].path;
    switch(action) {
      // Check if creating new item
      case 'create':
        this.state.isInventoryItemCreateVisible.next(true);
        break;
      // Check if importing items
      case 'import':
        this.state.isInventoryItemImportVisible.next(true);
        break;
      // Nothing
      default:
        break;
    }
  }

  private setupPageComponents(): void {
    this.state.isInventoryItemCreateVisible.subscribe(isVisible => {
      this.isCreateVisible = isVisible;
    });

    this.state.isInventoryItemDetailVisible.subscribe(isVisible => {
      this.isDetailVisible = isVisible;
    });

    this.state.isInventoryItemImportVisible.subscribe(isVisible => {
      this.isImportVisible = isVisible;
    });
  }
}
