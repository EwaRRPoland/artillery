# cypress-js-tests1

# Wdrażanie lokalne Wymagania:

## dotyczące konfiguracji środowiska dla testów Cypress w projekcie. Oto kilka kroków, które powinieneś wykonać:

1. Zainstaluj `Node.js`: Upewnij się, że masz zainstalowany `Node.js` na swoim systemie. Jeśli nie, pobierz go ze strony` Node.js` i zainstaluj.

2. Sprawdź wersję `Node.js`: Upewnij się, że korzystasz z wersji `Node.js` 18 lub 20, ponieważ projekt został przetestowany na tych wersjach.

3. Zainstaluj `Git`: Jeśli jeszcze tego nie zrobiłeś, zainstaluj `Git` na swoim komputerze. Możesz pobrać go ze strony `Git`.

4. Otwórz katalog projektu: Przejdź do katalogu głównego swojego projektu za pomocą wiersza poleceń lub terminala.

5. Sklonuj repozytorium: Sklonuj repozytorium projektu za pomocą komendy` git clone <adres-repozytorium>`.

6. Zainstaluj moduły lokalnie: W katalogu projektu uruchom komendę `npm init -y`, aby zainstalować moduły zdefiniowane w pliku `package.json`.

7. Dodajemy do projektu Artillery lokalnie `npm install --save-dev artillery`.

8. Przejdż z PowersShell na GitBush. Uruchom testy: Aby uruchomić testy, użyj komendy `artillery run <ścieżka pliku>` - lub dla czystych wyników "checks" z testów `artillery run -q  <ścieżka pliku>`.

9. W oknie startowym wybierz katalog główny z testami `artillery`.

10. Do walidacji pliku `*.yml` użyj [YAML Lint](https://www.yamllint.com/).

# Plik z testami:

1. `perfo_test.yml`

Korzystając z publicznego API [Cat Facts](https://cat-fact.herokuapp.com/#/cat/facts) stworzyłam test wydajnościowy dla Artillery, opisując go w pliku yaml, używając:

- Skonfigurowałam fazę dla jednego z typów testów obciążeniowych,

- Dodałam żądania GET i POST do sekcji flow,

- Użyłam sekcji payload i odczytu danych z pliku, aby skonfigurować ciało żądania POST,

- Dodałam walidację metryk końcowych (np. response_time.p95).
