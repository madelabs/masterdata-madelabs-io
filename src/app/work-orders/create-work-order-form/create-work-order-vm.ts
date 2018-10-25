export class CreateWorkOrderVm {
    constructor(
        public inventoryItemId: string = '',
        public quantity: number = 1,
        public routingId: string = '') {
    }
}