let btnCalcular = document.getElementById("btnCalcular");

function calcularIMC(){
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;
  let resultado = document.getElementById("resultado");
  
  if(altura != "" && peso !=""){
    altura = altura * 100 // convertendo centímetros pra metros
    let imc = (peso / (altura * altura)).toFixed(2);
    let mensagem = ""
    
    if(imc < 18.5){
      mensagem = "Você está abaixo do peso"
    }else if(imc < 25){
      mensagem = "Você está com o peso ideal"
    }else if(imc < 30){
      mensagem = "Você está levemente acima do peso"
    }else if(imc < 35){
      mensagem = "Você está com obesidade grau I"
    }else if(imc < 40){
      mensagem = "Você está com obesidade grau II"
    }else{
      mensagem = "Você está com obesidade grau III"
    }
    resultado.textContent = `Seu IMC é ${imc}. ${mensagem}`;
    
  }else{
    resultado.textContent = "Preencha todos os campos";
  }
  
  
}

btnCalcular.addEventListener("click",calcularIMC);
