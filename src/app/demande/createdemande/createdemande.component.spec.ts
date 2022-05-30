import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedemandeComponent } from './createdemande.component';

describe('CreatedemandeComponent', () => {
  let component: CreatedemandeComponent;
  let fixture: ComponentFixture<CreatedemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
