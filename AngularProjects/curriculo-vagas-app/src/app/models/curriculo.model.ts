export class Curriculo{
    id: number = 0;
    nome: string = '';
    idade: number = 0;
    experiencia: string = '';
    sexo: string = '';
    ensino_medio: string = '';
    constructor(
        id: number,
        nome: string,
        idade: number,
        experiencia: string,
        sexo: string,
        ensino_medio: string
    ){
       this.id = id;
       this.nome = nome;
       this.idade = idade;
       this.experiencia = experiencia;
       this.sexo = sexo;
       this.ensino_medio = ensino_medio;
    }
}