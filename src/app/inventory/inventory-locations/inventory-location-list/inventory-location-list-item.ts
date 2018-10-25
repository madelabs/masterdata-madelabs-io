export class InventoryLocationListItem {
    constructor(
        public id: number,
        public name: string,
        public status: string,
        public subLocations: InventoryLocationListItem[] = null
    ) {
    }
}