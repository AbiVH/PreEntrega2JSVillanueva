function interesCompuesto(montoInicial, montoMeta, tasaAnual) {
  let planMeses = 0;
  tasaAnual = 1 + tasaAnual / 100;
  if (montoInicial <= montoMeta) {
    do {
      montoInicial = montoInicial * tasaAnual;
      planMeses++;
    } while (montoInicial <= montoMeta);
  } else {
    alert(`Su monto meta debe de ser mayor al monto inicial`);
  }
  return planMeses;
}

function realizarPlan() {
  let montoInicial = parseFloat(document.getElementById("montoInicial").value);
  let montoMeta = parseFloat(document.getElementById("montoMeta").value);
  let tasaAnual = parseFloat(document.getElementById("tasaAnual").value);

  let meses = interesCompuesto(montoInicial, montoMeta, tasaAnual);

  document.getElementById("planMeses").textContent = `Plan: ${meses} años`;
}
