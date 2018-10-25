export class VendorListItem {
    constructor(
        public id: number,
        public classification: string,
        public name: string,
        public status: string = 'Active',
        public created: Date = null,
        public lastUpdated: Date = null
    ) {
    }
}