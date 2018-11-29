# Hópverkefni 2

## Hvernig keyra skal verkefnið:

* Fyrst skal gengið úr skugga um að git sé installað í tölvunni.

* Næst skal gera nýtt local repository með því að búa til nýja möppu, opna git í þeirri möppu og skrifa inn skipunina "git init" og því næst "git clone" og vísa í  eftirfarandi slóð: 
    
    ```bash
    https://github.com/JohannSJohannsson/hopverkefni2

Það virkar líka yfirleitt að gera "git clone" fyrst án þess að hafa gert "git init".

* Þá skal opna möppuna inni í Visual studio code eða öðru svipuðu forriti.

* Svo þarf að setja upp nodejs (ef það er ekki nú þegar sett inn) af þessari slóð: https://nodejs.org/en/, annað hvort nýjustu útgáfu eða útgáfu 8.12.0.

* Til að keyra forritin í möppunni skal slá inn eftirfarandi skipanir:

    ```bash
    npm install
    npm run dev
    npm test (keyrir eslint og stylelint)

* Ef það virkar ekki að install-a einhverjum af þeim forritum sem eru í devDependencies í package.json skal prófa að skoða villur í git ná í global útgáfu af því forriti sem vantar og run-a svo dev aftur.

* Við mælum með að bæta við stylelint og eslint extension í Visual studio code.

* Ef ekki er notað eslint eða stylelint extension er hægt að villuprófa með skipuninni:

    ```bash
    npm test -s

## Lýsing

* Verkefnið er allt geymt inni í möppu sem ber heitið "hopverkefni2" og inni í henni eru eftirfarandi skrár:
     ```bash
     Mikilvægar skrár:
     
     index.html
     fyrirlestur.html
     grid.css
     README.md
     lectures.json
     package.json
     package-lock.json

     Möppur:
     dist
     src
     img
     
     Hjálpar skrár:

     .editorconfig
     .eslintrv.js
     .gitattributes
     .gitignore
     .stylelintrc
     babel.config.js
     rollup.config.js

     Möppur:
     node_modules
     utlit

* Inni í dist möppunni má finna bundle.js og styles.css. Í bundle.js hefur babel sameinað allar javascript skipanirnar okkar sameinast úr möppunni /src/lib í eitt .js skjal og keyrir verkefnið. Sama má segja um styles.css skjalið en þar sameinar sass allar scss skrár úr /src/styles í eitt .css skjal.

* Í img möppu má finna myndirnar sem eru á síðunum.

* Við gerðum verkefnið þannig að við bjuggum til javascript skipanir sem búa til html eða verka á html-ið og þegar það virkaði þá bjuggum við til css fyrir það efni. Þá skipulögðum við hvaða element myndi þurfa sér .js skrá eða sér .scss skrá með tilliti til hvernig það element þurfti að haga sér. Við reyndum að hafa það þannig að stórir hlutir verkefnisins, t.d. takkarnir eða lectures síðurnar fengu sér css og .js skrá svo hægt sé að hafa betri yfirsýn yfir verkefnið og auðveldara að lagfæra.

## Upplýsingar um þá sem unnu að verkefninu

* Arnþór Guðmundsson - arg49
* Jóhann Sigurður Jóhannsson - jsj13
* Páll Andri Sveinsson - pas222
* Sölvi Hrafn Sveinsson - shs29 

Jóhann sá um skipulagningu og uppsetningu til að byrja með, svo tók Arnþór við og gerði forsíðu að miklu leiti tilbúna og svo unnu Jóhann og Arnþór saman að helstu virkni síðunar. Sölvi og Páll sáu um takka og fót. Sá sem skrifar þetta README skjal er Jóhann.

# Verkefnalýsing frá kennara:
Verkefnið felst í því að smíða prótótýpu af fyrirlestravef fyrir vefforritun. Gefin eru gögn sem unnin eru uppúr námsefni vetrarins.

Gefnar eru [fyrirmyndir](utlit/) í `500px` og `1500px` án grindar ásamt `1500px` með grind. Allt efni skal skalast snyrtilega á milli.

## Almennt

Gögn eru gefin í `lectures.json` sem sækja skal með _ajax_ virkni. Keyra verður verkefnið með `browser-sync` til að það virki.

Efni síðu skal ekki vera breiðara en `1200px`. Litir og myndir í haus skulu fylla út í allt lárétt pláss. Yfir myndum er 60% gegnsær hvítur litur. Myndir fyrir hvern fyrirlestur eru skilgreindir í `json` skrá.

Grunn leturstærð er 16px og fylgja allar aðrar leturgerðir eftirfarandi skala: `16 24 32 48`.

Litapalletta fyrir vef er `#000`, `#999`, `#aaa`, `#ccc`, `#2d2`, `#1a1`, `#fcffd2` og `#cc9694`.

