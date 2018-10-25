import { WorkOrderStepListItem } from './work-order-step-list-item';

export class WorkOrderDetail {
    public inventoryItem: string;
    public quantity: number;
    public routing: string;
    public billOfMaterial: string;
    public unitOfMeasure: string;
    public steps: WorkOrderStepListItem[];

    constructor() {
    }
}