class Atendimento {
    #Nome;
    #CPF;
    #Data;
    #Hora;

    constructor(Nome, Cpf, data, hora) {
        this.#Nome = Nome;
        this.#CPF = Cpf;
        this.#Data = data;
        this.#Hora = hora;
    }

    get nome() {
        return this.#Nome;
    }

    get cpf() {
        return this.#CPF;
    }

    get data() {
        return this.#Data;
    }

    get hora() {
        return this.#Hora;
    }

    set nome(nome) {
        this.#Nome = nome;
    }
    set cpf(cpf) {
        this.#CPF = cpf;
    }
    set data(data) {
        this.#Data = data;
    }
    set hora(hora) {
        this.#Hora = hora;
    }
    toString() {
        return (
            this.#Nome + " | " + this.#CPF + " | " + this.#Data + " | " + this.#Hora
        );

    }

}