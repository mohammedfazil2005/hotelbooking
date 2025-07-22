import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHotelsComponent } from './header-hotels.component';

describe('HeaderHotelsComponent', () => {
  let component: HeaderHotelsComponent;
  let fixture: ComponentFixture<HeaderHotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderHotelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
