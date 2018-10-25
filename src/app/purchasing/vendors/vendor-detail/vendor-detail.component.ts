import { Component, Input, OnInit } from '@angular/core';
import { VendorDetail } from './vendor-detail';
import { VendorService } from '../vendor.service';
import { PurchaseOrderListItem } from '../../purchase-orders/purchase-order-list/purchase-order-list-item';

@Component({
  selector: 'vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {
  @Input() id: number;
  model: VendorDetail = null;
  isCreatePurchasingOrderVisible: boolean = false;
  isPurchasingOrderDetailVisible: boolean = false;
  selectedPurchaseOrderId: number;

  constructor(private service: VendorService) { }

  ngOnInit() {
    this.service.getSingle(this.id).then(data => this.model = data);
  }

  onPurchaseOrderSelected(order: PurchaseOrderListItem): void {
    this.selectedPurchaseOrderId = order.id;
    this.isPurchasingOrderDetailVisible = true;
  }

  toggleCreatePurchaseOrderVisibility(): void {
    this.isCreatePurchasingOrderVisible = !this.isCreatePurchasingOrderVisible;
  }

  togglePurchaseOrderDetailVisibility(): void {
    this.isPurchasingOrderDetailVisible = !this.isPurchasingOrderDetailVisible;
  }
}
