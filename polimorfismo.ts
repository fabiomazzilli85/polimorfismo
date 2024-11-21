// Superclasse
class Animale {
    emettiSuono(): void {
        console.log("L'animale emette un suono");
    }
}

// Sottoclasse Cane
class Cane extends Animale {
    emettiSuono(): void {
        console.log("Il cane abbaia");
    }
}

// Sottoclasse Gatto
class Gatto extends Animale {
    emettiSuono(): void {
        console.log("Il gatto miagola");
    }
}

const mioCane: Animale = new Cane();
const mioGatto: Animale = new Gatto();

mioCane.emettiSuono(); // Output: Il cane abbaia
mioGatto.emettiSuono(); // Output: Il gatto miagola

// Superclasse
class Veicolo {
    accellera(): void {
        console.log("Il veicolo accellera");
    }
}

// Sottoclasse Automobile
class Automobile extends Veicolo {
    accellera(): void {
        console.log("L'automobile accellera");
    }
}

// Sottoclasse Moto
class Moto extends Veicolo {
    accellera(): void {
        console.log("La moto accellera");
    }
}

const miaAutomobile: Veicolo = new Automobile();
const miaMoto: Veicolo = new Moto();