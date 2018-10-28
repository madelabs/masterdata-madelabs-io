// Note: for simplicity, i've stopped using this model and just use a general
// InventoryItem class until it's proven I need to restrict fields.
export class CreateInventoryItem {
    public code: string; 
    public description: string;
    public height: number = null;
    public length: number = null;
    public name: string;
    public revision: string = null;
    public unitOfMeasureId: string = null;
    public weight: number = null;
    public width: number = null;

    constructor() {        
    }
    
}