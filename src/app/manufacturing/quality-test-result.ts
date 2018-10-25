import { QualityTest } from './quality-test';

export class QualityTestResult {
    constructor(
        public isPassed: boolean,
        public notes: string = null,
        public qualityTestId: number,
        public result: any,
        
        public qualityTest: QualityTest) {
    }
}