# Követelmény specifikáció
## 1. Áttekintés
Rendszerünk célja egy webes applikáció ami lehetővés teszi a felhasználók számára az egyszerű munkakeresést, és tájékozódást a munkaerőpiac jelenlegi helyzetéről. Az oldal "Free of charge", azaz ingyenesen használható és a felületen a cégek által meghirdetett pozíciókra lehet jelentkezni. Egyszerűsíti a munkakeresést, mivel az oldalon tárolhatóak a felhasználó által feltöltött önéletrazjok, végzettségek, és munkatapasztalatok.

## 2. Jelenlegi helyzet
Napjainkban, a rohamosan fejlődő világban egyre nagyobb szükség van olyan szoftverekre amik könnyítik, és segítik az embereknek a mindennapi teendőiket. Ezzel az alkalmazással szeretnénk nekik segíteni olyan területen, hogy bámiféle komolyabb erőfeszítés nélkül, könnyedén vadászhassanak jobbnál jobb munkalehetőségek után mindezt úgy, hogy közben a teendőiket megszakítás nélkül végezhessék.

## 3. Vágyálom rendszer
Rendszerünk célja hogy a felhasználók egyszerűen otthonról, iskolából, kávézóból, esetleg a jelenlegi munkahelyükről(amit nem kedvelnek), könnyedén kereshessenek és jelentkezzenek egy másik, elvárásaikhoz megfelelő munkahelyre jelentkezhessenek.

## 4. Jelenlegi üzleti folyamatok modellje
| 4.1 -- Főoldal  | 4.2 -- Profil | 4.3 -- Munkák | 4.4 -- Csevegés |
|  :----------    |  ----------   |  -----------  |  -------------  |
| 4.1.1 --        | 4.2.1 --      | 4.3.1 --      | 4.4.1 --        |
| 4.1.2 --        | 4.2.2 --      | 4.3.2 --      | 4.4.2 --        |
| 4.1.3 --        | 4.2.3 --      | 4.3.3 --      | 4.4.3 --        |
| 4.1.4 --        | 4.2.4 --      | 4.3.4 --      | 4.4.4 --        |
| 4.1.5 --        | 4.2.5 --      | 4.3.5 --      | 4.4.5 --        |

## 5. Igényelt üzleti folyamatok modellje
Célunk egy egyszerűen kezelhető online platform létrehozása a munkakeresés terén, amely könnyedén integrálható a jelenleg elérhető széles körű lehetőségek közé. A felület minimalizálja mind a munkáltatók, mind pedig a munkavállalók adminisztratív terheit, biztosítva egy intuitív profilkezelést a munkavállalók számára. Emellett lehetőséget biztosítunk a közvetlen kommunikációra a munkáltatók és munkavállalók között, megkönnyítve ezzel az állásajánlatokra való jelentkezést és az időpont-egyeztetéseket. Összességében a platformunk segíti a hatékonyabb munkaerő-piaci kapcsolatok kialakítását mindkét fél számára.

## 6. Követelménylista

| Modul | ID | Név | Leírás |
| :---: | --- | --- | --- |
| Jogosultság | K1 | Regisztrációs felület | A felhasználó a felhasználói nevének, emailcímének és jelszavának megadásával regisztrálja magát. |
| Jogosultság |K2|Bejelentkezési felület| A felhasználó a megadott e-mail címe és jelszava alapján be tud jelentkezni a felületre.|
| Jogosultság |K3|Jogosultsági szintek|Munkáltató:munka meghirdetése , Munkavállaló: munkák böngészése|
|Modifikáció|K4|Felhasználó módosítása| A felhasználó módosítani tudja a saját felhasználónevét.|
|Modifikáció|K5|Jelszó módosítása| A felhasználó módosítani tudja a jelszavát, a régi valamint újnak szánt jelszó megadásával.|
|Felület|K6|Saját Profil|A felhasználó megtudja adni a saját adatait.|
|Felület|K7|Idővonal|A felhasználó álltal követett cégek munkalehetőségei jelennek meg.|
|Felület|K8| Chat |A munkáltató és a munkavállaló közti kommunikációra szánt felület.|
|Felület|K9|Kereső| A felhasználó az oldalon fellelhető cégek között tud keresni, akár név megadásával is.|

## 7. Fogalomszótár

* Jogosultság: A felhasználók által elérhető funkciókat és azokhoz tartozó hozzáféréseket és engedélyeket kezeli.
* Modifikáció: Az adatok vagy beállítások módosítását és frissítését kezeli.
* Felület: Az alkalmazás vagy rendszer kezelőfelületeit és azok funkcióit kezeli.
* Kereső: Egy olyan funkciót jelent, amely lehetővé teszi a felhasználók számára a kívánt információk gyors megtalálását egy adott adatbázisban vagy rendszerben.
