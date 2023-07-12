// function superFunzione(){
//     console.log('sto eseguendo il codice dentro il timeout');
// }

// const pippo = 1;

// const pluto = 2;

// // setTimeout(superFunzione, 5000);

// setTimeout(() => {
//     console.log('sto eseguendo il codice dentro il timeout');
// }, 5000);

// const paperino = pippo + pluto;

// const topolino = 'javascript'

// console.log(topolino + paperino);

// setInterval(() => {
//     console.log('sto eseguendo il codice dentro l\'interval');
// }, 2000);

// function gestisciRisposta(resp){
//     //return resp.text();
//     console.log('response', resp);
//     return resp.json();
// }

// function gestisciRisultatoFinale(res){
//     //const dittoObj = JSON.parse(res);
//     // console.log(dittoObj);
//     console.log(res);
// }

// function gestisciEmergenza(error){
//     console.log(error.message)
// }


// fetch('https://google00000000000000.it')
// .then(gestisciRisposta)
// .then(gestisciRisultatoFinale)
// .catch(gestisciEmergenza);


// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// .then((resp) => resp.json())
// .then((res) => res.abilities)
// .then((ab) => console.log(ab))
// .catch((error) => console.log(error.message));

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState === 4) {
    if (this.status === 200) {
        console.log(this.responseText)
        const ditto = JSON.parse(this.responseText);
        console.log(ditto);
    } else{
        console.log('errore')
    }
  }
};
xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto", true);
xhttp.send();


document.getElementById('ciccio').content = 'ciao bella!';
document.getElementById('ciccio').render();