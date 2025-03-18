import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildComponent } from './child-component.component';
import { By } from '@angular/platform-browser';
import { EventEmitter } from '@angular/core';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should create the child component', () => {
      expect(component).toBeTruthy();
    });

    it('should emit event when button is clicked', () => {
      jest.spyOn(component.childEvent, 'emit'); // Spying on the event emitter

      let button = fixture.debugElement.query(By.css('button'));
      button.triggerEventHandler('click', null);
      fixture.detectChanges();

      expect(component.childEvent.emit).toHaveBeenCalledWith('Hello from the Child Component!');
    });
  });
});
