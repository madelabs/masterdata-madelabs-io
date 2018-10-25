export class DomainModel {
    constructor(
        public id: number,
        public obfuscatedId: string,
        public isActive: boolean,
        public created: Date,
        public modified: Date = null) {
    }
}