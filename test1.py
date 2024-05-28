from first import create_variables
from first import check_admission_eligibility
from first import process_string
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
variables = create_variables()
poin1=0
poin2=0
poin3=0

if type(variables[0]) is int:
    poin1 += 12.5
    print('Перша перевірка задачі 1 прошла успішно', type(variables[0]))
else:
    print("Пункт-1 невірно виконаний")
    
if type(variables[1]) is float:
    poin1 += 12.5
    print('Друга перевірка задачі 1 прошла успішно',type(variables[1]))
else:
    print("Пункт-2 невірно виконаний")

if type(variables[2]) is str:
    poin1 += 12.5
    print('Третя перевірка задачі 1 прошла успішно',type(variables[2]))
else:
    print("Пункт-3 невірно виконаний")

if type(variables[3]) is list:
    poin1 += 12.5
    print('Четверта перевірка задачі 1 прошла успішно',type(variables[3]))
else:
    print("Пункт-4 невірно виконаний")

if type(variables[4]) is tuple:
    poin1+= 12.5
    print('П`ята перевірка задачі 1 прошла успішно',type(variables[4]))
else:
    print("Пункт-5 невірно виконаний")

if type(variables[5]) is set:
    poin1 += 12.5
    print('Шоста перевірка задачі 1 прошла успішно',type(variables[5]))
else:
    print("Пункт-6 невірно виконаний")


if type(variables[6]) is dict:
    poin1 += 12.5
    print('Сьома перевірка задачі 1 прошла успішно',type(variables[6]))
else:
    print("Пункт-7 невірно виконаний")


if type(variables[7]) is bool:
 
    poin1 += 12.5
    print('Восьма перевірка задачі 1 прошла успішно',type(variables[7]))
else:
    print("Пункт-8 невірно виконаний")


result = check_admission_eligibility(18, 10,12,5)
if result == "Ви не маєте права на вступ на курс.":
    poin2 = 100
    print('Перша перевірка задачі 2 прошла успішно')
else: print('Ви не правильно перевіряєте середнє арифметичне всіх оцінок')
result2 = check_admission_eligibility(14, 10,12,5)
if result2 == "Ви не маєте права на вступ на курс.":
    poin2 = 100
    print('Друга перевірка задачі 2 прошла успішно')
else: print('Ви не правильно перевіряєте вік')
result3 = check_admission_eligibility(18, 10,12,10)
if result3 == "Ви маєте право на вступ на курс.":
    poin2 = 100
    print('Третя перевірка задачі 2 прошла успішно')
else: print('Ви не правильно перевіряєте дані')


result3=process_string("Весняний дощ, пісня пташок, тихий вечір.")
if(result3[0]=='Весняний дощ, пісня птршок, тихий вечір.'):
    print('Перша перевірка задачі 3 прошла успішно -',result3[0])
    poin3 +=33.3 
else: print('Ви не вірно використовуєте метод replace()')

if(result3[1]==['Весняний дощ', ' пісня птршок', ' тихий вечір.']):
    print('Друга перевірка задачі 3 прошла успішно -',result3[1])
    poin3 +=33.3 
else: print('Ви не вірно використовуєте метод split()')

if(result3[2]=='Весняний дощ,  пісня птршок,  тихий вечір.'):
    print('Третя перевірка задачі 3 прошла успішно -',result3[2])
    poin3 +=33.3 
else: print('Ви не вірно використовуєте метод join()')

calculate1=0.2*poin1/100*20
calculate2=0.3*poin2/100*20
calculate3=0.5*poin3/100*20

resultpersentage1=(calculate1+calculate2+calculate3)*100/20

print(resultpersentage1)