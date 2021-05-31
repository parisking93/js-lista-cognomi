// Mail
//  1. Chiedi all’utente la sua email,
//  2.  controlla che sia nella lista di chi può accedere,
//  3.  stampa un messaggio appropriato sull’esito del controllo.

// creo lista con email 
var listaEmail = ['astrubale@icloud.com', 'gino@gmail.com', 'franc@gmail.com'];

// chiedo all'utente la sua email 
var email = prompt('dammi la tua email');

// controllo che l'email sia nella lista 
var check = 'hai sbagliato email riprova';
for (i = 0; i < listaEmail.length; i++){
    if (listaEmail[i] == email) {
        check = 'Bentornato ' + email;
    } 
}

// stampo un messaggio appropriato  sull'esito del controllo 
document.getElementById('controllo').innerHTML = check;


