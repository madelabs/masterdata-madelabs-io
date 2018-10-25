import { AppUser } from '../../common/app-user';
import { QualityTestResult } from '../../manufacturing/quality-test-result';
import { LoggedWork } from '../../manufacturing/logged-work';
import { RoutingStep } from '../../manufacturing/routing-step';
import { ScrapReason } from '../../manufacturing/scrap-reason';
import { WorkOrderStepStatus } from './../work-order-step-status';

export class WorkOrderStepListItem {
    constructor(
        public actualCost: number,
        public actualLaborHours: number,
        public completedQuantity: number,
        public name: string,
        public scrapQuantity: number,
        public status: string,
        public scrapReason: string = null,) {
    }
}