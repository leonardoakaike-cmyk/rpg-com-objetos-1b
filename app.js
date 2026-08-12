class Personagem {
    constructor(nome, vida, ataque) {
        this.nome = nome,
        this.vida = vida,
        this.ataque = ataque
    }

    causaDano(personagem) {
        personagem.recebeDano(this.ataque)
    }

    recebeDano(quantidade){
        this.vida = this.vida - quantidade

        if(this.vida <= 0){
            this.vida = "Morreu"
        }
    }
}

const druida = new Personagem ("Obin", 150, 15)
const guerreiro = new Personagem ("Thorin", 60, 20)
const arqueiro = new Personagem ("Legolas", 80, 25)
const mago = new Personagem ("Gandalfe", 60, 35)
const japones = new Personagem ("Leonardo", 2, 0.5)