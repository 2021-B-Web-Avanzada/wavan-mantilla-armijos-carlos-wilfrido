import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostImagenComponent } from './post-imagen.component';

describe('PostImagenComponent', () => {
  let component: PostImagenComponent;
  let fixture: ComponentFixture<PostImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostImagenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
