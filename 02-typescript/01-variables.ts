// 01-variables.ts

let nombre: string = 'Carlos';
let nombre2: String = 'Carlos2';
// nombre = 1;
nombre = 'Wilfrido';
let edad: number  = 32;
let casado: boolean = true;
let fecha: Date = new Date();
let sueldo: number;
sueldo = 12.4;
// Duck Typing
let apellido = 'Mantilla';
apellido = 'Carlos';
apellido.toUpperCase();

let marihuana: any = 2;
marihuana = '2';
marihuana = true;
marihuana = () => '2';

let edadMultiple: number | string | Date = 2;
edadMultiple = '2';
edadMultiple = 2222;
edadMultiple = 'dos';
edadMultiple = new Date();
//edadMultiple = true;