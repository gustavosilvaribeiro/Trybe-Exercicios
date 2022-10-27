//A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número

const myFizzBuzz = require('./myFizzBuzz.js');

describe('teste a função myFizzBuzz',() => {
    it ('verifica se, de acordo com o parâmetro recebido, retorna o valor esperado', () => {
        expect(myFizzBuzz(30)).toBe('fizzbuzz');//Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
        expect(myFizzBuzz(3)).toBe('fizz');//Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
        expect(myFizzBuzz(5)).toBe('buzz');//Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
        expect(myFizzBuzz(1)).toBe(1);//Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
        expect(myFizzBuzz('2')).toBe(false);//Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
        })
    });

