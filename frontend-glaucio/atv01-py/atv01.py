import random

alturas = [round(random.uniform(1.50, 2.00), 2) for _ in range(15)]

generos = [random.choice(["Masculino", "Feminino"]) for _ in range(15)]

print("=== Dados das pessoas ===")
for i in range(15):
    print(f"Pessoa {i+1}: {alturas[i]} m, {generos[i]}")
print()

maior_altura = max(alturas)
menor_altura = min(alturas)

soma_homens = 0
num_homens = 0
for alt, gen in zip(alturas, generos):
    if gen == "Masculino":
        soma_homens += alt
        num_homens += 1
media_homens = soma_homens / num_homens if num_homens > 0 else 0

num_mulheres = generos.count("Feminino")

print("===== RESULTADOS =====")
print(f"Maior altura do grupo: {maior_altura:.2f} m")
print(f"Menor altura do grupo: {menor_altura:.2f} m")
print(f"Média de altura dos homens: {media_homens:.2f} m")
print(f"Número de mulheres: {num_mulheres}")
