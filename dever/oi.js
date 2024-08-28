
let tarefas = [];


function adicionarTarefa(descricao) {

    tarefas.push({ descricao: descricao, concluida: false });
}


function listarTarefas() {
    if (tarefas.length === 0) {
        console.log("Nenhuma tarefa encontrada.");
    } else {
        for (let i = 0; i < tarefas.length; i++) {
            let tarefa = tarefas[i];
            let status = tarefa.concluida ? "Concluída" : "Não concluída";
            console.log(i + ": " + tarefa.descricao + " - " + status);
        }
    }
}


function removerTarefa(indice) {
    if (indice < 0 || indice >= tarefas.length) {
        console.log("Índice inválido.");
    } else {
        tarefas.splice(indice, 1); 
        console.log("Tarefa removida com sucesso.");
    }
}


function concluirTarefa(indice) {
    if (indice < 0 || indice >= tarefas.length) {
        console.log("Índice inválido.");
    } else {
        tarefas[indice].concluida = true;
        console.log("Tarefa marcada como concluída.");
    }
}


adicionarTarefa("Comprar leite");
adicionarTarefa("Ler um livro");
listarTarefas(); 
concluirTarefa(0); 
listarTarefas(); 
removerTarefa(1); 
listarTarefas(); 
