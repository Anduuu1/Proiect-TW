const activitati = [
    { id: 1, titlu: "Atelier de React", gata: false, eticheta: "workshop" },
    { id: 2, titlu: "Hackathon CodeSprint", gata: true, eticheta: "hackathon" },
    { id: 3, titlu: "Seara de board games", gata: false, eticheta: "social" }
];

const TIPURI = ["workshop", "hackathon", "social"];

function listeazaTitluri(lista) {
    return lista.map((t) => t.titlu);
}


function numaraInDerulare(lista) {
    return lista.filter((t) => !t.gata).length;
}

function cautaDupaTitlu(lista, text) {
    const textCautat = text.toLowerCase();
    return lista.filter((t) => t.titlu.toLowerCase().includes(textCautat));
}

function nextId(lista) {
    return lista.reduce((max, t) => Math.max(max, t.id), 0) + 1;
}

function adaugaActivitate(lista, titlu, eticheta = "workshop") {
    const titluCurat = titlu ? titlu.trim() : "";
    

    if (!titluCurat) {
        console.log("Eroare: Titlul nu poate fi gol!");
        return lista;
    }
    

    if (!TIPURI.includes(eticheta)) {
        console.log(`Eroare: Tipul sau eticheta invalidă: ${eticheta}`);
        return lista;
    }
    

    const elementNou = {
        id: nextId(lista),
        titlu: titluCurat,
        gata: false,
        eticheta: eticheta
    };

    return [...lista, elementNou];
}


function comutaStare(lista, id) {
    return lista.map((t) => (t.id === id ? { ...t, gata: !t.gata } : t));
}

function stergeActivitate(lista, id) {
    return lista.filter((t) => t.id !== id);
}


console.log("--- Citire ---");
console.log("Titluri:", listeazaTitluri(activitati).join(", "));
console.log("În derulare:", numaraInDerulare(activitati));
console.log("Căutare 'atelier':", listeazaTitluri(cautaDupaTitlu(activitati, "atelier")).join(", "));

console.log("--- Adăugare ---");
let listaNoua = adaugaActivitate(activitati, "Mergem la munte", "social");
console.log("Lista nouă:", listaNoua.length, "activități");
console.log("Originalul a rămas cu:", activitati.length, "activități");

console.log("--- Modificare și ștergere ---");
listaNoua = comutaStare(listaNoua, 1);
console.log("După bifarea id 1, în derulare:", numaraInDerulare(listaNoua));

listaNoua = stergeActivitate(listaNoua, 3);
console.log("După ștergerea id 3:", listeazaTitluri(listaNoua).join(", "));

console.log("--- Validare ---");
adaugaActivitate(listaNoua, "");
adaugaActivitate(listaNoua, "Test eroare", "invalid");