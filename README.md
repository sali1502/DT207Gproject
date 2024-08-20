# Projektuppgift för kursen DT207G Backend-baserad webbutveckling

I detta repository finns kod för ett REST API byggt med Express. APIets syfte är hantera användaruppgifter (användarnamn och lösenord) för inlogg till en skyddad sida. Lösenordet hashas och token skickas med vid inlogg. APIet hanterar även funktion att kunna lägga till, uppdatera och radera mat och dryck i en meny. Vidare finns en meddelandefunktion där meddelanden kan läggas till, skrivas ut och raderas.<br>
Funktionalitet för detta skapas med CRUD (Create, Read, Update, Delete).<br>

## Installation, databas
APIet använder MongoDB Atlas databas. Klona ner källkodsfilerna, kör kommando npm install för att installera nödvändiga npm-paket.<br>
Kör installations-skriptet install.js. Installations-skriptet skapar en databastabell enlig nedan:

<table>
<tr>
  <th>Tabell-namn</th>
  <th>Fält</th>
</tr>
<tr>
  <td>users</td>
  <td><strong>id</strong>(ObjectId), <strong>username</strong>(String), <strong>password</strong>(String), <strong>created</strong>(Date).
</tr>
<tr>
  <td>starters</td>
  <td><strong>id</strong>(ObjectId), <strong>name</strong>(String), <strong>description</strong>(String), <strong>price</strong>(String).
</tr>
<tr>
  <td>sallads</td>
  <td><strong>id</strong>(ObjectId), <strong>name</strong>(String), <strong>description</strong>(String), <strong>price</strong>(String).
</tr>
<tr>
  <td>warms</td>
  <td><strong>id</strong>(ObjectId), <strong>name</strong>(String), <strong>description</strong>(String), <strong>price</strong>(String).
</tr>
<tr>
<td>desserts</td>
  <td><strong>id</strong>(ObjectId), <strong>name</strong>(String), <strong>description</strong>(String), <strong>price</strong>(String).
</tr>
 <tr>
<td>drinks</td>
  <td><strong>id</strong>(ObjectId), <strong>name</strong>(String), <strong>description</strong>(String), <strong>price</strong>(String).
</tr>
 <tr>
<td>messages</td>
  <td><strong>id</strong>(ObjectId), <strong>name</strong>(String), <strong>email</strong>(String), <strong>message</strong>(String), <strong>created</strong>(Date).
</tr> 
</table>

## Användning
Nedan finns beskrivet hur man kan nå APIet på olika vis.<br>

#### Autentisering
Objekt skickas i JSON-format med följande struktur:<br>

```
   {
     "username": "xxx",
     "password": "xxx"
   }
```

<table>
<tr>
  <th>Metod</th>
  <th>Ändpunkt</th>
  <th>Beskrivning</th>
</tr>
<tr>
  <td>POST</td>
  <td>/register</td>
  <td>Registrerar och lagrar användare (användarnamn, lösenord och tid för skapandet av användare).</td>
</tr>
<tr>
  <td>POST</td>
  <td>/login</td>
  <td>Jämför användare i databas med användare från loginformulär, jämför hashade lösenord och skickar med token.</td>
  </tr>
<tr>
  <td>GET</td>
  <td>/admin</td>
  <td>Autenticerar användare och skickar vidare till skyddad sida.</td>
</tr>
</table><br>


#### Meny
Objekt skickas i JSON-format med följande struktur och ändpunkter:<br>

/starters<br>
/sallads<br>
/warms<br>
/desserts<br>
/drinks<br>

```
   {
     "name": "Elies",
     "description": "Stora svarta och gröna oliver",
      "price": "65"
   }
```

<table>
<tr>
  <th>Metod</th>
  <th>Ändpunkt</th>
  <th>Beskrivning</th>
</tr>
 <tr>
  <td>POST</td>
  <td>/starters</td>
  <td>Lägger till och lagrar smårätter.</td>
  </tr>
<tr> 
<tr>
  <td>GET</td>
  <td>/starters</td>
  <td>Hämtar smårätter.</td>
</tr>
  <td>PUT</td>
  <td>/starters</td>
  <td>Ändrar smårätter.</td>
</tr>
<tr>
  <td>DELETE</td>
  <td>/starters</td>
  <td>Raderar smårätter.</td>
</tr>
</table><br>


#### Meddelanden
Objekt skickas i JSON-format med följande struktur:<br>

```
   {
     "name": "John Doe",
     "email": "john.doe@email.com",
     "message": "Hello!",
   }
```

<table>
<tr>
  <th>Metod</th>
  <th>Ändpunkt</th>
  <th>Beskrivning</th>
</tr>
 <tr>
  <td>POST</td>
  <td>/messages</td>
  <td>Lägger till och lagrar meddelanden.</td>
  </tr>
<tr> 
<tr>
  <td>GET</td>
  <td>/messages</td>
  <td>Hämtar meddelanden.</td>
</tr>
<tr>
  <td>DELETE</td>
  <td>/messages</td>
  <td>Raderar meddelanden.</td>
</tr>
</table>


