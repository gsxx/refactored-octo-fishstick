nombre='Gabriel'
print('ingrese su nombre')
nombre=input()
print('hola '+nombre)
string=nombre
booleano=True or False
contador1=0

while contador1<20:
    contador1=contador1+1
    for contador2 in range(20):
        if (contador1%2==0) and (contador2%2==0):
            print(contador1,' ',contador2)
