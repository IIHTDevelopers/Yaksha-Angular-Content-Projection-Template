import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParentComponent } from './parent-component.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentComponent],
      imports: [FormsModule] // Importing FormsModule for two-way data binding
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should create the parent component', () => {
      expect(component).toBeTruthy();
    });

    it('should toggle footer visibility', () => {
      // Initially, footer should be visible
      expect(component.showFooterContent).toBe(true);

      // Simulate button click to toggle footer visibility
      let button = fixture.debugElement.query(By.css('button'));
      button.triggerEventHandler('click', null);
      fixture.detectChanges();

      // Footer should be hidden after toggle
      expect(component.showFooterContent).toBe(false);
      expect(button.nativeElement.textContent).toContain('Show Footer Content');
    });

    it('should update header content dynamically', () => {
      const input = fixture.debugElement.query(By.css('input'));
      input.nativeElement.value = 'Updated Header Content';
      input.triggerEventHandler('input', { target: input.nativeElement });
      fixture.detectChanges();

      expect(component.headerContent).toBe('Updated Header Content');
    });
  });
});
