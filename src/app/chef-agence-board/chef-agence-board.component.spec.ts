import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefAgenceBoardComponent } from './chef-agence-board.component';

describe('ChefAgenceBoardComponent', () => {
  let component: ChefAgenceBoardComponent;
  let fixture: ComponentFixture<ChefAgenceBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefAgenceBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefAgenceBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
