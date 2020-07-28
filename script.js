document.querySelector(".hamburger").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

document.querySelector("#quantidade").addEventListener("change", atualizarPreco)
document.querySelector("#Decorador-sim").addEventListener("change", atualizarPreco)
document.querySelector("#Decorador-não").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
})
function atualizarPreco(){
    const quantidade = document.querySelector("#quantidade").value
    const Decorador = document.querySelector("#Decorador-sim").checked
    const prazo = document.querySelector("#prazo").value 
    
    let preco = quantidade * 100;
    if (Decorador) preco *= 1.1
    let taxaUrgencia = 1 - prazo*0.1;
    preco *= 1 + taxaUrgencia

    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}