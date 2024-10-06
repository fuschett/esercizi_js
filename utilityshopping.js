
function primo_input(lista) {
    
    let input = prompt("inserisci un prodotto");
    console.log(input);
    lista.push(input);
    console.log(lista);

    alert("prodotto aggiunto alla lista");


}

function secondo_input(lista) {
    let input2 = "";
    while (true) {
        do {
            input2 = prompt("vuoi aggiungere altri prodotti?");
        }while (input2 != 'si' && input2 != 'SI' && input2 != 'no' && input2 != 'NO') ;

        if (input2 == 'si' || input2 == 'SI') {
            primo_input(lista);
        }
        else {
            for (let i = 0; i < lista.length; i++) {
                console.log(lista[i]);
        
            }
            break;
        }
    }
    
}