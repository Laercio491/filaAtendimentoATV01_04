class Atendimento {
    #Nome;
    #CPF;
    #DTAtendimento;
    #HRAtendimento;

    constructor(Nome, Cpf, dtAten, hrAten) {
        this.#Nome = Nome;
        this.#CPF = Cpf;
        this.#DTAtendimento = dtAten;
        this.#HRAtendimento = hrAten;
    }

    getNome() {
        return this.#Nome;
    }

    getCPF() {
        return this.#CPF;
    }

    getData() {
        return this.#DTAtendimento;
    }

    getHora() {
        return this.#HRAtendimento;
    }
}