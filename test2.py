from second import calculate
from second import print_reverse_numbers
from second import get_even_numbers
from second import find_smallest_square_above
import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

res1=calculate('-',100,15)
res2=calculate('+',5,3)
res3=calculate('*',10,15)
res4=calculate('/',100,15)
res5=calculate('/',10,0)
poin11=0
if(res1==85):
    print('Перша перевірка задачі 1 прошла успішно')
    poin11 +=20
else: print('Ви не вірно виконуєте операцію віднімання')

if(res2==8):
    print('Друга перевірка задачі 1 прошла успішно')
    poin11 +=20
else: print('Ви не вірно виконуєте операцію додавання')

if(res3==150):
    print('Третя перевірка задачі 1 прошла успішно')
    poin11 +=20 
else: print('Ви не вірно виконуєте операцію множення')

if(res4==6.666666666666667):
    print('Четверта перевірка задачі 1 прошла успішно')
    poin11 +=33.3 
else: print('Ви не вірно використовуєте ділення')

if(res5=="Ділення на нуль неможливе"):
    print('П`ята перевірка задачі 1 прошла успішно')
    poin11 +=33.3 
else: print('Ви забули про перевірку що на нуль ділити не можна')

expected_result = [20, 19, 18, 17, 16, 15, 14,13]
poin12=0
resultReverse = print_reverse_numbers()
if resultReverse == expected_result:
    poin12=100
    print("Ви правильно виконали завдання", resultReverse)
else:
    print("Щось  працює не правильно. Отриманий результат:", resultReverse)


resultEven = get_even_numbers()
expected_resultEven=[2, 4, 6, 8, 10]
poin13=0
if resultEven == expected_resultEven:
    poin13=100
    print("Ви правильно виконали завдання", resultEven)
else:
    print("Щось  працює не правильно. Отриманий результат:", resultEven)

numberMax = 20
poin14=0
result = find_smallest_square_above(numberMax)
if(result==5):
    poin14=100
    print("Ви правильно виконали завдання ")
    print("Найменше ціле число, яке при піднесенні до квадрата перевищує", numberMax, "дорівнює", result)
else:print("Щось  працює не правильно. Отриманий результат:", resultEven)


calculate11=0.3*poin11/100*20
calculate12=0.2*poin12/100*20
calculate13=0.3*poin13/100*20
calculate14=0.1*poin14/100*20

resultpersentage2=(calculate11+calculate12+calculate13+calculate14)*100/20
print(resultpersentage2)