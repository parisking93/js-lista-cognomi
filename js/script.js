// Mail
//  1. Chiedi all’utente la sua email,
//  2.  controlla che sia nella lista di chi può accedere,
//  3.  stampa un messaggio appropriato sull’esito del controllo.

// creo lista con email 
var listaEmail = ['astrubale@icloud.com', 'gino@gmail.com', 'franc@gmail.com'];
var check = 'hai sbagliato email riprova';
var continua = true;
var ingressi = false;


// chiedo all'utente la sua email 
var email = prompt('dammi la tua email');

while (continua == true) {
    // controllo che l'email sia nella lista 
    for (i = 0; i < listaEmail.length; i++){
        if (listaEmail[i] == email && ingressi == false) {
            check = 'Bentornato ' + email;
            continua = false;
        } else if (listaEmail[i] == email && ingressi == true){ 
            check = 'Benvenuto ' + email;
            continua = false;
        }
    }
    if (continua == true) {
        var riprova = prompt('La tua email non è corretta......vuoi riprovare ??  ((si per riprovare)) o vuoi registrarti??? ((r per registarsi))');

        if (riprova == 'si') {
            email = prompt('ridammi la tua email');
        } else if(riprova == 'r'){
            listaEmail.push(email);
            email = prompt('Registrazione andata a buon fine! Inserisci la  tue email')
            ingressi = true;
        }
        else {
            continua = false
        } 
    }
    
}



// stampo un messaggio appropriato  sull'esito del controllo 



// Lista Cognomi:
// chiedi all’utente il cognome
// inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova


// creo una lista con dei cognomi 
var listaCognomi = ['Neri','Verdi','Gialli','Bianchi','Rossi'];

// chiedo all'utente un cognome 
var cognome = prompt('dammi il tuo cognome');
// traformo la prima lettera dell'input in uppercase
cognome = cognome.charAt(0).toUpperCase() + cognome.slice(1);
// inserisco il cognome nella lista 
listaCognomi.push(cognome);

//ordino alfabeticamente la lista
listaCognomi = listaCognomi.sort();

// stampo la lista 
var pos

for(i = 0; i < listaCognomi.length; i++){
    document.getElementById('surname').innerHTML += listaCognomi[i] + '<br>';

    if (listaCognomi[i] == cognome){
        pos = i + 1
    }
}
document.getElementById('controllo').innerHTML = check;
document.getElementById('posizione').innerHTML = 'ti trovi nella posizione ' + pos + ' della lista';



