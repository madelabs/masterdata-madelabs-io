import { AuditEntryListItem } from "../../common/audit-list/audit-entry-list-item";

export class InventoryItem {
    constructor(
        public id: string = null,
        public code: string = null, 
        public description: string = null,
        public height: number = null,
        public length: number = null,
        public name: string = null,
        public revision: string = null,
        public statusId: string = null,
        public unitOfMeasureId: string = null,
        public weight: number = null,
        public width: number = null,
        public activity: AuditEntryListItem[] = null,
        public isForSale: boolean = true,
        public isManufacturable: boolean = true,
        public allowBackorders: boolean = false) {
    }
}