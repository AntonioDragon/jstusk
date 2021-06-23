//Задача из www.codewars.com
/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

DNAStrand ("ATTGC") // return "TAACG"

DNAStrand ("GTAT") // return "CATA" 
*/
let DNA ={                                // Создаем список Днк для задания
    A : 'T',                        
    T : 'A',
    G : 'C',
    C : 'G'
}

function DNAStrand(dna){
    arr = dna.split('');                   //Создаем массив разбивая входящую строку 
    for(let i = 0; i<arr.length ; i++){    //Проходим по массиву
        switch(arr[i]){                    //Создаем switch  и проверяем днк
            case DNA.A : {
                arr[i] = DNA.T;           // Замена днк A = T
                break;
            }
            case DNA.T : {
                arr[i] = DNA.A;           // Замена днк T = A
                break;
            }
            case DNA.C : {
                arr[i] = DNA.G;           // Замена днк C = G
                break;
            }
            case DNA.G : {
                arr[i] = DNA.C;           // Замена днк G = C
                break;
            }
            default: 
            return "Данное значение днк не походит : " + arr[i]; //Ошибка отсутсвие значения в списке  
        }
    }
    return arr.join('');                  // Обьединяем в одну строку
}

console.log(DNAStrand("ATCGC"));