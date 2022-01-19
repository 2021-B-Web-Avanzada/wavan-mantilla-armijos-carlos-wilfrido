import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-imagen',
  templateUrl: './post-imagen.component.html',
  styleUrls: ['./post-imagen.component.scss']
})
export class PostImagenComponent implements OnInit {

  @Input()
  url = 'https://google.com'

  @Input()
  descripcion = ''

  @Input()
  ancho = 600;

  constructor() { }

  ngOnInit(): void {
  }

}
