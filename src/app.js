document.addEventListener('DOMContentLoaded', function () {
    // --- Palabras para generar los dominios ---
    const pronouns = ['the', 'our', 'a', 'my'];
    const adjs = ['great', 'big', 'awesome', 'cool'];
    const nouns = ['jogger', 'racoon', 'puedes', 'coder', 'crusade'];
    const extensions = ['.com', '.net', '.us', '.io', '.es', '.er', '.de'];

    // --- Elementos del DOM ---
    // Botones
    const standardBtn = document.getElementById('generateStandard');
    const hackBtn = document.getElementById('acceptHackButton');
    
    // Áreas de resultado y listas
    const standardOutput = document.getElementById('standard-output');
    const standardList = document.getElementById('standard-list');
    const hackOutput = document.getElementById('hack-output');
    const hackList = document.getElementById('hack-list');

    // Elementos del Modal
    const confirmCheckbox = document.getElementById('confirmCheckbox');
    const hackModalEl = document.getElementById('hackModal');



    // Boton checkbox "Aceptar" 

    confirmCheckbox.addEventListener('change', function() {
        hackBtn.disabled = !this.checked;
    });

    // Evento para el botón de generar dominios estándar.
        standardBtn.addEventListener('click', () => {
        // Limpia cualquier resultado anterior
        standardList.innerHTML = ''; 
        
        // Oculta la otra tabla
        hackOutput.style.display = 'none'; 
        
        // Muestra resultados
        standardOutput.style.display = 'block';

        // generardor Dominios Estándar
        for (const pronoun of pronouns) {
            for (const adj of adjs) {
                for (const noun of nouns) {
                    for (const ext of extensions) {
                        const domain = pronoun + adj + noun + ext;
                        const li = document.createElement('li');
                        li.textContent = domain;
                        standardList.appendChild(li);
                    }
                }
            }
        }
    });

    // Evento para el botón de generar "domain hacks"
    hackBtn.addEventListener('click', () => {
        // Limpia cualquier resultado anterior
        hackList.innerHTML = '';
        
        // Oculta la otra tabla
        standardOutput.style.display = 'none';
        
        // Muestra el área de resultados correcta
        hackOutput.style.display = 'block';

        // Bucle para generar y mostrar los "domain hacks"
        for (const pronoun of pronouns) {
            for (const adj of adjs) {
                for (const noun of nouns) {
                    for (const ext of extensions) {
                        const cleanExt = ext.substring(1);
                        if (noun.endsWith(cleanExt)) {
                            const nounBase = noun.slice(0, noun.length - cleanExt.length);
                            const domainHack = pronoun + adj + nounBase + ext;
                            const li = document.createElement('li');
                            li.textContent = domainHack;
                            hackList.appendChild(li);
                        }
                    }
                }
            }
        }
        
        // Cierra el cuadro 
        const modal = bootstrap.Modal.getInstance(hackModalEl);
        modal.hide();
    });

    // Resetea  al cancelar o cerrar.
    hackModalEl.addEventListener('hidden.bs.modal', function () {
        confirmCheckbox.checked = false;
        hackBtn.disabled = true;
    });
});