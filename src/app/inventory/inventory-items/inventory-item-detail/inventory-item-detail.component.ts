import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { InventoryItemService } from '../inventory-item.service';
import { RoutingListItem } from '../../../manufacturing/routing-list/routing-list-item';
import { VendorListItem } from '../../../purchasing/vendors/vendor-list/vendor-list-item';
import { WorkOrderListItem } from '../../../work-orders/work-order-list/work-order-list-item';
import { InventoryStockListItem } from '../../inventory-stock/inventory-stock-list/inventory-stock-list-item';
import { PurchaseOrderListItem } from '../../../purchasing/purchase-orders/purchase-order-list/purchase-order-list-item';
import { InventoryItem } from '../inventory-item';
import { Observable, Subject } from 'rxjs';
import { StateService } from '../../../common/state.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'inventory-item-detail',
  templateUrl: './inventory-item-detail.component.html',
  styleUrls: ['./inventory-item-detail.component.css']
})
export class InventoryItemDetailComponent implements OnInit {

  model: InventoryItem = null;
  isCreatePurchaseOrderVisible: boolean = false;
  isCreateRoutingVisible: boolean = false;
  isCreateVendorVisible: boolean = false;
  isCreateWorkOrderVisible: boolean = false;
  isEditItemVisible: boolean = false;
  isInventoryStockDetailVisible: boolean = false;
  isPurchaseOrderDetailVisible: boolean = false;
  isRoutingDetailVisible: boolean = false;
  isVendorDetailVisible: boolean = false;
  isWorkOrderDetailVisible: boolean = false;
  selectedInventoryStockId: number;
  selectedPurchaseOrderId: number;
  selectedRoutingId: number;
  selectedVendorId: number;
  selectedWorkOrderId: number;

  constructor(
    private router: Router,
    private service: InventoryItemService, 
    public state: StateService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.state.activeInventoryItem.subscribe(item => {
      this.model = item;
    });

    this.state.isInventoryItemEditVisible.subscribe(isVisible => {
      this.isEditItemVisible = isVisible;
    });
  }

  delete(): void {
    // delete
    this.service.delete(this.model);
    
    // toast
    this.toastr.success(`${this.model.name} deleted.`);

    // close detail panel
    this.state.isInventoryItemDetailVisible.next(false);

    // route to list
    this.router.navigate(['/inventory/items']);
  }

  onInventoryStockSelected(stock: InventoryStockListItem): void {
    this.selectedInventoryStockId = stock.id;
    this.isInventoryStockDetailVisible = true;
  }

  onPurchaseOrderSelected(purchaseOrder: PurchaseOrderListItem): void {
    this.selectedPurchaseOrderId = purchaseOrder.id;
    this.isPurchaseOrderDetailVisible = true;
  }

  onRoutingSelected(routing: RoutingListItem): void {
    this.selectedRoutingId = routing.id;
    this.isRoutingDetailVisible = true;
  }

  onVendorSelected(vendor: VendorListItem): void {
    this.selectedVendorId = vendor.id;
    this.isVendorDetailVisible = true;
  }

  onWorkOrderSelected(workOrder: WorkOrderListItem): void {
    this.selectedWorkOrderId = workOrder.id;
    this.isWorkOrderDetailVisible = true;
  }

  toggleCreatePurchaseOrderVisibility(visible: boolean): void {
    this.isCreatePurchaseOrderVisible = visible;
  }

  toggleCreateRoutingVisibility(visible: boolean): void {
    this.isCreateRoutingVisible = visible;
  }

  toggleCreateWorkOrderVisibility(visible: boolean): void {
    this.isCreateWorkOrderVisible = visible;
  }

  toggleCreateVendorVisibility(visible: boolean): void {
    this.isCreateVendorVisible = visible;
  }
  
  toggleEditItemVisibility(visible: boolean): void {
    this.isEditItemVisible = visible;
  }

  toggleInventoryStockDetailVisibility(visible: boolean): void {
    this.isInventoryStockDetailVisible = visible;
  }

  togglePurchaseOrderDetailVisibility(visible: boolean): void {
    this.isPurchaseOrderDetailVisible = visible;
  }

  toggleRoutingDetailVisibility(visible: boolean): void {
    this.isRoutingDetailVisible = visible;
  }

  toggleVendorDetailVisibility(visible: boolean): void {
    this.isVendorDetailVisible = visible;
  }

  toggleWorkOrderDetailVisibility(visible: boolean): void {
    this.isWorkOrderDetailVisible = visible;
  }
}
