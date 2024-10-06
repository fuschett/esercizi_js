function stampa2(){
    let j=0;
    while(j<input){
        j++;
        let input2 = (prompt("scrivi esci se vuoi uscire " + j));
        if(input2=="esci"){
            break;
        }
    }
}
stampa2();