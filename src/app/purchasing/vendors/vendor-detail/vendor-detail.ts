import { AuditEntryListItem } from '../../../common/audit-list/audit-entry-list-item';

export class VendorDetail {
    constructor(
        public id: string,
        public name: string, 
        public notes: string,
        public status: string,
        public activity: AuditEntryListItem[] = null
    ) {
    }    
}