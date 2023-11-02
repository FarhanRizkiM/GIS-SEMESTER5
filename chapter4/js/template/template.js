export let URLGeoJson = "https://us-central1-lofty-mark-401904.cloudfunctions.net/GISSMT5PROJECT";
export let urlPostGCF = "https://asia-southeast2-lofty-mark-401904.cloudfunctions.net/PostGIS";
export let tableTag = "tr";
export let tableRowClass = "content is-small";
export let tableTemplate = `
<td>#NAME#</td>
<td >#KORDINAT#</td>
<td>#TYPE#</td>
`
export const clickpopup = `
Long : #LONG#<br>
Lat  : #LAT#<br>
X   : #X#<br>
Y   : #Y#<br>
HDMS : #HDMS#<br>
`