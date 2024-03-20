# Rendszerterv
## 1. A rendszer célja
* A rendszer célja egy webes felülettel rendelkező, munkáltató és munkavállaló közötti, kapcsolattartásra és munkalehetőségek hirdetésére/keresésére szolgáló weboldal működtetése.
* Ezen a felületen a munkáltató megkereshet munkavállalókat, akiket specifikus munkákra alkalmasnak talál és munkát ajánlhat nekik.
* A munkavállalók ezeket az ajánlatokat megtekinthetik, elfogadhatják, ha megfelel a követelményeiknek.
* Az álláskeresők elküldhetik jelentkezésüket a cégek által meghirdetett nyitott pozíciókra.
* A vállalkozások HR dolgozói a jelentkezők közül azonnal felvehetik a kapcsolatot az ígéretes jelöltekkel.
## 2. Projektterv

### 2.1 Projektszerepkörök, felelőségek:
   * Scrum master: Kaponya Martin
   * Product owner: Kaponya Martin
   * Üzleti szereplő: N/A
     
### 2.2 Projektmunkások és felelőségek:
   * Frontend: Bárdos Botond, Erdélyi Patrik, Kalas Gergő, Nagy Bálint, Koczka Gergő
   * Backend: Bárdos Botond, Erdélyi Patrik, Kalas Gergő, Nagy Bálint, Koczka Gergő
   * Tesztelés: Bárdos Botond, Erdélyi Patrik, Kalas Gergő, Nagy Bálint, Koczka Gergő
     
### 2.3 Ütemterv:

|Funkció                  | Feladat                                | Prioritás | Becslés (nap) | Aktuális becslés (nap) | Eltelt idő (nap) | Becsült idő (nap) |
|-------------------------|----------------------------------------|-----------|---------------|------------------------|------------------|---------------------|
|Követelmény specifikáció |Megírás                                 |         1 |             2 |                      2 |                2 |                   2 |             
|Funkcionális specifikáció|Megírás                                 |         1 |             2 |                      2 |                2 |                   2 |
|Rendszerterv             |Megírás                                 |         1 |             2 |                      2 |                2 |                   2 |
|Weboldal                 |Képernyőtervek elkészítése              |         2 |             9 |                      9 |                1 |                   9 |
|Weboldal                 |Prototípus elkészítése                  |         3 |            28 |                     28 |                1 |                  28 |
|Weboldal                 |Alapfunkciók elkészítése                |         3 |            21 |                     21 |                1 |                  21 |
|Weboldal                 |Tesztelés                               |         4 |            21 |                     21 |                1 |                  21 |

### 2.4 Mérföldkövek:
   * Projektterv kidolgozása
   * Dokumentációk (specifikációk) véglegesítése
   * Prototípus átadása
   * Tesztelés és hibák kijavítása
   * Bemutatás

## 3. Üzleti folyamatok modellje

### 3.1 Üzleti szereplők
   * Megrendelők: Azok a szervezetek vagy egyének, akik informatikai termékeket vagy szolgáltatásokat igényelnek, például vállalatok, kormányzati szervek vagy magánszemélyek.
   * Informatikai szakemberek: Az informatika cég alkalmazottai, akik felelősek a szoftverfejlesztésért, rendszertervezésért, hálózatkezelésért és más informatikai tevékenységekért.
   * Beszállítók: Olyan vállalatok vagy egyének, akik informatikai hardvereket, szoftvereket vagy más technológiai eszközöket szállítanak az informatikai cég számára.
   * Partnerek: Olyan vállalatok vagy szervezetek, akikkel az informatikai cég stratégiai együttműködést folytat, például szoftverintegrátorok, hálózati szolgáltatók vagy tanácsadó cégek.

