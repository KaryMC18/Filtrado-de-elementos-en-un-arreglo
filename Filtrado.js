function filtrarMayoresQue(valor) {
    const numeros = [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    
    const numerosFiltrados = numeros.filter(numero => numero > valor);
    
    console.log(`Elementos mayores que ${valor}:`, numerosFiltrados);
  }

  const valorUsuario = 25;
  filtrarMayoresQue(valorUsuario);
  