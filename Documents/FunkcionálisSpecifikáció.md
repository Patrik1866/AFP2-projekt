# Funkcionális specifikáció
## 1. Jelenlegi helyzet leírása
Az online munkakeresési piac dinamikusan növekszik a digitalizáció és az internet elterjedése miatt, ami azt eredményezi, hogy egyre több munkaadó és munkavállaló vesz részt az online munkakeresési folyamatban.
Jelenleg számos munkakereső platform létezik, amelyek különböző szolgáltatásokat és funkciókat kínálnak, így a verseny kiéleződik a legjobb jelentkezők és munkahelyek megtalálása érdekében.
Az új és innovatív munkakereső oldalak egyre inkább felkeltik a figyelmet a piaci résztvevők körében, így lehetőség nyílik az új piaci szereplőknek arra, hogy versenybe szálljanak a már meglévő platformokkal.
A munkaadók és munkavállalók elvárásai folyamatosan változnak a technológia fejlődésével és a társadalmi trendekkel, így az egyszerű és hatékony munkakeresési folyamatokra való igény növekszik, valamint a személyre szabott ajánlatok és szűrési lehetőségek iránti igény.
A munkakereső oldalak versenye nemcsak helyi, hanem nemzetközi szinten is jelentős, ezért fontos figyelembe venni a helyi piac sajátosságait és igényeit a munkakereső oldal tervezésekor.
## 2. Vágyálomrendszer leírása
Az idővonalon keresztül a felhasználók könnyen és hatékonyan kezelhetik saját profiljukat, beleértve a kompetenciákat, személyes adatokat, profilképet és iskolákat. Emellett lehetőség van üzenetváltásra más felhasználókkal, valamint hálózatépítésre és cégek követésére is. Az otthoni oldalon az idővonal mellett a felhasználók profil ikonját, a chat lehetőségét és a barátokat találják, míg a saját profil oldalon további profilszerkesztési lehetőség áll rendelkezésre. Az üzenetküldés funkció lehetővé teszi a chat-et és az üzenetváltást, míg a munkakeresési részlegen könnyen kereshetnek és szűrhetnek a felhasználók a rendszerben elérhető munkalehetőségek között. Ezen szolgáltatások együttesen segítik a felhasználókat abban, hogy hatékonyan használják és kihasználják a munkakereső oldal által kínált lehetőségeket.
## 3. Jelenlegi üzleti folyamatok modellje
A jelenleg rendelkezésre álló munkakeresési, és munka kínálásra használható oldalak az internet, melyek tele vannak nagyon sok felslegesnek vélt funkcióval. Amik csak a felhasználó idejét és türelmét igényli mire ki tud rajta igazodni, hogy mégis milyen funkciókra van szüksége. Valamint maga a felület sem a legátláthatóbb, mely az előbb említett problémákat hozzák elő. Továbbá ezeken az oldalakon nincs megfelelő felület a munkáltató és a munkavállaló közti kommunikációra.

## 4. Igényelt üzleti folyamatok modellje

Azért hogy egyszerűbbé tegyük a munkáltatók valamint a munkavállalók feladatát, létrehozunk egy olyan oldalt mely a kornak megfelelően helyt tud állni a munkakeresési oldalak széles választéka közt. Egyszerűbb lesz mind a munkáltató, mind a munkavállaló szemszögéből a felület kezelése. A munkavállaló számára a saját profil kezelése jó val egyszerűbb lesz, nem kell megannyi sokszor feleslegesnek vélt adatot megosztania magáról. Lehetőséget biztosítunk a munkavállaló és munkáltató közti oldalon történő kommunikációra, mely megkönnyítheti a későbbi időpontegyeztetéseket.


## 5. Követelménylista

| Modul | ID | Név | Leírás |
| :---: | --- | --- | --- |
| Jogosultság | K1 | Regisztrációs felület | A felhasználó a felhasználói nevének, emailcímének és jelszavának megadásával regisztráljamagát. |
|Jogosultság |K2|Bejelentkezési felület| A felhasználó a megadott e-mail címe és jelszava alapján be tud jelentkezni a felületre.|
| Jogosultság |K3|Jogosultsági szintek|Munkáltató:munka meghirdetése , Munkavállaló: munkák böngészése|
|Modifikáció|K4|Felhasználó módosítása| A felhasználó módosítani tudja a saját felhasználó nevét.|
|Modifikáció|K5|Jelszó módosítása| A felhasználó módosítani tudja a jelszavát, a régi valamint újnak szánt jelszó megadásával.|
|Felület|K6|Saját Profil|A felhasználó megtudja adni a saját adatait.|
|Felület|K7|Idővonal|A felhasználó álltal követett cégek munkalehetőségei jellenk meg.|
|Felület|K8| Chat |A munkáltató és a munkavállaló közti kommunikációra szánt felület.|
|Felület|K9|Kereső| A felhasználó az oldalon felelhető cégek között tud keresni, akár név megadásával is.|

