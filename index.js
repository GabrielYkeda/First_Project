function validar() {

    var name = document.getElementById("name");
    var email= document.getElementById("email");
    var senha= document.getElementById("senha");
    var telefone= document.getElementById("telefone");
    var cep= document.getElementById("cep");


    if(name.value ==""){
        alert ("favor digitar o nome")
        name.focus();
        return;
    }
    

    if(email.value ==""){
        alert ("favor digitar o e-mail")
        email.focus();
        return;
    }
    else if (!emailvalido(email.value)){
        alert ("formato incorreto de email")
        email.focus();
        return;
        
    }

    if(senha.value ==""){
        alert ("favor digitar uma senha")
    }else if(senha.length<6){
        alert ("favor digitar uma senha com no mínimo 6 digitos")
    }
    
    if(telefone.value ==""){
        alert ("favor digitar o telefone")
        
    }
    
    if(cep.value ==""){
        alert ("favor digitar o CEP")
    }
    
}
function emailvalido(babalu){
    var emailrejest=/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    return emailrejest.test(babalu)
    

}
function mask(doritos,cheetos){
    setTimeout(function(){
        var ruflees=mphone(doritos.value); //cada digito que a pessoa digitar,o mphone receberá
        if (ruflees!=doritos.value){ //verifica se o mphone volta diferente para a pessoa que digitou
            doritos.value=ruflees; //se sim,o valor do imput recebera um valor mascarado,"o valor com as aspas"
        }

    })
}
function mphone(v){
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
        r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
        r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
        r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
        r = r.replace(/^(\d*)/, "($1");
    }
    return r;
}
function buscacep(cep){
    var script=document.createElement("script")
    script.src="https://viacep.com.br/ws/"+cep+"/json/?callback=meucallback"
    document.body.appendChild(script)

}
function meucallback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('estado').value = (conteudo.uf);

    } //end if.
    else {
        //CEP não Encontrado.
        alert("CEP não encontrado.");
    }
}