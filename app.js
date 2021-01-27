let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let domain =['.es','.com','.us','.net'];
let palabras = ['pued', 'hola', 'cam', 'car']
function generator(){
    
   var pronounAux = Math.floor(Math.random() * pronoun.length);
   var adjAux = Math.floor(Math.random() * adj.length);
   var nounAux = Math.floor(Math.random() * noun.length);
   var domainAux = Math.floor(Math.random() * domain.length);
//    console.log(pronounAux+" "+adjAux+" "+nounAux+" "+domainAux);
   var print = console.log(pronoun[pronounAux]+adj[adjAux]+noun[nounAux]+domain[domainAux]);
   return print;   
}


function generator1() {
    var todas = ["pued.es", "car.net", "cam.us","hola.com" ];
    var i 
    for (i =0; i<=3; i++) {
        if (palabras[i]+domain[i] == todas[i] );
         var print1 = console.log(palabras[i]+domain[i]);  
    }
  return print1;
}
generator();
generator1();