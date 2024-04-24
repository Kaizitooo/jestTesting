// Importamos o objeto 'math' do arquivo 'math.js'.
const math = require('./math');

//BASICÃO
// Definimos um teste usando a função 'test' do Jest.
test('a soma de 1 e 2 deve ser 3', () => {
  // Chamamos o método 'sum' do objeto 'math' com os argumentos 1 e 2.
  const resultado = math.sum(1, 2);

  // Verificamos se o resultado é igual a 3.
  expect(resultado).toBe(3);
});

//SPY
// Definimos um teste usando a função 'test' do Jest.
test('verifica se o método sum é chamado e retorna o valor correto', () => {
    // Criamos um Spy do método 'sum' do objeto 'math' usando 'jest.spyOn()'.
    const sumSpy = jest.spyOn(math, 'sum');
  
    // Chamamos o método 'sum' do objeto 'math' com os argumentos 1 e 2.
    const result = math.sum(1, 2);
  
    // Verificamos se o Spy 'sumSpy' foi chamado.
    expect(sumSpy).toHaveBeenCalled();
  
    // Verificamos se o Spy 'sumSpy' foi chamado com os argumentos 1 e 2.
    expect(sumSpy).toHaveBeenCalledWith(1, 2);
  
    // Verificamos se o resultado do método é 3, que é a soma de 1 e 2.
    expect(result).toBe(3);
  
    // Limpa todas as informações armazenadas no Spy.
    sumSpy.mockRestore();
  });
//

  //SNAPSHOT
  // Definimos um teste usando a função 'test' do Jest.
test('cria um snapshot para o método sum', () => {
  // Chamamos o método 'sum' do objeto 'math' com os argumentos 1 e 2.
  const resultado = math.sum(1, 2);

  // Criamos um snapshot do resultado.
  expect(resultado).toMatchSnapshot();
});

//MOCK
// Definimos um teste usando a função 'test' do Jest.
test('verifica se o método sum é chamado corretamente', () => {
  // Criamos um mock da função 'sum'.
  const sumMock = jest.fn(math.sum);

  // Chamamos a função mock 'sumMock' com os argumentos 1 e 2.
  sumMock(1, 2);

  // Verificamos se a função mock 'sumMock' foi chamada.
  expect(sumMock).toHaveBeenCalled();

  // Verificamos se a função mock 'sumMock' foi chamada com os argumentos 1 e 2.
  expect(sumMock).toHaveBeenCalledWith(1, 2);
});