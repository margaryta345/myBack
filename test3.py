from third import cube_volume_and_surface_area
from third import find_compartment
from third import fib
import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

poin21=0
poin22=0
poin23=0

resultCube = cube_volume_and_surface_area(5)
if(resultCube[0]==125):
    poin21+=50
    print("Ви правильно виконали завдання об`єму кубу ")
else:
    print("Неправильне виконання завдання об`єму кубу")

if(resultCube[1]==150):
    poin21+=50
    print("Ви правильно виконали завдання повної поверхні кубу ")
else:
    print("Неправильне виконання завдання повної поверхні кубу")


if(find_compartment(7)==2 and find_compartment(15)==4 and find_compartment(20)==5 and find_compartment(26)==7):
    print("Ви правильно виконали завдання")
    poin22=100
else:
    print("Неправильне виконання завдання ")


if(fib(4)=="0 1 1 2" and fib(7)=="0 1 1 2 3 5 8" and fib('7')==''):
    print("Ви правильно виконали завдання")
    poin23=100
else:
    print("Неправильне виконання завдання ")

calculate211=0.2*poin21/100*20
calculate222=0.4*poin22/100*20
calculate233=0.4*poin23/100*20

resultpersentageFunc=(calculate211+calculate222+calculate233)*100/20
