class Produto {
    constructor(nomeProduto, preco) {
        this.nome = nomeProduto;
        this.preco = preco;
        this.estoque = 10;
    }

    vender() {
        if (this.estoque >= 1) {
            this.estoque = this.estoque - 1;

            alert(
                "Você comprou: " + this.nome +
                "\nPreço: R$ " + this.preco.toFixed(2) +
                "\nRestam " + this.estoque + " unidade(s)."
            );
            
        }

        else {
            "Você comprou: " + this.nome +
                "\nPreço: R$ " + this.preco.toFixed(2) +
                "\nAcabou todas e resta  " + this.estoque + " unidade."
        }
    }
}

const coxinha = new Produto("Coxinha", 7.00);
const bolo = new Produto("Bolo de festa (fatia)", 9.00);
const fanta = new Produto("Fanta laranja (lata)", 5.00);

function comprarCoxinha() {
    coxinha.vender();

    document.getElementById("estoqueCoxinha").textContent =
        coxinha.estoque;
}

function comprarBolo() {
    bolo.vender();

    document.getElementById("estoqueBolo").textContent =
        bolo.estoque;
}

function comprarFanta() {
    fanta.vender();

    document.getElementById("estoqueFanta").textContent =
        fanta.estoque;
}
