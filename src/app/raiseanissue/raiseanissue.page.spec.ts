import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RaiseanissuePage } from './raiseanissue.page';

describe('RaiseanissuePage', () => {
  let component: RaiseanissuePage;
  let fixture: ComponentFixture<RaiseanissuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaiseanissuePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RaiseanissuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
