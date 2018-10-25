export class AuditEntryListItem {
    constructor(
        public title: string,
        public message: string,
        public created: Date,
        public username: string,
        public firstName: string,
        public lastName: string
    ) {
    }
}