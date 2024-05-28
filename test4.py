from fourth import filter_even_numbers
from fourth import dictionary_operations
from fourth import operations_with_tuple
from fourth import operations_with_set
import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

poin41=0
poin42=0
poin43=0
poin44=0


MyList = [1, 2, 3, 4, 5, 6, 7, 8, 22]
resultList=filter_even_numbers(MyList)
if(resultList[0]==[2, 4, 6, 8, 22, 22]):
    print("Ви правильно виконали завдання",resultList[0])
    poin41+=33.33
else:
    print("Неправильне виконання фільтрації парних чисел")

if(resultList[1]==5):
    print("Ви правильно виконали завдання",resultList[1])
    poin41+=33.33
else:
    print("Неправильне виконання визначення довжини списку")

if(resultList[2]==False):
    print("Ви правильно виконали завдання",resultList[2])
    poin41+=33.33
else:
    print("Неправильне виконання визначення чи є елемент в списку")



resultdict=dictionary_operations()
if(resultdict[0]=={'Назва': 'Python', 'Версія': 3.1, 'Рік створення': 1991}):
    print("Ви правильно виконали видалення додавання та створення словника")
    poin42+=33.33
else:
    print("Неправильне виконання перетину 2 множин")

if(resultdict[1]==True):
    print("Ви правильно виконали перевірку наявності ключа у словнику ")
    poin42+=33.33
else:
    print("Неправильне виконання перевірки чи є дві множини рівними")

if(resultdict[2]==['Python', 3.1, 1991]):
    print("Ви правильно виконали ітерацію значень у словнику")
    poin42+=33.33
else:
    print("Неправильно визначили довжину множини")




myTuple = ('яблуко', 'банан', 'вишня', 'апельсин')
resultTuple=operations_with_tuple(myTuple)
if(resultTuple[0]==['яблуко', 'банан', 'вишня', 'апельсин']):
    print("Ви правильно виконали завдання")
    poin43+=50
else:
    print("Неправильне виконання ітерацію по кортежу")

if(resultTuple[1]==('банан', 'вишня')):
    print("Ви правильно виконали завдання")
    poin43+=50
else:
    print("Неправильне виконання зрізу в кортежі")



set1 = {1, 2, 3, 4, 5}
set2 = {3, 4, 5, 6, 7}
resultSet=operations_with_set(set1,set2)
if(resultSet[0]=={3, 4, 5}):
    print("Ви правильно виконали завдання")
    poin44+=20
else:
    print("Неправильне виконання перетину 2 множин")

if(resultSet[1]==False):
    print("Ви правильно виконали завдання")
    poin44+=20
else:
    print("Неправильне виконання перевірки чи є дві множини рівними")

if(resultSet[2]==7):
    print("Ви правильно виконали завдання")
    poin44+=20
else:
    print("Неправильно визначили довжину множини")

if(resultSet[3]==[3, 4, 5, 6, 7]):
    print("Ви правильно виконали завдання")
    poin44+=20
else:
    print("Неправильне виконання ітерації по множині")

if(resultSet[4]=={1, 2, 3, 4, 5, 6, 7}):
    print("Ви правильно виконали завдання")
    poin44+=20
else:
    print("Неправильне виконання додавання елементу до списку")
 

calculate41=0.2*poin41/100*20
calculate42=0.2*poin42/100*20
calculate43=0.3*poin43/100*20
calculate44=0.3*poin44/100*20

resultList=(calculate41+calculate42+calculate43+calculate44)*100/20
print(resultList)