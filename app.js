const fastify = require('fastify')();

// Rota para calcular Fibonacci e Fatorial
fastify.post('/calc', async (request, reply) => {
  const { fib, fat } = request.body;

  // Função para calcular o Fatorial
  const fatorial = (num) => {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * fatorial(num - 1);
    }
  };

  // Função para calcular a Sequência de Fibonacci
  const fibonacci = (num) => {
    if (num <= 1) {
      return num;
    } else {
      return fibonacci(num - 1) + fibonacci(num - 2);
    }
  };

  const calc_fibonacci = fibonacci(fib);
  const calc_fatorial = fatorial(fat);

  reply.send({
    calc_fibonacci,
    calc_fatorial,
  });
});

const start = async () => {
  try {
    await fastify.listen(3000);
    console.log('Server is running on http://localhost:3000');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
