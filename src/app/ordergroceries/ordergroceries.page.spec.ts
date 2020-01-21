import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrdergroceriesPage } from './ordergroceries.page';

describe('OrdergroceriesPage', () => {
  let component: OrdergroceriesPage;
  let fixture: ComponentFixture<OrdergroceriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdergroceriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrdergroceriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
