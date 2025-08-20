class Empleado:
    def __init__(self, nombre, salario):
        self.nombre = nombre
        self.salario = salario

    def mostrar_informacion(self):
        print(f"Nombre: {self.nombre}, Salario: {self.salario}")

class Gerente(Empleado):
    def __init__(self, nombre, salario, departamento):
        super().__init__(nombre, salario)
        self.departamento = departamento

    def mostrar_informacion(self):
        print(f"Nombre: {self.nombre}, Salario: {self.salario}, Departamento: {self.departamento}")

# Ejemplo de uso
if __name__ == "__main__":
    empleado = Empleado("Ana", 3000)
    gerente = Gerente("Luis", 5000, "Ventas")

    empleado.mostrar_informacion()
    gerente.mostrar_informacion()
    gabriel = Gerente("Gabriel", 6000, "Marketing")
    gabriel.mostrar_informacion()