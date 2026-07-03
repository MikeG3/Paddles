const map = L.map('map').setView([46.5, -81.1], 6);


/* ========================================= */
/*               INITIAL MAP                 */
/* ========================================= */
L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        maxZoom: 18
    }
).addTo(map);

/* ========================================= */
/* Algonquin Park */
/* ========================================= */
var algonquinMarker = L.marker([45.533712, -78.704942])
    .addTo(map)
    .bindPopup(`
    <h3>Algonquin Park</h3>
    <p>Where the inspiration all started and I returned decades later</p>
`);

var timberBayMarker = L.marker([45.636095, -82.224167])
    .addTo(map)
    .bindPopup(`
    <h3>Timber Bay Nature Preserve</h3>
    <p>On the open shores of the Lake Huron side of Manitoulin Island, this was a destination for a day paddle from Providence Bay I enjoyed when the weather permitted</p>
`);

/* ========================================= */
/* Mauricie */
/* ========================================= */
var mauricieMarker = L.marker([46.660477, -73.018113])
    .addTo(map)
    .bindPopup(`
    <h3>Mauricie National Park</h3>
    <p>First kayak camping trip location</p>
`);

/* ========================================= */
/* SAGUENAY */
/* ========================================= */
var saguenayMarker = L.marker([48.298850, -70.333945])
    .addTo(map)
    .bindPopup(`
    <h3>Saguenay Fjord</h3>
    <p>My first experience paddling a fjord landscape.</p>
    <img src="images/gallery/saguenay/Epic_wide_angle_of_The_Fjords_of_the_Saguenay_river.webp" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* THOUSAND ISLANDS */
/* ========================================= */
var thousandIslandsMarker = L.marker([44.339, -76.028])
    .addTo(map)
    .bindPopup(`
    <h3>Thousand Islands</h3>
    <p>My first solo kayak camping adventure.</p>
    <img src="images/gallery/1000iSLANDS/mermaidISland.webp" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* BRUCE PENINSULA */
/* ========================================= */

/* ========================================= */
/* LIONS HEAD */
/* ========================================= */
var lionsHeadMarker = L.marker([44.988315, -81.250822])
    .addTo(map)
    .bindPopup(`
    <h3>Lions Head</h3>
    <p>A favorite destination of mine on the Bruce Peninsula</p>
    <img src="images/gallery/bruce/Lions_Head10.webp" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* DUNKS BAY */
/* ========================================= */
var dunksBayMarker = L.marker([45.249494, -81.643609])
    .addTo(map)
    .bindPopup(`
    <h3>Dunk's Bay</h3>
    <p>Where I first discovered clear emerald waters in Ontario</p>
    <img src="images/gallery/bruce/DunksBay.webp" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* DYERS BAY */
/* ========================================= */
var dyersBayMarker = L.marker([45.163133, -81.336435])
    .addTo(map)
    .bindPopup(`
    <h3>Dyer's Bay</h3>
    <p>A less visited access point on the Bruce Peninsula</p>
    <img src="images/gallery/bruce/DyersBay.webp" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* GROTTO */
/* ========================================= */
var grottoMarker = L.marker([45.245216, -81.524196])
    .addTo(map)
    .bindPopup(`
    <h3>The Grotto</h3>
    <p>A perfect destination for a day trip along the Bruce Peninsula</p>
    <img src="images/gallery/bruce/Grotto.webp" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/*Little COve */
/* ========================================= */
var littleCoveMarker = L.marker([45.249666, -81.611799,])
    .addTo(map)
    .bindPopup(`
    <h3>Little Cove</h3>
    <p>Accessible to non-paddlers, Little Cove is more than just a scenic cobble stone beach in the Bruce Peninsula National Park</p>
    <img src="images/gallery/bruce/Little Cove.webp" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* DRIFTWOOD COVE */
/* ========================================= */
var driftwoodCoveMarker = L.marker([45.243347, -81.575193])
    .addTo(map)
    .bindPopup(`
    <h3>Driftwood COve</h3>
    <p>Nestled between 2 access points, a quiet spot on the Bruce other than some tour boats and the occasional hiker</p>
    <img src="images/gallery/bruce/Kayak_break_in_Driftwood_cove_next_to_castle_like_shale_cliff.webp" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* BENJAMIN ISLANDS */
/* ========================================= */
var benjaminMarker = L.marker([46.089078, -82.252460])
    .addTo(map)
    .bindPopup(`
    <h3>Benjamin Islands</h3>
    <p>Multi-night trips, one of favourite destinations so far</p>
    <img src="images/adventures/Benjis2025.webp" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* SPANISH MARINA */
/* ========================================= */
var spanishMarinaMarker = L.marker([46.183668, -82.360327])
    .addTo(map)
    .bindPopup(`
    <h3>Spanish Marina</h3>
    <p>Access point for the Benjamin Islands and other North Channel adventures</p>
    <img src="images/gallery/northChannel/SpanishMarina.webp" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* MCBEAN HARBOR*/
/* ========================================= */
var mcbeanMarker = L.marker([46.131733, -82.192341])
    .addTo(map)
    .bindPopup(`
    <h3>Launch from McBean Harbor</h3>
    <p>Shortcut access point to the Benjamin Islands for my second trip</p>
    <img src="images/gallery/northChannel/McBean.webp" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* Fox Island - North Channel */
/* ========================================= */
var foxMarker = L.marker([46.115635, -82.226179])
    .addTo(map)
    .bindPopup(`
    <h3>Fox Islands</h3>
    <p>A labrynthe of rocks, islands, channels and pines</p>
    <img src="images/gallery/northChannel/Fox Island 2.webp" style="width:250px;border-radius:10px;">
`);


/* ========================================= */
/* ETCHES ISLAND */
/* ========================================= */
var etchesMarker = L.marker([45.970859, -81.385704])
    .addTo(map)
    .bindPopup(`
    <h3>Etches Island</h3>
    <p>Home for 2 nights, close to the access point, ended up being a Georgian Bay treasure</p>
    <img src="images/gallery/pei/Etches_Island_Crystals_2.webp" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* FOX ISLANDS */
/* ========================================= */
var foxISlandsMarker = L.marker([45.952074, -81.362052])
    .addTo(map)
    .bindPopup(`
    <h3>Fox Islands</h3>
    <p>One of the most incredible fresh water paddling destinations</p>
    <img src="images/gallery/pei/West_Fox_Island_Northern_View_Evening.webp" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* PHILLIP EDWARD ISLAND */
/* ========================================= */
var philipEdwardMarker = L.marker([45.980336, -81.288489])
    .addTo(map)
    .bindPopup(`
    <h3>Phillip Edward Island</h3>
    <p>Two words, paddler's paradise</p>
    <img src="images/gallery/pei/View From an Island During a Kayak Break 2.webp" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* WEST FOX ISLANDS */
/* ========================================= */
var westFoxMarker = L.marker([45.946689, -81.365105])
    .addTo(map)
    .bindPopup(`
    <h3>West Fox Island</h3>
    <p>One of the most epic islands and greatest kayaking experience to date</p>
    <img src="images/gallery/pei/West_Fox_Island_Wave_Shaped_Rock_Formations.webp" style="width:250px;border-radius:10px;">
`);
/* ========================================= */
/* SLY FOX ISLANDS */
/* ========================================= */
var slyFoxMarker = L.marker([45.953534, -81.366324])
    .addTo(map)
    .bindPopup(`
    <h3>Sly Fox Island</h3>
    <p></p>
    <img src="images/gallery/pei/Epic_View_From_Sly_Fox_Island.webp" style="width:250px;border-radius:10px;">
`);
/* ========================================= */
/* CENTER FOX ISLANDS */
/* ========================================= */
var centerFoxMarker = L.marker([45.950976, -81.357019])
    .addTo(map)
    .bindPopup(`
    <h3>CenterFox Island</h3>
    <p></p>
    <img src="images/gallery/pei/Center_Fox_Island.webp" style="width:250px;border-radius:10px;">
`);
/* ========================================= */
/* MARTINS ISLAND ISLANDS */
/* ========================================= */
var martinsIslandMarker = L.marker([45.954051, -81.354286])
    .addTo(map)
    .bindPopup(`
    <h3>Martin's Island</h3>
    <p>A large Island just east of the Fox Islands</p>
    <img src="images/gallery/pei/Wave_Shaped_Rocks_On_Martins_Island.webp" style="width:250px;border-radius:10px;">
`);
/* ========================================= */
/* SOLOMANS ISLANDS */
/* ========================================= */
/* ========================================= */
/* EAST DESJARDINS BAY ROCK */
/* ========================================= */
var eastDejardinsRockMarker = L.marker([45.956218, -81.298308])
    .addTo(map)
    .bindPopup(`
    <h3>Kayak Break on an unexpectedly beautiful rock</h3>
    <p></p>
    <img src="images/gallery/pei/Metamorphic_granite_rock.webp" style="width:250px;border-radius:10px;">
`);
/* ========================================= */
/* Thomas Bay*/
/* ========================================= */
var thomasBayMarker = L.marker([45.988929, -81.447313])
    .addTo(map)
    .bindPopup(`
    <h3>First campsite in Killarney</h3>
    <p>With a thunderstorm rolling in the distance, I was forced to shore here</p>
    <img src="images/gallery/pei/Thomas_Bay_Shore.webp" style="width:250px;border-radius:10px;">
`);
/* ========================================= */
/* GEORGE ISLAND*/
/* ========================================= */
var georgeIslandMarker = L.marker([45.961616, -81.520747])
    .addTo(map)
    .bindPopup(`
    <h3>George Island</h3>
    <p>An island I visited due to poor planning and coordination, a happy accident</p>
    <img src="images/gallery/pei/20210718_151217.webp" style="width:250px;border-radius:10px;">
`);
/* ========================================= */
/* KILLARNEY BAY */
/* ========================================= */
var killarneyBayMarker = L.marker([
    46.003299, -81.515819])
    .addTo(map)
    .bindPopup(`
    <h3>Killarney Bay</h3>
    <p>A less visited side of the Killarney region to those without bigger boats, that offers stunning views of the La Cloche Mountains</p>
    <img src="images/gallery/killarney/White quartzite cliffs and pine trees at the entrance in the Killarney Bay in Killarney Ontario Canada 2.webp" style="width:250px;border-radius:10px;">
`);

var coveredPortageMarker = L.marker([45.999244, -81.546430])
    .addTo(map)
    .bindPopup(`
    <h3>Covered Portage Cove</h3>
    <p>The cove in the Killarney Bay that houses the Indian Head rock formation and other incredible views of the La Cloche Mountains</p>
    <img src="images/gallery/killarney/White Quartzite Rocks reflecting off the water in Indian Head Cove in  in Killarney Ontario Canada.webp" style="width:250px;border-radius:10px;">
`);

var indianHead = L.marker([45.998170, -81.539526])
    .addTo(map)
    .bindPopup(`
    <h3>Indian Head</h3>
    <p>A rock formation that resembles its name</p>
    <img src="images/gallery/killarney/Indian Head.webp" style="width:250px;border-radius:10px;">
`);

var portageMarker = L.marker([45.984476, -81.569837])
    .addTo(map)
    .bindPopup(`
    <h3>Portage Cove</h3>
    <p>The cove in the Killarney Bay where I learned for the second and final time, never to plan a sea kayak trip that involves portages, 
    no matter how many kilometers it shaves off the trip. The cove houses a country home in the entrance, and a natural spring just
    passed it's edge.</p>
    <img src="images/gallery/killarney/Portage Cove.webp" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* SNUG HARBOR */
/* ========================================= */
var snugHarborMarker = L.marker([45.956323, -81.644473])
    .addTo(map)
    .bindPopup(`
    <h3>Camping spot in Snug Harbor</h3>
    <p></p>
    <img src="images/gallery/northChannel/SnugHarborSunset.webp" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* CREAK ISLAND */
/* ========================================= */
var creakIslandMarker = L.marker([45.945604, -81.694243])
    .addTo(map)
    .bindPopup(`
    <h3>Creak Island</h3>
    <p></p>
    <img src="images/gallery/northChannel/Creak Island.webp" style="width:250px;border-radius:10px;">
`);
var airdIslandMarker = L.marker([46.133408, -82.432725])
    .addTo(map)
    .bindPopup(`
    <h3>Aird Island</h3>
    <p>Ive only had enough time to get half away around the island as of now for a day trip but I plan on eventually circumnavigating it and the adjacent John Island, and visiting some other nearby spots on a multi night expidition</p>
    <img src="images/gallery/northChannel/inukshuk near Aird Island.webp" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* Bay of Islands */
/* ========================================= */
var bayOfIslandsMarker = L.marker([46.088696, -81.777222])
    .addTo(map)
    .bindPopup(`
    <h3>The Bay of Islands</h3>
    <p>The Eastern Side of Lake Huron's North Channel, with a name that perfectly describes it</p>
    <img src="images/gallery/northChannel/Bay Of Isands.webp" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* MCGREGOR BAY */
/* ========================================= */
var mcgregorMarker = L.marker([46.063572, -81.751782])
    .addTo(map)
    .bindPopup(`
    <h3>McGregor Bay launch</h3>
    <p></p>
    <img src="images/gallery/northChannel/McGregor Bay Tilted Pine on Rock.webp" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* MCGREGOR BAY TRIP CAMPSITE */
/* ========================================= */
var mcGregorCampsiteMarker = L.marker([46.026368, -81.633917])
    .addTo(map)
    .bindPopup(`
    <h3>Campsite during McGregor Bay Trip 2022</h3>
    <p></p>
    <img src="images/adventures/McGregorBay.webp" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* PROVIDENCE BAY */
/* ========================================= */
var provBayMarker = L.marker([45.666430, -82.270689])
    .addTo(map)
    .bindPopup(`
    <h3>Providence Bay</h3>
    <p>An unexpectedly beautiful rocky shore after launching from a sandy beach</p>
    <img src="images/gallery/ProvidenceBay.webp" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/*     PRINCE EDWARD COUNTY - PRESQU'ILE    */
/* ========================================= */
var princeEdwardCountyMarker = L.marker([44.010694, -77.704297])
    .addTo(map)
    .bindPopup(`
    <h3>Presqu'ile Provincial Park</h3>
    <p>A park in Lake Ontario, visited during a long weekend</p>
`);

/* ========================================= */
/* LACHINE */
/* ========================================= */
var lachineMarker = L.marker([45.432760, -73.692531])
    .addTo(map)
    .bindPopup(`
    <h3>Lachine</h3>
    <p>Not only my own home base where I can launch of for an evening paddle after work. But Lachine was the home base for many of the original fur traders and voyagers who were among the first Europeans to settle this country. At the edge of the Montreal's lachine canal, that bridges the Lachine rapids between the other two more nanavigable sides of the Saint-Lawrence river. Lachine was the location that used to connect the old world to the new world. The voyageurs would travel by canoe from where I live and paddle & portage to the great lakes and beyond before returning. Today, one of the oldest buildings in Canada remains at this location, 'The Fur Trade National Historic Site'</p>
    <img src="images/gallery/Lachine.webp" style="width:250px;border-radius:10px;">
    <br>
    <a href="https://parks.canada.ca/lhn-nhs/qc/lachine">More about this historic national site</a>
`);

/* ========================================= */
/* DOWKER ISLAND */
/* ========================================= */
var dowkerMarker = L.marker([45.402868, -73.896060])
    .addTo(map)
    .bindPopup(`
    <h3>Dowker Island</h3>
    <p>A fun island to paddle around close to where I live. Dowker ISland sits close to the junction point between the Saint Lawrence that flows south of Montreal to the Atlantic Ocean and the Ottawa River that runs north of Montreal, sourced by Lake Nipissing via the Georgian Bay from the French River region of Ontario</p>
    <img src="images/gallery/Dowker.webp" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* Les Coteaux */
/* ========================================= */
var lesCoteauxMarker = L.marker([45.255466, -74.204035])
    .addTo(map)
    .bindPopup(`
    <h3>Les Coteaux</h3>
    <p>A small stretch in the Saint-Lawrence River where the water turns turquoise</p>
`);

var CoteauDuLacMarker = L.marker([45.290485, -74.172191])
    .addTo(map)
    .bindPopup(`
    <h3>Coteau-du-lac</h3>
    <p>A launch into the Saint-Lawrence River, barriered by damns, bridges and rapids to the west, and access to islands including Valleyfield to the south and to the east.</p>
`);

var IleBizard = L.marker([45.469602, -73.899101])
    .addTo(map)
    .bindPopup(`
    <h3>Ile-Bizard</h3>
    <p>A launch into the Prairies River, bewtween Ile-Bizard and Montreal's West Island borough of Pierrefonds. I attempted to paddle from this point to Cap-Saint-Jacques, a sandy beach, but ran into some rapids along the route.</p>
`);



/* ========================================= */
/* Long Sault Parkway */
/* ========================================= */
var longSaultMarker = L.marker([45.003807, -74.915544])
    .addTo(map)
    .bindPopup(`
    <h3>Long Sault Parkway</h3>
    <p>11 Islands in a chain in the Saint-Lawrence River</p>
`);

/* ========================================= */
/* LAC STUKLEY */
/* ========================================= */
var stukelyMarker = L.marker([45.369463, -72.252020])
    .addTo(map)
    .bindPopup(`
    <h3>Lac Stukely</h3>
    <p>A small lake in Parc Orford in South Eastern Quebec</p>
    <img src="images/gallery/LacStukley.webp" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* Nicolet, Qc */
/* ========================================= */
var stNicoletMarker = L.marker([46.228008, -72.626776])
    .addTo(map)
    .bindPopup(`
    <h3>Nicolet</h3>
    <p>Access point to the more open Lac Saint Pierre, in the Saint Lawrence River</p>
`);

/* ========================================= */
/* Sainte Barbe, Qc */
/* ========================================= */
var sainteBarbeMarker = L.marker([45.189563, -74.191540])
    .addTo(map)
    .bindPopup(`
    <h3>Sainte-Brabe, Qc</h3>
    <p>Last paddle of 2025 exploring a new area</p>
`);


/* ========================================= */
/*                  CAMP SITES               */
/* ========================================= */
/*  NORTH BENJAMIN 1    */
/*  NORTH BENJAMIN 2    */
/*  MCGREGOR BAY    */
/*  WEST FOX    */
/*  MARTINS ISLAND    */
/*  THOMAS BAY    */
/*  SNUG HARBOR    */

/*  AUBREY ISLAND    */
/*  BEAUSOLEIL    */


