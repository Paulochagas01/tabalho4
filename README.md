# Trabalho4
Calcular fatorial e fibonacci de um número por API

# Utilizando a api
Rodar no terminal o comando abaixo no windows:
Invoke-RestMethod -Uri "http://localhost:3000/calc" -Method Post -Headers $headers -Body '{"fib": 7, "fat": 3}' -ContentType "application/json"
