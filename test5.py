from fifth import Transport, Car,Square
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
poin51=0
poin52=0

square = Square(5)
if(square.area()==25):
    print("Ви правильно виконали завдання",square.area())
    poin52+=50
else:
    print("Неправильне виконання перетину 2 множин")

if(square.perimeter()==20):
    print("Ви правильно виконали завдання",square.perimeter())
    poin52+=50
else:
    print("Неправильне виконання перевірки чи є дві множини рівними")


def transport_example():
    # Створення об'єктів класу Car з різними параметрами
    car1 = Car(200, 150, 500, "Toyota")
    car2 = Car(180, 120, 450, "Honda")
    car3 = Car(220, 180, 550, "BMW")

    # Виклик методу describe() для кожного автомобіля
    print("Опис автомобіля 1:")
    desc1 = car1.describe()
    print(desc1)
    print("\nОпис автомобіля 2:")
    desc2 = car2.describe()
    print(desc2)
    print("\nОпис автомобіля 3:")
    desc3 = car3.describe()
    print(desc3)
    
    return [desc1, desc2, desc3]

resultOop=transport_example()

if(resultOop[0]==[[200, 150, 500], 'Марка: Toyota']):
    print("Ви правильно виконали завдання")
    poin51+=33.33
else:
    print("Неправильне виконання перетину 2 множин")

if(resultOop[1]==[[180, 120, 450], 'Марка: Honda']):
    print("Ви правильно виконали завдання")
    poin51+=33.33
else:
    print("Неправильне виконання перевірки чи є дві множини рівними")

if(resultOop[2]==[[220, 180, 550], 'Марка: BMW']):
    print("Ви правильно виконали завдання")
    poin51+=33.33
else:
    print("Неправильно визначили довжину множини")


calculate51=0.3*poin51/100*20
calculate52=0.7*poin52/100*20
resultOopPoin=(calculate51+calculate52)*100/20
print(resultOopPoin)