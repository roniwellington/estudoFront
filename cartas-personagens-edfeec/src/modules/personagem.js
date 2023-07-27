export class Personagem {
    nome
    vida
    mana
    level
    tipo
    descricao

    constructor(nome, level, tipo) {
        this.nome = nome;
        this.level = level;
        this.tipo = tipo;
    }

    obterInsignia() {
        if (this.level >= 5) {
            return `Implacavel ${this.tipo}`
        }
        return `${this.tipo} iniciante`
    }
}
