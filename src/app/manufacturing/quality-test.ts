import { Attachment } from '../common/attachment';

export class QualityTest {
    constructor(
        public name: string,
        public description: string,
        public expectedResult: any,
        public instructions: string,
        
        public attachments: Attachment[]) {
    }
}