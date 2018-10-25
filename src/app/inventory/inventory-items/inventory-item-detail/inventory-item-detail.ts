import { AuditEntryListItem } from '../../../common/audit-list/audit-entry-list-item';

export class InventoryItemDetail {
    constructor(
        public id: string,
        public code: string, 
        public description: string,
        public height: number = null,
        public length: number = null,
        public name: string,
        public revision: string = null,
        public status: string,
        public unitOfMeasure: string = null,
        public weight: number = null,
        public width: number = null,
        public activity: AuditEntryListItem[] = null,
        public isForSale: boolean = true
    ) {
    }
    
}