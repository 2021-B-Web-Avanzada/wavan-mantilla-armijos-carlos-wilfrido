import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-inicio',
  templateUrl: './ruta-inicio.component.html',
  styleUrls: ['./ruta-inicio.component.scss']
})
export class RutaInicioComponent implements OnInit {

  arregloPost = [
    {
      id:1,
      descr: 'GOD OF WAR PARA PC EN ESPAÑOL',
      img: 'https://pivigames.blog/wp-content/uploads/2022/01/God-of-War-Juego-PC-PiviGames-576x350.jpg'
    },
    {
      id:2,
      descr: 'FINAL F VII REMAKE INTERGR4DE PC ESPAÑOL + Update 1.001',
      img: 'https://pivigames.blog/wp-content/uploads/2021/12/Final-Fantasy-VII-Remake-Intergrade-PiviGames-576x356.jpg'
    },
    {
      id:3,
      descr: 'PHASMOPHOBIA PC ESPAÑOL v0.5.1.1 + ONLINE STEAM v5',
      img: 'https://pivigames.blog/wp-content/uploads/2021/12/Phasmophobia-Ultima-Version-PiviGames-576x350.jpg'
    },
    {
      id:4,
      descr: 'INTERNET CAFE SIMULATOR 2 PC ESPAÑOL',
      img: 'https://pivigames.blog/wp-content/uploads/2022/01/Internet-Cafe-Simulator-2-PiviGames-576x356.jpg'
    },
    {
      id:5,
      descr: 'MONSTER HUNTER RISE [Oferta -33%]',
      img: 'https://pivigames.blog/wp-content/uploads/2022/01/Monstar-Hunter-Rise-PiviGames-576x353.jpg'
    },
    {
      id:6,
      descr: 'DEEP ROCK GALACTIC PC ESPAÑOL v14.01.22 + ONLINE STEAM v2',
      img: 'https://pivigames.blog/wp-content/uploads/2018/12/Descargar-Deep-Rock-Galactic-PC-Espa%C3%B1ol-PiviGames-min-576x350.jpg'
    },
    {
      id:7,
      descr: 'FARM TOGETHER PC ESPAÑOL CHIKPEA+ ONLINE STEAM v2',
      img: 'https://pivigames.blog/wp-content/uploads/2019/07/Descargar-Farm-together-PC-Espa%C3%B1ol-Gratis-576x356.jpg'
    },
    {
      id:8,
      descr: 'RUINED KING A League of Legends Story PC ESPAÑOL + Update 59081',
      img: 'https://pivigames.blog/wp-content/uploads/2021/11/Ruined-King-A-League-of-Legends-Story-PiviGames-576x356.jpg'
    },
    {
      id:9,
      descr: 'THE ELDER SCROLLS V SKYRIM ANNIVERSARY UPGRADE + Update v1.6.353',
      img: 'https://pivigames.blog/wp-content/uploads/2020/11/Skyrim-Anniversary-Edition-PC-PiviGames-576x353.jpg'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
