import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBinaryAngularUiComponent } from './ngx-binary-angular-ui.component';

describe('NgxBinaryAngularUiComponent', () => {
  let component: NgxBinaryAngularUiComponent;
  let fixture: ComponentFixture<NgxBinaryAngularUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxBinaryAngularUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxBinaryAngularUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
