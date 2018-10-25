import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorListItem } from '../vendor-list/vendor-list-item';

@Component({
  selector: 'app-vendors-page',
  templateUrl: './vendors-page.component.html',
  styleUrls: ['./vendors-page.component.css']
})
export class VendorsPageComponent implements OnInit {

  isCreateVisible: boolean = false;
  isDetailVisible: boolean = false;
  selectedItemId: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {  
        this.selectedItemId = params.id;
        this.isDetailVisible = true;
      }
    });
  }

  onItemSelected(item: VendorListItem): void {
    this.router.navigate(['/purchasing/vendors', item.id]);
  }
  
  toggleCreateVisibility(): void {
    this.isCreateVisible = !this.isCreateVisible;
  }

  toggleDetailVisibility(visible: boolean): void {
    this.isDetailVisible = visible;
  }
}
