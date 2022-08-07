import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyComponetComponent } from './any-componet.component';

describe('AnyComponetComponent', () => {
  let component: AnyComponetComponent;
  let fixture: ComponentFixture<AnyComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnyComponetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnyComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
