class Padre:
    apellido=''
    def __init__(self,nombre):
        self.nombre=nombre

class Hijo(Padre):
    def __init__(self,nombre,lenguajesDeProgramacion):
        super().__init__(nombre)
        self.lenguajesDeProgramacion=lenguajesDeProgramacion

padre = Padre('nombre del padre')
Padre.apellido='apellido del padre'
hijo = Hijo('nombre del hijo','python')
print(hijo.nombre,hijo.apellido)