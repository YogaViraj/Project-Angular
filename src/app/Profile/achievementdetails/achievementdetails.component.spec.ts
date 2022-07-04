import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementdetailsComponent } from './achievementdetails.component';

describe('AchievementdetailsComponent', () => {
  let component: AchievementdetailsComponent;
  let fixture: ComponentFixture<AchievementdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchievementdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
