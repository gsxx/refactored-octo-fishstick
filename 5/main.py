#matiaslopez23
numero1=int(input("ingrese un numero "))
numero2=int(input("ingrese otro numero "))
suma=(numero1 + numero2)
print("la suma de estos numeros da ",suma)
menor = numero1 < numero2
mayor = numero1 > numero2
igual = numero1 == numero2
if mayor:  
    print("numero1 es mayor que numero2")
if igual:
    print("numero1 es igual que numero2")
if menor:  
    print("numero1 es menor que numero2")

