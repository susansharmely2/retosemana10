/*1. Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla.*/

/**
const value1=20;
const value2=10;

let result;
result=value1 + value2;
console.log(result)
 **/

/*  
function suma(value1,value2){ 
let result=value1+value2;
return result;

}
console.log(suma(17,10)); 

 */

/*2. Verificar si un número es par o impar. */

/*
const value=10;
if (value%2===0)
{
    console.log(`es par`)
}else{
    console.log(`es impar`)
} 
    */

/*3. Calcular el mayor de tres números.*/
/*
const num1=10;
const num2=55;
const num3=133;
let mayor;
let temporal;

if(num1>num2 )
{
    temporal=num1;
}else
{
    temporal=num2;
}

if(temporal>num3){
    mayor=temporal;
}else
{
   mayor=num3;
}
console.log(`el mayor es: ${mayor}`)
*/

/*function mayor(num1,num2,num3){
    if(num1>num2  && num1>num3){
        console.log(`el mayor es: ${num1}`)
    }else if(num2>num1  && num2>num3){
        console.log(`el mayor es: ${num2}`)

    }else{
        console.log(`el mayor es: ${num3}`)
    }

}
mayor(10,20,30) */



/*4.Un estudiante realiza 4 exámenes, calcular el promedio de estos. */

   /*
   const nota1=10;
   const nota2=20;
   const nota3=10;
   const nota4=10;

   let promedio=(nota1+nota2+nota3+nota4)/4;
   console.log(promedio) 
   */

   /*function promedio(nota1,nota2,nota3,nota4){
    let prome=(nota1+nota2+nota3+nota4)/4;
    return prome;

   }
   console.log(promedio(10,10,20,20));

*/
   /*5. Calcular el área de un rectángulo.*/
   /*
   const base=10;
   const altura=10;
   let area=base*altura;
   console.log(area)
   */

   /*
   function area(base,altura){
    let result=base*altura
    return result
   }
   console.log(area(10,20));
   
   */

  /*6. Calcular el área de un triángulo.*/
   /*
   const base=10;
   const altura=15;

   let area=(base*altura)/2;
   console.log(area)
   */
/*
function area(base,altura){
    let result=(base*altura)/2;
    return result;
}
console.log(area(10,20))
 */


/*7. Calcular el área de una circunferencia. (π = 3.14) */
/*
const radio=10;
let area=3.14*radio*radio;
console.log(area)
*/
/*
function area(radio){
    let result=3.14*(radio*radio);
    return result;
}
 console.log(area(10));
 */


/*8. Crea un programa que al ingresar un número diga si es positivo, negativo o cero. */

/*function description(numero){
    if(numero===0 )
    {
        console.log(`es cero`)
    } else if(numero > 0){
        console.log(`es positivo`)
    }else{
        console.log(`es negativo`)
    }


}
description(-10);
*/

/*9. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.  */

/* function consultar(num1,num2)
{
    if(num1===num2)
    {
        console.log(`terminar sesion`)
    }
    else if(num1>num2){
    console.log(`${num1} es mayor` )
    }
    else{
        console.log(`${num2} es mayor`)
    }


}
consultar(10,10);*/

/*10. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un */

/*function divisible(numero){
   if(numero%2==0)
   {
    console.log(`${numero} si es divisible entre 2`)
   }
   else{
    console.log(`${numero} no es divisible entre 2`)
   }



}
divisible(8);*/

/*11. Verificar si un día es fin de semana o día laborable. */

function Verificar(dia){
    if(dia==='lunes'){
        console.log('dia laborable');
    }else if(dia==='martes')
    {
        console.log('dia laborable');
    } else if(dia==='miercoles'){
        console.log('dia laborable');
    }else if(dia==='miercoles'){
        console.log('dia laborable');
    }else if(dia==='jueves'){
        console.log('dia laborable');
    }else if(dia==='viernes'){
        console.log('dia laborable');
    }else if(dia==='sabado'){
        console.log('dia no laborable');
    }else if(dia==='domingo'){
        console.log('dia no laborable');
    }

}
Verificar('domingo');



/* 12. Verificar si un número es divisible por 3 y por 5.*/

/* function divisible(numero){
    if(numero%3===0 && numero%5===0){
        console.log(`${numero} es divisible por 3 y 5`);
    
    } else{
        console.log(`${numero} no es divisible`);
    }

}
divisible(14);
*/

/*13. Determinar si un número es múltiplo de 2, 3 o ambos.*/

/*function multiplo(numero){
    if(numero%2===0 && numero%3===0){
        console.log(`el numero es multiplo de 2 y 3`);
    }
    else if(numero%2===0){
        
        
            console.log(`es multiplo de 2`);
        }
        else if(numero%3===0){
            console.log(`es multiplo de 3`);
        }
  

}
multiplo(4);*/

/*14. Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron. */

/* function persona(anionacimiento,anioactual){
    let result=anioactual-anionacimiento;
    if(result>=18)
    {
        console.log(`es apto para el trabajo`)
    }
    else
    console.log('no es apto para el trabajo')
}
persona(2000,2024);
*/

/*15. Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo y represéntelo, que permita determinar el bono que recibirá un trabajador. */

/*
function bono(anioactual,aniocontrato){
    let result=anioactual-aniocontrato;
    
    if(result<=1){
        console.log(`$100 ${result} anio`)
    }else if(result<=2)
    {
        console.log(`$200 ${result} anio`)
    }else if(result>=5)
    {
        console.log(`$1000 ${result} anio`)
    }


}
 console.log(bono(2024,2022));
 */
/*16. Realice un algoritmo para determinar si una persona puede votar con base en su edad en las próximas elecciones. */

/*function votacion(edad){
    if(edad>=18){
        console.log('puedes votar en las siguientes elecciones')
    }else
        console.log('No puedes votar en las siguientes elecciones');

}
votacion(32);*/
    