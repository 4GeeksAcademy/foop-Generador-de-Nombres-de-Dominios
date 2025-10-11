console.log("Iniciando el generador de nombres de dominio...");

// --- Palabras para generar los dominios ---
const pronouns = ['the', 'our', 'a', 'my'];
const adjs = ['great', 'big', 'awesome', 'cool'];
// Sustantivos para los "hacks"
const nouns = ['jogger', 'racoon', 'puedes', 'coder', 'crusade']; 
const extensions = ['.com', '.net', '.us', '.io', '.es', '.er', '.de'];

console.log("\n--- LISTA DE DOMINIOS ESTÁNDAR ---\n");

for (const pronoun of pronouns) {
    for (const adj of adjs) {
        for (const noun of nouns) {
            // Combinación para la extensión.
            for (const ext of extensions) {
                // Se concatenan las palabras y la extensión
                console.log(pronoun + adj + noun + ext);
            }
        }
    }
}

console.log("\n--- LISTA DE DOMAIN HACKS ---\n");

for (const pronoun of pronouns) {
    for (const adj of adjs) {
        for (const noun of nouns) {
            for (const ext of extensions) {
                // Eliminar punto de la extensión 
                const cleanExt = ext.substring(1);
                
                // Se comprueba la extensión
                if (noun.endsWith(cleanExt)) {
                    // Si coincide recorta el final del sustantivo
                    const nounBase = noun.slice(0, noun.length - cleanExt.length);
                    
                    // Se crea el "domain hack"
                    console.log(pronoun + adj + nounBase + ext);
                }
            }
        }
    }
}

console.log("\nProceso finalizado.");
