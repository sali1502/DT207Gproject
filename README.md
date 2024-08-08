# Projektuppgift för kursen DT207G Backend-baserad webbutveckling

I detta repository finns kod för ett REST API byggt med Express.<br>
APIets syfte är hantera användaruppgifter (användarnamn och lösenord) för inlogg till en skyddad sida. Lösenordet hashas och token skickas med vid inlogg.<br>
Denna funktionalitet skapas med CRUD (Create, Read, Update, Delete).<br>

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
</table>

## Användning
Nedan finns beskrivet hur man kan nå APIet på olika vis:

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

Ett objekt med användaruppgifter skickas som JSON med följande struktur:

```
   {
     "username": "Admin",
     "password": "Admin"
   }
```
