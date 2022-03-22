# Parcel boilerplate

## Kroki do uruchomienia:

1. Pobrać repozytorium na komputer, `git clone https://github.com/q-nick/parcel-project-template.git`
2. Wszystkie pliki są niezbędne
3. Uruchomić `npm ci` w linii komend (zainstalować pakiety, powinien pojawić się folder node_modules)
4. Serwer deweloperski uruchamia się wyłącznie komendą: `npm run dev`. Liveserver i inne usługi nie nadają się do zadań 8,9 itd
5. Po odpaleniu powyższej komendy nalezy wejść na http://localhost:1234 na którym odpalany jest serwer parcel

## Standardowe problemy:

Nie należy używać `type="module"` w definiowaniu skryptów js - jest to błąd uniemożliwiający poprawne działanie parcela.

## Zadania 8 i 9
Należy skopiować folder `src` (można ręcznie) z repozytorium, przykładowo dla zadania 8 z tego miejsca:
https://github.com/goitacademy/javascript-homework/tree/main/v2/08/src
