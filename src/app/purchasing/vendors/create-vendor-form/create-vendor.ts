export class CreateVendor {
    constructor(
        public name: string = null,
        public notes: string = null,
        public rating: number = null,
        public status: string = 'Active'
    ) {        
    }
}