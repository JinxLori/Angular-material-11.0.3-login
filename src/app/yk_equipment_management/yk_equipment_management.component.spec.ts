import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YkEquipmentManagementComponent } from './yk_equipment_management.component';

describe('YkEquipmentManagementComponent', () => {
  let component: YkEquipmentManagementComponent;
  let fixture: ComponentFixture<YkEquipmentManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YkEquipmentManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YkEquipmentManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
