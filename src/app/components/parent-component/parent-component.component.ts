import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponent {
  title = '';
  showFooterContent = false;
  headerContent = '';
  footerContent = '';
  toggleText = '';

  // Toggle footer content visibility
  toggleFooter() {
  }

  // Update header content dynamically
  updateHeaderContent(content: string) {
  }

  // Handle data passed from child component
  handleChildEvent(data: string) {
  }
}
