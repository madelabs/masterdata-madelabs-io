import { Injectable } from '@angular/core';
import { InventoryItem } from '../inventory/inventory-items/inventory-item';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  public activeInventoryItem = new Subject<InventoryItem>();

  public isInventoryItemCreateVisible = new Subject<boolean>();
  public isInventoryItemDetailVisible = new Subject<boolean>();
  public isInventoryItemImportVisible = new Subject<boolean>();
}
