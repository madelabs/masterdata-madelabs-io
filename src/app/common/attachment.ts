export class Attachment {
    constructor(
        public fileName: string,
        public fileSize: number,
        public thumbnailUrl: string = null,
        public url: string,
        public hash: string,
        public fileTypeId: number) {
    }
}