### 3.2 Üzleti folyamatok

   * Ügyféltámogatási folyamat: Ez a folyamat magában foglalja az ügyfelekkel való kommunikációt, problémák diagnosztizálását és megoldását, valamint az ügyfelek elégedettségének biztosítását.
   * Szoftverfejlesztési folyamat: Az informatikai cég által kínált szoftverek fejlesztésének és karbantartásának folyamata, amely magában foglalja a követelmények meghatározását, tervezést, fejlesztést, tesztelést és kiadást.
   * Projektmenedzsment folyamat: A projektmenedzsment folyamat során az informatikai cég koordinálja és irányítja az összes projektet, beleértve a határidők, költségvetés és erőforrások kezelését.
   * Értékesítési folyamat: Az informatikai cég által kínált termékek és szolgáltatások értékesítési folyamata, ideértve az értékesítési csatornák menedzselését, ajánlatok készítését, tárgyalásokat és szerződéskötést.
   * Beszerzési folyamat: Az informatikai cég számára szükséges technológiai eszközök, szoftverek és egyéb erőforrások beszerzésének folyamata, beleértve a beszállítókkal való kapcsolatfelvételt, ajánlatkérést és beszerzési döntéseket.

## 4. Követelmények

### Funkcionális követelmények

| ID | Megnevezés | Leírás |
| --- | --- | --- |
| K1 |Regisztráció| A felhasználó a felhasználói nevének, emailcímének és jelszavának megadásával regisztráljamagát. |
| K2 |Bejelentkezés| A felhasználó a megadott e-mail címe és jelszava alapján be tud jelentkezni a felületre.|
| K3 |Jogosultsági szintek| Munkáltató:munka meghirdetése, Munkavállaló: munkák böngészése |
| K4 |Felhasználó módosítása| A felhasználó módosítani tudja a saját felhasználó nevét.|
| K5 |Jelszó módosítása| A felhasználó módosítani tudja a jelszavát, a régi valamint újnak szánt jelszó megadásával.|
| K6 |Saját Profil|A felhasználó megtudja adni vagy módosíthatja a saját adatait.|
| K7 |Idővonal|A felhasználó álltal követett cégek munkalehetőségei jellenk meg.|
| K8 | Chat |Felhasználók közti kommunikációra szánt felület.|
| K9 |Kereső|A felhasználó az oldalon fellelhető cégek között tud keresni, különböző szűrési feltételek alapján.|

### Nemfunkcionális követelmények

| ID | Megnevezés | Leírás |
| --- | --- | --- |
| K3 |Jogosultsági szintek|Hozzáférési jogok megfelelő kezelése.|
| K10 |Teljesítmény, skálázhatóság|Gyors működés sok felhasználó egyidejű kiszolgálása során is.|
| K11 |Biztonság|A felhasználók adatainak védelme illetéktelen hozzáféréstől.|
| K12 |Felhasználói élmény|Könnyen átlátható felhasználóbarát felület a gyorsabb kezelhetőség érdekében.|
| K13 |Kompatibilitás|Különböző eszközök és böngészők támogatása, reszponzív design.|

### Támogatott eszközök
Bármely olyan eszköz, amelyen modern böngészők futtathatók, pl.: mobil eszközök (telefon, tablet, stb.) vagy asztali számítógépek.

## 5. Funkcionális terv

**Rendszerszereplők:**
  - **Felhasználó**

  **Rendszerhasználati esetek és lefutásaik:**
  - **Felhasználó**
    - **Megtekintheti a bejegyzéseket a feed-en**
    - **Törölheti/módosíthatja a korábban létrehozott bejegyzéseket**
    - **Megtekintheti a munkalehetőségeket, elfogadhatja/elutasíthatja**

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

## 7. Adatbázis terv

**Táblák**
   -**Feed**
      -**ID**
      -**Content**
      -**Date**
      -**Feed_Code**
      -**Title**
   -**Users**
      -**ID**
      -**Email**
      -**Job**
      -**Name**
      -**Password**
      -**Phone**
      -**Picture**
      -**User_Code**
      -**Indexes**
   -**Employers**
      **Work In Progress**

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
