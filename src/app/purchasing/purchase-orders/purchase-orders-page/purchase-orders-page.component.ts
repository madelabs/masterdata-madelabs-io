import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseOrderListItem } from '../purchase-order-list/purchase-order-list-item';

@Component({
  selector: 'purchase-orders-page',
  templateUrl: './purchase-orders-page.component.html',
  styleUrls: ['./purchase-orders-page.component.css']
})
export class PurchaseOrdersPageComponent implements OnInit {
  
  isCreateVisible: boolean = false;
  isDetailVisible: boolean = false;
  selectedItemId: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {  
        this.selectedItemId = params.id;
        this.isDetailVisible = true;
      }
    });
  }

  onItemSelected(item: PurchaseOrderListItem): void {
    this.router.navigate(['/purchasing/purchase-orders', item.id]);
  }
  
  toggleCreateVisibility(): void {
    this.isCreateVisible = !this.isCreateVisible;
  }

  toggleDetailVisibility(visible: boolean): void {
    this.isDetailVisible = visible;
  }
}
