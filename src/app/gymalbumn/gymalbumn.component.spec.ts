import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymalbumnComponent } from './gymalbumn.component';

describe('GymalbumnComponent', () => {
  let component: GymalbumnComponent;
  let fixture: ComponentFixture<GymalbumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymalbumnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GymalbumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
