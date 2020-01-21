import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PayrentPage } from './payrent.page';

describe('PayrentPage', () => {
  let component: PayrentPage;
  let fixture: ComponentFixture<PayrentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PayrentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
