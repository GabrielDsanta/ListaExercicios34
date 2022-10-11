


//Exercicio 01//

// let PerguntaA = String(prompt("Digite a primeira palavra"))
// let PerguntaB = String(prompt("Digite a segunda palavra"))

// VerificarFinalStrings(PerguntaA, PerguntaB)

// function VerificarFinalStrings(PerguntaA: string, PerguntaB: string){
//     let TresUltimasLetrasA = PerguntaA.substring(PerguntaA.length - 3)
//     let TresUltimasLetrasB = PerguntaB.substring(PerguntaA.length - 3)
    
//     const Resultado = (TresUltimasLetrasB == TresUltimasLetrasA) ? true : false
    
//     alert(Resultado)
// }








//Exercicio 02//

// let PerguntaA = String(prompt("Digite uma palavra"))

// StringEmParenteses(PerguntaA)


// function StringEmParenteses(PerguntaA: string){
    // PerguntaA = PerguntaA.toLocaleLowerCase()
//     let ListaDeLetras = PerguntaA.split("")
//     let ListaSubstituida = PerguntaA.split("")

//     for (let i = 0; i < ListaDeLetras.length; i++){
//         if(ListaDeLetras.includes(PerguntaA[i], (i + 1))){
//             ListaSubstituida.splice(i, 1 , ")")
//             ListaSubstituida.splice(ListaSubstituida.indexOf(PerguntaA[i]), 1, ")")
//         }
//     }

//     ListaSubstituida.forEach(SubstituirLetrasRestantes)

//     function SubstituirLetrasRestantes(item: string, index:number){
//         if(item != ")"){
//             ListaSubstituida[index] = "("
//         }
//     }

//     console.log(ListaSubstituida.join(""))
// }





//Exercicio 03//

// let Numero = Number(prompt("Digite um número"))
// let Digito = String(prompt("Digite um digito"))

// CalcularQuadrado(Numero, Digito)




// function CalcularQuadrado(numero: number, digito: string){
//     let NumerosAoQuadrado: number[] = []
//     let Contador = 0

//     for (let index = 0; index <= Numero; index++) {
//         NumerosAoQuadrado.push(index * index)
//     }

//     let NumerosString = NumerosAoQuadrado.join("")

//     for (let index = 0; index <= NumerosString.length; index++){
//         if(NumerosString.charAt(index) == digito){
//             Contador++
//         }
//     }

//     alert(Contador)
// }
