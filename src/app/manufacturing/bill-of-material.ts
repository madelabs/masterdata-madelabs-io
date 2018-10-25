import { InventoryItem } from '../inventory/inventory-items/inventory-item';

export class BillOfMaterial {
    constructor(
        public code: string,
        public componentId: number,
        public parentId: number,
        public quantity: number,

        public component: InventoryItem,
        public parent: InventoryItem) {
    }
}