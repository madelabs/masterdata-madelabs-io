import { Injectable } from '@angular/core';

import { WorkOrder } from './work-order';
import { WorkOrderDetail } from './work-order-detail/work-order-detail';
import { WorkOrderListItem } from './work-order-list/work-order-list-item';
import { WorkOrderStepListItem } from './work-order-detail/work-order-step-list-item';

@Injectable()
export class WorkOrderService {

  constructor() { }

  create(workOrder: WorkOrder): Promise<WorkOrder> {
    workOrder.id = 1;
    return Promise.resolve(workOrder);
  }

  getCollection(filter: any): Promise<WorkOrderListItem[]> {
    // todo: add data from filter
    var fakeWorkOrders: WorkOrderListItem[] = [
      new WorkOrderListItem(1, 'DaisyCutter', 300, 'Cans', 'In Progress', new Date()),
      new WorkOrderListItem(2, 'Vallejo', 150, 'Bottles', 'Open', new Date())
    ];
    return Promise.resolve(fakeWorkOrders);
  }

  getSingle(id: number): Promise<WorkOrderDetail> {
    var workOrder = new WorkOrderDetail();
    workOrder.billOfMaterial = 'DaisyCutter Recipe #2';
    workOrder.inventoryItem = 'DaisyCutter';
    workOrder.quantity = 300;
    workOrder.routing = 'DaisyCutter Process #2';
    workOrder.unitOfMeasure = 'Liters';

    workOrder.steps = [
      new WorkOrderStepListItem(3000, 35, 300, 'Mixing', 0, 'Complete'),
      new WorkOrderStepListItem(100, 2, 300, 'Transport', 0, 'Complete'),
      new WorkOrderStepListItem(1800, 12, 295, 'Heating', 5, 'Complete', 'Burned'),
      new WorkOrderStepListItem(700, 4, 295, 'Packaging', 0, 'In Progress'),
      new WorkOrderStepListItem(0, 0, 0, 'Aging', 0, 'To Do')
    ];
    
    return Promise.resolve(workOrder);
  }

  update(workOrder: WorkOrderDetail): Promise<WorkOrderDetail> {
    return Promise.resolve(workOrder);
  }
}
