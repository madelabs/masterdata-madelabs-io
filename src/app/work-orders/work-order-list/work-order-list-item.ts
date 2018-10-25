export class WorkOrderListItem {
    constructor(
        public id: number,
        public inventoryItem: string,
        public quantity: number,
        public unitOfMeasure: string,
        public status: string,
        public dueDate: Date) {
    }
}