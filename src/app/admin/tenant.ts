export class Tenant {
    constructor(
        public id: string,
        public name: string,
        public address: string,
        public phone: string,
        public created: string,
        public lastUpdated: string
    ) {
    }
}