import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespDetailsComponent } from './resp-details.component';

describe('RespDetailsComponent', () => {
  let component: RespDetailsComponent;
  let fixture: ComponentFixture<RespDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