Letur fyrir meginmál er Lora, Times New Roman eða serif letur.
Letur fyrir fyrirsagnir er Roboto Mono, Courier New eða monospace.

Flest allt er sett upp í 12 dálka grind með `20px` gutter.

Öll bil eru hálft, heilt, tvöfalt eða þrefalt margfeldi af gutter. Hægt er að nota reglustiku tól (t.d. http://www.arulerforwindows.com/ eða http://www.pascal.com/software/freeruler/) til að finna nákvæmar stærðir en mestu skiptir að lausn svipi til en sé ekki nákvæmlega eins og fyrirmynd.

Allar hreyfingar gerast á `300ms` með `ease-in-out` hröðunarfalli. Hreyfingar eru þegar svimað er yfir fyrirlestri í lista og síunar tökkum.

## Forsíða

Forsíða inniheldur lista af öllum fyrirlestrum. Fram kemur hvort búið sé að klára fyrirlestur eða ekki. Nota skal `✓` til að tákna að fyrirlestri séð lokið, sjá að neðan hvernig virkni er.

Fyrir ofan lista skulu vera þrír takkar fyrir hvern af flokkunum: `HTML`, `CSS` og `JavaScript`. Í byrjun er engin takki virkur en um leið og takki er virkur skal aðeins sýna fyrirlestra í þeim flokk og takki litaður með `#2d2`. Ef fleiri takkar eru virkjaðir skal einnig sína þá fyrirlestra. Ef allir takkar eru virkir sést það sama og ef allir eru óvirkir—allir fyrirlestrar.

Þegar smellt er á fyrirlestur er farið yfir á `fyrirlestur.html?slug=<slug>` þar sem `<slug>` er _slug_ fyrir fyrirlesturinn, t.d. `fyrirlestur.html?slug=html-sagan`. Hægt er að nota `URLSearchParams` og `window.location.search` til að vita hvaða fyrirlestur átt er við á `fyrirlestur.html` síðu.

## Fyrirlestur

Fyrir hvern fyrirlestur skal birta haus og allt efni fyrirlesturs á eftir honum. Í haus kemur fram flokkur og titill.

Efni fyrirlesturs er geymt í fylki og skal birta það í sömu röð og það er skilgreint. Útbúa þarf birtingu fyrir hverja einingu eftir útliti.

Neðst er takki til að merkja fyrirlestur kláraðann og hlekkur til að fara til baka.

### Kláraður fyrirlestur

Ef fyrirlestur er merktur kláraður skal sýna `✓ Fyrirlestur kláraður` í `#2d2`. Annars `Klára fyrirlestur`. Þegar fyrirlestur er kláraður skal vista upplýsingar um það í `localStorage` og birta í lista og á fyrirlestra síðu.

Nota skal `slug` sem auðkenni yfir kláraða fyrirlestra.

## Fyrirlestragögn

`lectures.json` inniheldur fylki af fyrirlestrum sem birta skal. Hver fyrirlestur getur haft:

* `slug`, notað til að hlekkja á fyrirlestur
* `title`, titill fyrirlesturs
* `category`, flokkur fyrirlesturs
* `image`, mynd í hausi fyrirlesturs, má sleppa, þá skal birta gráan lit í staðinn
* `thumbnail`, mynd á yfirliti fyrirlestra, má sleppa, þá skal birta gráan lit í staðinn
* `content`, fylki af efni fyrirlesturs

Fyrir efni fyrirlesturs er efni alltaf með:

* `type`, gerð efnis
* `data`, gögn efnis

þar sem `type` getur verið:

* `youtube`, `data` inniheldur hlekk á youtube myndband
* `text`, `data` inniheldur gögn þar sem `\n` merkir á milli málsgreina, þ.e.a.s. texta skal birta innan `<p>`, skipt á `\n`
* `quote`, `data` inniheldur tilvitnun, aukalega getur verið `attribute` með þeim sem vitnað er í
* `image`, `data` inniheldur slóð á mynd, aukalega getur verið `caption` með texta með mynd
* `heading`, `data` inniheldur fyrirsögn
* `list`, `data` inniheldur fylki af textum í lista
* `code`, `data` inniheldur kóða þar sem bil og nýjar línur skipta máli

Athugið að meira efni mun bætast við það sem gefið er í byrjun. Virkni ætti að ráða við hvaða efni sem er í hvaða formi sem er, svo lengi sem það fylgir reglum að ofan.

## Hópavinna

Verkefnið skal unnið í hóp með þremur einstaklingum. Hafið samband við kennara ef ekki er mögulegt að vinna í hóp.

Notast skal við Git og GitHub. Engar zip skrár með kóða ættu að ganga á milli í hópavinnu, heldur á að „committa“ allan kóða og vinna gegnum Git.

## Lýsing á verkefni

`README.md` skrá skal vera í rót verkefnis og innihalda:

* Upplýsingar um hvernig keyra skuli verkefnið
* Lýsingu á uppsetningu verkefnis, hvernig því er skipt í möppur, hvernig CSS og JavaScript er skipulagt og fleira sem á við
* Upplýsingar um alla sem unnu verkefni
* Leyfilegt er að halda eftir þessari verkefnalýsingu en hún skal þá koma _á eftir_ ykkar lýsingu

## Tæki og tól

Eftirfarandi er sett upp í verkefni:

* `.stylelintrc` með upplýsingum um hvernig stylelint eigi að haga sér. Setja þarf upp `stylelint-config-primer` pakkann
* `.eslintrc` skrá sem segir til um hvernig lint fyrir JavaScript skrár skuli háttað
* `.gitignore` sem hunsar algengar skrár, [sjá nánar](https://help.github.com/ignore-files/)
  - Allt undir `./dist` hunsað sem þýðir að það verður _ekki_ checkað inn. Það er gert vegna þess að þær skrár eru útbúnar af tólum þegar verkefni er keyrt.
* `.gitattributes` sem kemur í veg fyrir ósamræmi sem geta komið upp þegar unnið er á milli stýrikerfa
* `.editorconfig` sem samræmir notkun á tabs og spaces, bilum [og fleira](https://editorconfig.org/)
* `grid.css` til að sjá grid sem fyrirmynd er unnin eftir
* `src/` mappa með
  - `styles/` undirmöppu með `styles.scss` grunni
  - `lib/` undirmappa sem gæti innihaldið JavaScript kóða auk tillögu að grunni fyrir virkni á forsíðu
  - `index.js` skrá sem vísar í `lib/`
* `dist/` mappa sem ætti að innihalda _þýddar_ sass og JavaScript skrár
* `img/` með öllum myndum sem þarf í verkefnið
* `package.json` hefur uppsett script ásamt dependencies
  - `eslint` til að keyra eslint
  - `stylelint` til að keyra stylelint
  - `test` til að keyra bæði `eslint` og `stylelint`
  - `browser-sync` til að keyra verkefni, bæta þarf við skrám sem vaktaðar eru
  - `sass` til að keyra fyrstu þýðingu
  - `sass-watch` til að fylgjast með sass skrám og þýða
  - `dev` til að keyra `sass` og `browser-sync`

Setja þarf upp

* `rollup` til að pakka saman JavaScript kóða
* `babel` til að _transpila_ kóða

og bæta við í tól að ofan.

## Mat

* 30% - `README` eftir forskrift, tæki og tól uppsett. Snyrtilegt, gilt (skv. eslint) JavaScript. Snyrtilegt, gilt (skv. stylelint) CSS/Sass, gilt og aðgengilegt HTML. Git notað
* 30% – Yfirlitssíða með síu
* 30% – Fyrirlestrarsíða útfærð með efni
* 10% – Hægt að skrá að fyrirlestur sér kláraður

## Sett fyrir

Verkefni sett fyrir á Uglu föstudaginn 9. nóvember 2018.

## Skil

Einn aðili úr hóp skal skila fyrir hönd allra og skila skal undir „Verkefni og hlutaprófa“ á Uglu í seinasta lagi fyrir lok dags fimmtudaginn 29. nóvember 2018, seinustu dæmatímar eru þann fimmtudag.

Skil skulu innihalda:

* Nöfn allra í hóp ásamt notendanafni
* Slóð á GitHub repo fyrir verkefni, og dæmatímakennurum skal hafa verið boðið í repo ([sjá leiðbeiningar](https://help.github.com/articles/inviting-collaborators-to-a-personal-repository/)). Notendanöfn þeirra eru `arnar44`, `gorri4`, `mimiqkz`, `hinriksnaer`, `gunkol`, `freyrdanielsson` og `osk`
* Slóð á verkefnið keyrandi á vefnum

## Einkunn

Sett verða fyrir tíu minni verkefni þar sem átta bestu gilda 3,5% hvert, samtals 28% af lokaeinkunn.

Sett verða fyrir tvö stærri verkefni þar sem hvort um sig gildir 11%, samtals 22% af lokaeinkunn.

## Myndir

Myndir frá:

* https://unsplash.com/photos/xekxE_VR0Ec
* https://unsplash.com/photos/C4G18Paw0d4
* https://unsplash.com/photos/iar-afB0QQw

---

> Útgáfa 0.2

### Útgáfusaga

| Útgáfa | Lýsing                                |
|--------|---------------------------------------|
| 0.1    | Fyrsta útgáfa                         |
| 0.2    | Setja inn auka efni í `lectures.json` |
