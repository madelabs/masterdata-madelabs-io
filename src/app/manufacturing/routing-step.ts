import { QualityTest } from './quality-test';
import { Routing } from './routing';
import { Skill } from '../skill';

export class RoutingStep {
    constructor(
        public description: string,
        public name: string,
        public alternativeStepId: number,
        public routingId: number,

        public alternativeStep: RoutingStep,
        public requiredSkills: Skill[],
        public requiredQualityTests: QualityTest[],
        public routing: Routing) {
    }
}