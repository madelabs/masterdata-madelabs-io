import { Injectable } from '@angular/core';
import { InventoryItem } from '../inventory/inventory-items/inventory-item';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  public activeInventoryItem = new BehaviorSubject<InventoryItem>(null);

  public isInventoryItemCreateVisible = new Subject<boolean>();
  public isInventoryItemDetailVisible = new Subject<boolean>();
  public isInventoryItemEditVisible = new Subject<boolean>();
  public isInventoryItemImportVisible = new Subject<boolean>();
}
