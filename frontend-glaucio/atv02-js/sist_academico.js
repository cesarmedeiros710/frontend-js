function verificarSituacao() {
  let aulas = parseInt(document.getElementById("aulas").value);
  let faltas = parseInt(document.getElementById("faltas").value);
  let p1 = parseFloat(document.getElementById("p1").value);
  let p2 = parseFloat(document.getElementById("p2").value);

  let percentualPresenca = ((aulas - faltas) / aulas) * 100;

  let mensagem = "Número de aulas do semestre: " + aulas +
                 "\nNúmero de faltas do aluno: " + faltas +
                 "\nPercentual de presença do aluno: " + percentualPresenca.toFixed(2) + "%" +
                 "\nNota P1: " + p1 +
                 "\nNota P2: " + p2;

  if (percentualPresenca < 75) {
    mensagem += "\nSituação final do aluno: Reprovado por falta";
    console.log(mensagem);
    return;
  }

  let media = (p1 + p2) / 2;

  if (media >= 7) {
    mensagem += "\nSituação final do aluno: Aprovado";
  } else if (media >= 5 && media < 7) {
    let notaRecuperacao = parseFloat(prompt("Digite a nota da recuperação:"));
    let mediaFinal = (media + notaRecuperacao) / 2;
    mensagem += "\nNota complementar (recuperação): " + notaRecuperacao.toFixed(2);
    if (mediaFinal >= 5) {
      mensagem += "\nSituação final do aluno: Aprovado";
    } else {
      mensagem += "\nSituação final do aluno: Reprovado";
    }
    mensagem += "\nMédia final: " + mediaFinal.toFixed(2);
  } else {
    mensagem += "\nSituação final do aluno: Reprovado";
    mensagem += "\nMédia final: " + media.toFixed(2);
  }

  console.log(mensagem);
}
