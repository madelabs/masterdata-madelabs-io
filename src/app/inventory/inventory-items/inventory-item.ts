export class InventoryItem {
    constructor(
        public code: string = null, 
        public description: string = null,
        public height: number = null,
        public length: number = null,
        public name: string = null,
        public revision: string = null,
        public statusId: string = null,
        public unitOfMeasureId: string = null,
        public weight: number = null,
        public width: number = null) {
    }
}