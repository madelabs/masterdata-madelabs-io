import { RoutingStepListItem } from './routing-step-list-item';

export class RoutingDetail {
    public id: number;
    public code: string;
    public name: string;
    public description: string;
    public inventoryItem: string;
    public steps: RoutingStepListItem[];

    constructor() {        
    }
}