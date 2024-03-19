# Rendszerterv
## 1. A rendszer célja
* A rendszer célja egy webes felülettel rendelkező, munkáltató és munkavállaló közötti, kapcsolattartásra és munkalehetőségek hirdetésére/keresésére szolgáló weboldal.
* Ezen a felületen a munkáltató megkereshet munkavállalókat, akiket specifikus munkákra alkalmasnak talál és munkát ajánlhat nekik.
* A munkavállalók ezeket az ajánlatokat megtekinthetik, elfogadhatják, ha eléri a követelményeiket.
## 2. Projektterv

### 2.1 Projektszerepkörök, felelőségek:
   * Scrum master: Kaponya Martin
   * Product owner: Kaponya Martin
   * Üzleti szereplő: N/A
     
### 2.2 Projektmunkások és felelőségek:
   * Frontend: Bárdos Botond, Erdélyi Patrik, Kalas Gergő, Nagy Bálint
   * Backend: Bárdos Botond, Erdélyi Patrik, Kalas Gergő, Nagy Bálint
   * Tesztelés: Bárdos Botond, Erdélyi Patrik, Kalas Gergő, Nagy Bálint
     
### 2.3 Ütemterv:

|Funkció                  | Feladat                                | Prioritás | Becslés (nap) | Aktuális becslés (nap) | Eltelt idő (nap) | Becsült idő (nap) |
|-------------------------|----------------------------------------|-----------|---------------|------------------------|------------------|---------------------|
|Követelmény specifikáció |Megírás                                 |         1 |             2 |                      2 |                1 |                   1 |             
|Funkcionális specifikáció|Megírás                                 |         1 |             2 |                      2 |                1 |                   1 |
|Rendszerterv             |Megírás                                 |         1 |             2 |                      2 |                1 |                   1 |
|Weboldal                 |Képernyőtervek elkészítése              |         2 |             9 |                      9 |                1 |                   9 |
|Weboldal                 |Prototípus elkészítése                  |         3 |            28 |                     28 |                1 |                  28 |
|Weboldal                 |Alapfunkciók elkészítése                |         3 |            21 |                     21 |                1 |                  21 |
|Weboldal                 |Tesztelés                               |         4 |            21 |                     21 |                1 |                  21 |

### 2.4 Mérföldkövek:
   * Prototípus átadása

## 3. Üzleti folyamatok modellje

### 3.1 Üzleti szereplők

### 3.2 Üzleti folyamatok

## 4. Követelmények

### Funkcionális követelmények

| ID | Megnevezés | Leírás |
| --- | --- | --- |
| K1 | ... | ... |

### Nemfunkcionális követelmények

| ID | Megnevezés | Leírás |
| --- | --- | --- |
| K4 | ... | ... |

### Támogatott eszközök

## 5. Funkcionális terv

### 5.1 Rendszerszereplők

### 5.2 Menühierarchiák

## 6. Fizikai környezet

### Vásárolt softwarekomponensek és külső rendszerek:
* Nincsenek megvásárolt komponensek.
### Hardver topológia:
* Az alkalmazás helyi számítógépen fut (localhost), amely egy dedikált H2 adatbázis-szerverhez kapcsolódik.
### Fizikai alrendszerek:
* Az alkalmazás backendje Spring Boot-on fut, míg a frontend Angular technológiát használ.
### Fejlesztő eszközök:
* IntelliJ IDEA
* Visual Studio Code
* Postman
* Git

## 8. Architekturális terv

### Webszerver:
* Az alkalmazás egy helyi számítógépen (localhost) futó beépített webszerveren fut. A beépített szerver felelős az alkalmazás statikus tartalmának és a REST API végpontoknak a kiszolgálásáért.
### Adatbázis rendszer:
* Az alkalmazás H2 adatbázist használ, amely egy in-memory adatbázis rendszer. Ez lehetővé teszi a fejlesztők számára, hogy gyorsan és egyszerűen hozzáférjenek az adatokhoz fejlesztés közben.
### A program elérése, kezelése:
* Az alkalmazás elérhető a helyi számítógépen a böngészőn keresztül, a localhost címen. A felhasználók bejelentkezhetnek a rendszerbe a felhasználónevükkel és jelszavukkal.
## 9. Adatbázis terv

## 10. Implementációs terv
* A webes felület Angular keretrendszerben fog elkészülni, amely TypeScript nyelven íródott. A különböző technológiákat amennyire csak lehet, külön fájlokba írva készítjük el, úgy csatoljuk egymáshoz ezzel is egy átláthatóbb, könnyebben változtatható és bővíthető weboldal lesz.
* Az adatokat egy H2 adatbázisban fogjuk tárolni.
* A backend Spring Boot keretrendszerben készül, ami Java nyelven íródott. A Spring Boot lehetővé teszi számunkra, hogy gyorsan és egyszerűen fejlesszünk Spring-alapú alkalmazásokat, minimalizálva a konfigurációt.

***A frontend és a backend közötti kommunikáció REST API-n keresztül történik.***
## 11. Tesztterv

A tesztelések célja a rendszer és komponensei funkcionalitásának teljes vizsgálata,
ellenőrzése a rendszer által megvalósított üzleti szolgáltatások verifikálása.
A teszteléseket a fejlesztői csapat minden tagja elvégzi.
Egy teszt eredményeit a tagok dokumentálják külön fájlokba.

### Tesztesetek

 | Teszteset | Elvárt eredmény | 
 |-----------|-----------------| 
 | ... | ... |

### A tesztelési jegyzőkönyv kitöltésére egy sablon:

**Tesztelő:** Vezetéknév Keresztnév

**Tesztelés dátuma:** Év.Hónap.Nap

Tesztszám | Rövid leírás | Várt eredmény | Eredmény | Megjegyzés
----------|--------------|---------------|----------|-----------
például. Teszt #01 | Regisztráció | A felhasználó az adatok megadásával sikeresen regisztrálni tud  | A felhasználó sikeresen regisztrált | Nem találtam problémát.
... | ... | ... | ... | ...

## 12. Telepítési terv

Fizikai telepítési terv: 
* Fizikai módon való telepítés nem szükséges az alkalmazásunk használatához.
  
Szoftver telepítési terv: 

***A szoftver webes felületéhez csak egy böngésző telepítése szükséges.***

* Windows - Microsoft Edge
* Linux - Mozilla Firefox
* Mac - Safari

**A webszerverre közvetlenül az internetről kapcsolódnak rá a kliensek. A weboldal URL címét szükséges ismerni és ezt beírni a böngésző címsorába.**

## 13. Karbantartási terv
***Figyelembe kell venni a felhasználók által jött visszajelzéseket a programmal kapcsolatban. Ha hibát talált, mielőbb orvosolni kell, lehet az:***

* Működéssel kapcsolatos.
* Kinézet, dizájnnal kapcsolatos.
