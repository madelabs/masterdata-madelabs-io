import { AppUser } from '../common/app-user';
import { QualityTestResult } from '../manufacturing/quality-test-result';
import { LoggedWork } from '../manufacturing/logged-work';
import { RoutingStep } from '../manufacturing/routing-step';
import { ScrapReason } from '../manufacturing/scrap-reason';
import { WorkOrderStepStatus } from './work-order-step-status';
import { WorkOrder } from './work-order';

export class WorkOrderStep {
    constructor(
        public actualCost: number,
        public actualLaborHours: number,
        public completedQuantity: number,
        public description: string,
        public estimatedCost: number,
        public estimatedLaborHours: number,
        public name: string,
        public routingStepId: number,
        public scrapQuantity: number,
        public scrapReasonId: number = null,
        public statusId: number,
        public workOrderId: number,
        
        public assignedUsers: AppUser[],
        public loggedWork: LoggedWork[],
        public qualityTestResults: QualityTestResult[],
        public routingStep: RoutingStep,
        public scrapReason: ScrapReason = null,
        public status: WorkOrderStepStatus,
        public workOrder: WorkOrder) {
    }
}