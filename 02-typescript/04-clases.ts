// 04-clases.ts
class Persona{
    public nombre:string;
    public apellido:string
    static nombreReferencial:string = 'Humano';
    protected  nombreYApellido = ''; //Duck Typing -> string
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
    ) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = nombreParametro + ' ' + apellidoParametro;
    }
    private mostrarNombreApellido():string{
        return this.nombreYApellido;
    }
}

class Usuario extends Persona{
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
        public cedula: string,  //Modificador acceso -> Propiedad de la clase
        public estadoCivil: string  //Modificador acceso -> Propiedad de la clase
    ) {
        super(nombreParametro, apellidoParametro);
    }
}
const carlos = new Usuario(
    'Carlos',
    'Mantilla',
    '1720195393',
    'casado'
);
carlos.nombre;
carlos.apellido;
carlos.cedula;
carlos.estadoCivil;