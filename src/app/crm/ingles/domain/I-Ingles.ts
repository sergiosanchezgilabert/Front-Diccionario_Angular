export interface Ingles {
    id:                     number;
    palabra:                string;
    palabraEspanol:         string;
    fechaAlta:              Date;
    fechaModificacion:      Date;
    espanolSimpleOutputDto: EspanolSimpleOutputDto;
}

export interface EspanolSimpleOutputDto {
    id:                number;
    palabra:           string;
    descripcion:       string;
    fechaAlta:         Date;
    fechaModificacion: Date;
}