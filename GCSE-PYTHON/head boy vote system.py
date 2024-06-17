a=0
b=0
c=0
class1 = 0
while (class1 < 30):
    print()
    print()
    response=input('Who would you like to vote for head boy?\nFor Sam Chedgey press 1\nFor Toby Moyle press 2\nFor Logan Hawkes press 3\n')

    class1 = class1 + 1
    
    if response == '1':
        a = a + 1

    if response == '2':
        b = b + 1

    if response == '3':
        c = c + 1

    print('vote registered!')


if class1 == 30:
    print()
    print()
    print('Voting has finished. the results will be in soon.')
    print()
    print()
    print()
    if a>10:
        print('congratulations! Sam won!')
    if b>10:
        print('congartulations1 Toby won!')
    if c>10:
        print('congratulations! Logman won!')

    print(f'The totals are as follows:\ntotal votes for sam: {a}\ntotal votes for toby: {b}\nTotal votes for logan: {c}')

    
