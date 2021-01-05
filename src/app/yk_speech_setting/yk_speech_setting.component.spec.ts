import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YkSpeechSettingComponent } from './yk_speech_setting.component';

describe('YkSpeechSettingComponent', () => {
  let component: YkSpeechSettingComponent;
  let fixture: ComponentFixture<YkSpeechSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YkSpeechSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YkSpeechSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