## 6. Használati esetek
* Az admin ellenőrizheti a munkalehetőségeket amiket a munkáltatók feltöltenek.
* Már huzamosabb ideje inaktív felhasználók törlése.
* A munkáltató saját munkalehetőségeket tölthet fel kategóriára bontva, a munkavállaló pedig ezek szerint böngészhet közöttük.

## 7. Megfeleltetés, hogyan fedik le a használati eseteket a követelményeket

* Regisztrációs felület (K1): A felhasználóknak lehetőségük van regisztrálni a weboldalra, megadva a felhasználói nevet, az e-mail címet és a jelszót.
* Bejelentkezési felület (K2): A regisztrált felhasználók be tudnak jelentkezni az e-mail címük és jelszavuk megadásával.
* Jogosultsági szintek (K3): A rendszer két jogosultsági szintet tartalmaz: munkáltatói és munkavállalói szintet, amelyek különböző funkciókat biztosítanak.
* Felhasználó módosítása (K4): A felhasználóknak lehetőségük van módosítani a felhasználói nevüket a profiljukban.
* Jelszó módosítása (K5): A felhasználók képesek módosítani a jelszavukat a profiljukban, megadva a régi és az új jelszót.
* Saját Profil (K6): A felhasználók részletes adatokat tudnak megadni a profiljukban, ideértve a kompetenciákat, személyes adatokat, profilképet és iskolákat.
* Idővonal (K7): A felhasználók látják a követett cégek által hirdetett munkalehetőségeket az idővonalukon.
* Chat (K8): A platformon belül lehetőség van a munkáltatók és a munkavállalók közti kommunikációra szánt chat funkció használatára.
* Kereső (K9): A felhasználók kereső funkciót használhatnak az oldalon szereplő cégek között, akár név alapján is.

## 8. Képernyőtervek

![képnév](gitlink ahol a kép van)

## 9. Forgatókönyvek

-**Forgatókönyv 1: Munkavállaló regisztrációja**
    **A munkavállaló ellátogat az oldalra és kiválasztja a "Regisztráció" lehetőséget.**
    **Kitölti az űrlapot, megadva a felhasználónevét, e-mail címét és jelszavát.**
    **A rendszer elküld egy megerősítő e-mailt a regisztráció véglegesítéséhez.**
    **A felhasználó megerősíti az e-mail címét a kapott link segítségével.**
    **Sikeresen regisztrálva bejelentkezik a weboldalra.**

-**Forgatókönyv 2: Munkáltató munkalehetőséget hirdet**
    **A munkáltató bejelentkezik a weboldalra.**
    **A "Munkalehetőség hirdetése" opciót választva kitölti az űrlapot a munkalehetőség részleteivel.**
    **Az űrlap elküldése után a munkalehetőség megjelenik az idővonalon és a keresési eredmények között.**

-**Forgatókönyv 3: Munkavállaló üzenetet küld egy munkáltatónak**
    **A munkavállaló megtalál egy érdekes munkalehetőséget az idővonalon vagy a keresési eredmények között.**
    **Kiválasztja a munkalehetőséget, majd az ott található "Kapcsolatfelvétel" gombot.**
    **Kitölti az üzenet űrlapot és elküldi azt a munkáltatónak.**
    **A munkáltató válaszol a felhasználónak a chat felületen keresztül.**

## 10. Funkció - követelmény megfeleltetése

| Id | Követelmény | Funkció |
| :---: | --- | --- |
| K4 | Felhasználó módosítása | A felhasználó a saját profiljában módosíthatja a felhasználónevét. |
| K5 | Jelszó módosítása | A felhasználó a saját profiljában módosíthatja a jelszavát, megadva a régi és az új jelszót. |

## 11 Fogalomszótár

* Digitalizáció: A folyamat, amely során analóg adatokat, információkat vagy folyamatokat átalakítanak digitális formátumba, hogy azokat könnyebben tárolhassák, kezelhessék és továbbíthassák.
* Munkakereső platform: Olyan webes vagy mobilalkalmazás, amely lehetővé teszi a munkaadók és munkavállalók számára, hogy találkozzanak és kommunikáljanak egymással, illetve megtalálják vagy kínálják a munkalehetőségeket.
* Hálózatépítés: Az a tevékenység, amely során egy személy vagy vállalkozás kapcsolatokat alakít ki másokkal az üzleti vagy szakmai előnyök érdekében.
* Kommunikációs felület: Olyan interfész vagy eszköz, amely lehetővé teszi a felhasználók számára a közvetlen kommunikációt, például üzenetküldést vagy csevegést.
* Adminisztratív terhek: Azok a feladatok és kötelezettségek, amelyekkel egy személy vagy vállalatnak meg kell birkóznia az üzleti vagy adminisztratív folyamatok során.