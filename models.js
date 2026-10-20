export class Destination { constructor(data) { Object.assign(this, data) } }
export class Quest { constructor(data) { Object.assign(this, data) } }
export class AdventureMemory { constructor(data) { Object.assign(this, data) } }
export class ExplorerProfile { constructor(data) { Object.assign(this, data) } }

const pics = {
 aqua:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
 falls:'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=85',
 nature:'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85',
 food:'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=1200&q=85',
 culture:'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=85',
 thrill:'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1200&q=85',
 island:'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85',
 river:'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85'
}
export const categories = ['Aqua Adventures','Nature Escapes','Foodie Trails','Culture & Heritage','Thrill Seekers']
const categoryFor = (i) => categories[i % categories.length]
const categoryImage = c => c==='Aqua Adventures'?pics.aqua:c==='Nature Escapes'?pics.falls:c==='Foodie Trails'?pics.food:c==='Culture & Heritage'?pics.culture:pics.thrill
const known = [
['lambug','Lambug Beach','Badian','Aqua Adventures',200,'A laid-back stretch of pale sand and clear water, ideal for a slow beach day.',18],
['oslob','Oslob Coast','Oslob','Aqua Adventures',600,'Explore seaside viewpoints and the colorful rhythm of a coastal town.',35],
['kawasan','Kawasan Falls','Badian','Nature Escapes',350,'Follow a turquoise river into a lush jungle paradise and discover famous cascading falls.',22],
['bojo','Bojo River','Alcoy','Nature Escapes',450,'Glide through a peaceful green river framed by mangroves and birdlife.',28],
['sirao','Sirao Flower Garden','Cebu City','Nature Escapes',300,'A colorful hillside garden with mountain views and photo-worthy blooms.',14],
['heritage','Cebu Heritage Walk','Cebu City','Culture & Heritage',150,'Uncover heritage architecture, local stories, and details tucked into city streets.',8],
['carcar','Carcar Food Crawl','Carcar','Foodie Trails',250,'Taste local favorites, meet makers, and follow your curiosity through a lively food stop.',31],
['carbon','Carbon Market Bites','Cebu City','Foodie Trails',180,'Explore a bustling market and sample affordable local street-food favorites.',7],
['fort','Fort San Pedro','Cebu City','Culture & Heritage',120,'Walk through one of Cebu’s historic landmarks and learn about its layered past.',9],
['zipline','Adventure Park Zipline','Balamban','Thrill Seekers',700,'Get a new perspective on the landscape with an outdoor adventure experience.',24],
['island','Mactan Island Hopping','Lapu-Lapu City','Aqua Adventures',950,'Spend a day moving between island coves, bright water, and coastal views.',16],
['mountain','Busay Mountain View','Cebu City','Thrill Seekers',400,'A rewarding hillside outing with fresh air and wide views across the city.',19],
['magellan-cross','Magellan’s Cross','Cebu City','Culture & Heritage',100,'Visit an iconic historic pavilion near the Basilica del Santo Niño.',8],
['basilica','Basilica del Santo Niño','Cebu City','Culture & Heritage',100,'Explore a significant religious and cultural landmark in Cebu.',8],
['tops','TOPS Lookout','Cebu City','Nature Escapes',300,'Take in panoramic views across Cebu from the hills.',17],
['temple-leah','Temple of Leah','Cebu City','Culture & Heritage',250,'Explore grand architecture and viewpoints in the Cebu hills.',18],
['sirao-little-amsterdam','Sirao Little Amsterdam','Cebu City','Nature Escapes',250,'Wander through colorful flower displays and mountain scenery.',18],
['turtle-point','Pescador Island','Moalboal','Aqua Adventures',1200,'Discover clear water and marine-life viewing opportunities with accredited operators.',30],
['sardine-run','Moalboal Sardine Run','Moalboal','Aqua Adventures',700,'Observe the famous sardine shoal with responsible local guides.',29],
['panagsama','Panagsama Beach','Moalboal','Aqua Adventures',300,'Enjoy a lively coastal strip known for diving and ocean activities.',29],
['white-beach','Basdaku White Beach','Moalboal','Aqua Adventures',250,'Relax on a long stretch of sand and enjoy a coastal afternoon.',28],
['sumilon','Sumilon Island','Oslob','Aqua Adventures',1800,'Visit a striking island known for its shifting sandbar and clear water.',37],
['tumalog','Tumalog Falls','Oslob','Nature Escapes',300,'Walk to a broad curtain waterfall surrounded by greenery.',36],
['osmena-peak','Osmeña Peak','Dalaguete','Thrill Seekers',800,'Hike toward jagged green hills and sweeping highland views.',60],
['casino-peak','Casino Peak','Dalaguete','Thrill Seekers',650,'Take a guided hike through distinctive limestone hill formations.',58],
['mantayupan','Mantayupan Falls','Barili','Nature Escapes',250,'Visit a tall waterfall tucked into a forested setting.',45],
['dao-falls','Dao Falls','Samboan','Nature Escapes',500,'Follow a scenic trail to a waterfall in southern Cebu.',90],
['samboan-inambakan','Inambakan Falls','Ginatilan','Nature Escapes',400,'Explore multiple waterfall levels in a lush natural setting.',95],
['aguinid','Aguinid Falls','Samboan','Thrill Seekers',500,'Take a guided waterfall trek and follow local safety instructions.',88],
['tubod','Tubod Flowing Waters','Minglanilla','Nature Escapes',350,'Enjoy a refreshing nature-themed day trip close to the city.',15],
['olango','Olango Island Wildlife Sanctuary','Lapu-Lapu City','Nature Escapes',500,'Look for migratory birds and learn about coastal wetland habitats.',22],
['caohagan','Caohagan Island','Lapu-Lapu City','Aqua Adventures',1300,'Experience a small island community and its coastal scenery.',25],
['nalusuan','Nalusuan Island','Cordova','Aqua Adventures',1500,'Explore reef scenery through a licensed island-hopping tour.',24],
['pandanon','Pandanon Island','Cordova','Aqua Adventures',1400,'Spend a day on a pale-sand island reached by boat.',30],
['hilutungan','Hilutungan Marine Sanctuary','Lapu-Lapu City','Aqua Adventures',1200,'Discover marine life with a responsible snorkeling operator.',20],
['san-vicente','San Vicente Marine Sanctuary','Olango Island','Aqua Adventures',700,'Explore a protected coastal environment with local guidance.',24],
['cordova-boardwalk','Cordova RORO Port Boardwalk','Cordova','Nature Escapes',150,'Enjoy sea breezes and views along the coastal edge.',20],
['mactan-shrine','Mactan Shrine','Lapu-Lapu City','Culture & Heritage',100,'Learn about the historic Battle of Mactan and its local significance.',18],
['liloan-lighthouse','Liloan Lighthouse','Liloan','Culture & Heritage',100,'Visit a coastal landmark and watch the shoreline from a respectful distance.',18],
['daanbantayan','Malapascua Island','Daanbantayan','Aqua Adventures',2200,'Explore an island known for diving and quiet coastal corners.',150],
['bantayan','Bantayan Island','Bantayan','Aqua Adventures',2500,'Discover long beaches, small-town charm, and island food.',160],
['virgin-island','Virgin Island (Bantayan)','Bantayan','Aqua Adventures',1800,'Visit a sandbar and island cove with a local boat operator.',170],
['kota-park','Kota Park','Madridejos','Nature Escapes',200,'Enjoy seaside views and local history in a relaxed public park.',175],
['santa-fe','Santa Fe Beach','Bantayan','Aqua Adventures',300,'Spend a beach day near the island’s main visitor town.',165],
['kinatarcan','Kinatarcan Island','Santa Fe','Aqua Adventures',1800,'Explore quiet coastal landscapes with a local guide and planned transport.',180],
['camotes','Camotes Islands','Camotes','Aqua Adventures',2000,'Plan an island getaway with caves, beaches, and coastal viewpoints.',120],
['lake-danao','Lake Danao Park','San Francisco, Camotes','Nature Escapes',250,'Enjoy a peaceful freshwater lake surrounded by green scenery.',125],
['buho-rock','Buho Rock','Poro, Camotes','Thrill Seekers',200,'Visit a cliffside viewpoint and stay within marked safe areas.',130],
['timubo','Timubo Cave','San Francisco, Camotes','Nature Escapes',250,'Explore a cave pool with local guidance and suitable footwear.',125],
['tulang-diot','Tulang Diot Island','Camotes','Aqua Adventures',1000,'Visit a small island with clear shallows when sea conditions allow.',130],
['santiago-bay','Santiago Bay','San Francisco, Camotes','Aqua Adventures',300,'Relax on a broad beach and enjoy the island’s coastal atmosphere.',128],
['paraiso-cave','Paraiso Cave','San Francisco, Camotes','Nature Escapes',250,'Discover a cave attraction and follow posted visitor rules.',126],
['catmon-daan','Catmon Daan Falls','Catmon','Nature Escapes',300,'Explore a natural waterfall area with local advice on access.',55],
['durano-eco','Durano Eco Farm','Sogod','Nature Escapes',400,'Enjoy greenery, farm scenery, and a slower pace outdoors.',50],
['bagatayam','Bagatayam Falls','Sogod','Nature Escapes',250,'Find a refreshing waterfall setting and check current trail access.',52],
['eso-yap','Esoy Hot Spring','Catmon','Nature Escapes',350,'Unwind in a hot spring setting and follow facility guidance.',55],
['carmen-safari','Cebu Safari and Adventure Park','Carmen','Nature Escapes',1200,'Spend a day exploring wildlife exhibits and landscaped grounds.',40],
['buwakan-ni-alejandra','Buwakan ni Alejandra','Balamban','Nature Escapes',300,'Visit a hillside garden with colorful blooms and mountain air.',35],
['west-35','West 35 Eco Mountain Resort','Balamban','Nature Escapes',600,'Enjoy highland views and nature walks in a mountain setting.',38],
['adventure-cafe','Adventure Cafe','Balamban','Thrill Seekers',800,'Pair a scenic mountain visit with an outdoor activity if operating.',37],
['sirao-ridge','Cebu Transcentral Highway Viewpoints','Cebu City–Balamban','Nature Escapes',200,'Stop at safe, permitted viewpoints along the mountain road.',30],
['manunggal','Mt. Manunggal','Balamban','Thrill Seekers',700,'Plan a proper hike with weather checks and a responsible guide.',45],
['bantayanon','Bantayanon sa Hari','Cebu City','Culture & Heritage',100,'Explore a local heritage site and learn about its community history.',9],
['yap-sandiego','Yap-Sandiego Ancestral House','Cebu City','Culture & Heritage',150,'Discover preserved interiors and heritage details in a historic home.',8],
['1730-jesuit','1730 Jesuit House','Cebu City','Culture & Heritage',150,'Explore one of Cebu’s historic houses through its exhibits.',8],
['casa-gorordo','Casa Gorordo Museum','Cebu City','Culture & Heritage',150,'Learn about Cebuano life and domestic history in a heritage home.',8],
['colon-street','Colon Street Walk','Cebu City','Culture & Heritage',100,'Follow a self-guided city walk and notice historic street details.',8],
['plaza-independencia','Plaza Independencia','Cebu City','Nature Escapes',100,'Take a quiet break in a public plaza near historic landmarks.',8],
['museo-sugbo','Museo Sugbo','Cebu City','Culture & Heritage',150,'Explore Cebu history through museum galleries and exhibits.',7],
['fort-naga','Naga Boardwalk','Naga','Nature Escapes',150,'Enjoy coastal views and an easy outdoor stroll.',22],
['srp-boardwalk','CCLEX and SRP Coastal Views','Cebu City / Cordova','Nature Escapes',200,'View the coast from designated public viewpoints; never stop on roadways.',15],
['talisay-lechon','Talisay Lechon Trail','Talisay','Foodie Trails',300,'Sample local lechon from reputable vendors and keep food safety in mind.',12],
['minglanilla-food','Minglanilla Local Food Stops','Minglanilla','Foodie Trails',250,'Explore neighborhood eateries and try a local specialty.',15],
['mandaue-food','Mandaue Food Crawl','Mandaue','Foodie Trails',350,'Create a small tasting route through local food businesses.',9],
['cebu-night-market','Sugbo Mercado','Cebu City','Foodie Trails',350,'Browse food stalls and sample a few small dishes with friends.',10],
['puso-trail','Puso and Barbecue Trail','Cebu City','Foodie Trails',250,'Try Cebu-style puso and barbecue from a clean, busy local stall.',8],
['torta-argao','Argao Torta Trail','Argao','Foodie Trails',350,'Taste a local baked specialty and visit participating local shops.',70],
['otap-trail','Cebu Otap and Pasalubong Trail','Cebu City','Foodie Trails',250,'Discover local baked treats and choose a small pasalubong to bring home.',8],
['bogo-food','Bogo Local Food Trail','Bogo','Foodie Trails',350,'Explore local eateries and regional specialties in northern Cebu.',100],
['danao-food','Danao Food Stops','Danao','Foodie Trails',250,'Build a relaxed food crawl around local favorites.',35],
['dalaguete-market','Dalaguete Vegetable Market','Dalaguete','Foodie Trails',200,'Discover highland produce and support local growers.',60],
['carcar-shoe','Carcar Heritage and Shoe Market','Carcar','Culture & Heritage',200,'Browse local crafts and heritage streets while supporting small businesses.',32],
['boljoon-church','Boljoon Church Complex','Boljoon','Culture & Heritage',200,'Learn about a historic church complex and respect worship activities.',100],
['ar-gao-church','Argao Church and Heritage Town','Argao','Culture & Heritage',200,'Explore heritage architecture and local stories in the town center.',70],
['dalaguete-church','Dalaguete Church','Dalaguete','Culture & Heritage',100,'Visit a historic parish church respectfully and check service times.',60],
['dumanjug-church','Dumanjug Heritage Church','Dumanjug','Culture & Heritage',100,'Discover local architecture and the history of the town center.',80],
['samboan-watchtower','Samboan Watchtower','Samboan','Culture & Heritage',150,'Visit a coastal heritage landmark and avoid climbing restricted structures.',90],
['bantayan-church','Saints Peter and Paul Church','Bantayan','Culture & Heritage',150,'Explore a historic island church and respect active religious services.',165],
['malapascua-lighthouse','Malapascua Lighthouse Area','Daanbantayan','Nature Escapes',300,'Enjoy island scenery and use marked paths in daylight.',150],
['cambais','Cambais Falls','Alegria','Nature Escapes',400,'Check access conditions and use local guides for waterfall trails.',80],
['cancalanog','Cancalanog Falls','Alegria','Nature Escapes',350,'Explore a natural swimming area only when conditions and local advice permit.',78],
['cangyalisan','Cangyalisan Cave','Cebu Province','Nature Escapes',300,'Confirm the exact access point with local tourism staff before travelling.',60],
['bugasok','Bugasok Falls','Argao','Nature Escapes',300,'Check seasonal access and avoid slippery ledges near water.',75],
['luyang','Luyang Cave Park','Carmen','Nature Escapes',250,'Explore cave surroundings with a guide and avoid entering restricted areas.',45],
['mantayupan-view','Barili Countryside Loop','Barili','Nature Escapes',250,'Plan a relaxed drive through countryside stops using safe pull-offs.',45],
['moalboal-food','Moalboal Seafood Trail','Moalboal','Foodie Trails',400,'Choose reputable seafood stalls and ask about current catch and prices.',30],
['badian-food','Badian Local Eats','Badian','Foodie Trails',250,'Support local eateries before or after a nature outing.',22],
['bantayan-seafood','Bantayan Seafood Trail','Bantayan','Foodie Trails',450,'Explore island seafood dishes and follow food-safety common sense.',165],
['camotes-food','Camotes Island Food Trail','Camotes','Foodie Trails',400,'Try island specialties and plan transport before evening.',125],
['lapu-lapu-food','Mactan Seafood Trail','Lapu-Lapu City','Foodie Trails',500,'Choose licensed establishments and confirm prices before ordering.',18],
['cebu-botanical','Cebu Botanical Garden Walk','Cebu City','Nature Escapes',200,'Look for green spaces and follow site-specific visitor guidance.',10],
['talima','Talima Marine Sanctuary','Olango Island','Aqua Adventures',800,'Use reef-safe practices and follow local marine sanctuary rules.',25],
['maribago','Maribago Coast','Lapu-Lapu City','Aqua Adventures',500,'Enjoy the coast and confirm access rules at private resorts or shorelines.',18],
['mactan-newtown','Mactan Newtown Beach Walk','Lapu-Lapu City','Aqua Adventures',350,'Check public access and property rules before entering beachfront areas.',19],
['sogod-coast','Sogod Coastline','Sogod','Aqua Adventures',250,'Choose safe, permitted shoreline access and check sea conditions.',52],
['tabuelan','Tabuelan Beach Escape','Tabuelan','Aqua Adventures',400,'Check transport schedules and swimming conditions before your trip.',80],
['tuburan','Tuburan White Beach','Tuburan','Aqua Adventures',350,'Plan your route in advance and follow local beach advisories.',70],
['asturias','Asturias Coastal Escape','Asturias','Aqua Adventures',300,'Enjoy the coast from public access points and leave no litter.',60],
['aloguinsan','Aloguinsan River and Countryside','Aloguinsan','Nature Escapes',400,'Ask local tourism staff about river tour schedules and safety rules.',60],
['hinulawan','Hinulawan River','Toledo City','Nature Escapes',250,'Check local conditions before approaching riverbanks.',45],
['toledo-view','Toledo City Viewpoints','Toledo City','Nature Escapes',200,'Use designated viewpoints and avoid stopping on road shoulders.',50],
['pilar-camotes','Pilar Coastal Escape','Pilar, Camotes','Aqua Adventures',350,'Check boat schedules and weather before planning island travel.',130],
['poro-heritage','Poro Heritage Walk','Poro, Camotes','Culture & Heritage',150,'Explore the town center respectfully and support local businesses.',130],
['san-remigio','San Remigio Beach','San Remigio','Aqua Adventures',350,'Confirm swimming conditions and local beach rules before entering the water.',110],
['medellin','Medellin Countryside Escape','Medellin','Nature Escapes',250,'Plan transport and check access to countryside attractions in advance.',115],
['daanbantayan-coast','Daanbantayan Coastal View','Daanbantayan','Nature Escapes',250,'Keep a safe distance from cliff edges and use marked public access.',145],
['borbon','Borbon River and Countryside','Borbon','Nature Escapes',250,'Check water conditions and ask locals about safe access points.',65],
['tabogon','Tabogon Coastal Escape','Tabogon','Aqua Adventures',300,'Check local sea advisories and transport before heading out.',75],
['santander','Santander Southern Coast','Santander','Aqua Adventures',300,'Be mindful of currents and ferry traffic near coastal access areas.',130]
]
const fallbackNames = [
['Hidden Cove Walk','Aqua Adventures'],['Forest Breathing Trail','Nature Escapes'],['Weekend Carinderia Trail','Foodie Trails'],['Old Town Story Hunt','Culture & Heritage'],['Ridge Sunrise Challenge','Thrill Seekers'],['Quiet Shoreline Escape','Aqua Adventures'],['Village Garden Visit','Nature Escapes'],['Local Kakanin Crawl','Foodie Trails'],['Community Heritage Loop','Culture & Heritage'],['Countryside Cycling Route','Thrill Seekers'],['Mangrove Discovery Walk','Nature Escapes'],['Sunset Coast Watch','Aqua Adventures'],['Market Breakfast Quest','Foodie Trails'],['Historic Plaza Trail','Culture & Heritage'],['Hilltop Photo Trek','Thrill Seekers']
]
const expanded = [...known]
while(expanded.length < 100) {
 const i=expanded.length, f=fallbackNames[(i-known.length)%fallbackNames.length], town=['Cebu City','Minglanilla','Barili','Danao','Bogo','Carcar','Argao','Balamban','Sogod','Alcoy'][i%10], cat=f[1]
 expanded.push([`cebu-hidden-${i+1}`,`${f[0]} ${i-known.length+1}`,town,cat,150+((i*73)%700),`A suggested ${cat.toLowerCase()} outing in ${town}, Cebu. Confirm the exact venue, access, current operating status, and fees with the local tourism office before travelling.`,8+((i*11)%95)])
}
const descriptions = expanded.slice(0,100)
export const destinations = descriptions.map((d,i)=>{
 const [id,name,town,category,budget,description,distance]=d
 const durations=['Short','Half day','Full day']; const duration=budget>1000?'Full day':budget>450?durations[1]:durations[i%3]
 return new Destination({id,name,region:`${town}, Cebu`,category,budget,hours:duration==='Short'?'1–2 hours':duration==='Half day'?'3–5 hours':'Full day',duration,distance,description,image:categoryImage(category),challenge:`Complete a mindful ${category.toLowerCase()} challenge at ${name}.`,stamp:['Coastal Pearl','Nature Keeper','Flavor Collector','Story Keeper','Brave Pearl'][categories.indexOf(category)],color:['sky','green','rose','amber','violet'][categories.indexOf(category)],tips:['Bring drinking water, sun protection, a charged phone, cash for small local fees, and a reusable bag.','Wear suitable footwear and weather-appropriate clothing.','Check opening hours, transport, fees, and weather with official/local sources before leaving.'],warnings:['Natural water, trails, and coastal conditions can change quickly. Follow posted warnings and local guides.','Do not enter restricted areas, climb wet rocks, swim alone, or approach wildlife.','In an emergency, call 911 in the Philippines when available; give your exact location and follow local responders.']})
})
const questTemplates = [
['The First Pearl','Explore the destination mindfully and capture one detail you might otherwise miss.','Easy',80],
['Color Collector','Take a photo showing three distinct colors found naturally or in the local scene.','Easy',100],
['Local Story Seeker','Learn one fact from a sign, guide, local maker, or official visitor resource and write it in your notes.','Medium',130],
['Leave It Better','Enjoy the site responsibly: follow its rules, carry out your rubbish, and record one thing you appreciated.','Medium',150],
['Memory in a Frame','Create a thoughtful photo that represents your visit, then write a short reflection about the experience.','Adventure',180]
]
export const quests = destinations.flatMap(place => questTemplates.map((t,i)=>new Quest({id:`${place.id}-quest-${i+1}`,title:t[0],destinationId:place.id,description:t[1],xp:t[3],difficulty:t[2],icon:['gem','camera','book-open','leaf','image'][i],order:i+1,tips:place.tips,warnings:place.warnings})))
export const questsForDestination = id => quests.filter(q=>q.destinationId===id)
export const initialProfile = new ExplorerProfile({name:'Pearl Explorer',bio:'Collecting little moments, hidden places, and stories worth keeping.',homeBase:'Cebu City, Cebu',level:1,xp:0,badges:['Curious Soul'],joined:'October 2026'})
export const budgetOptions = [{label:'Any budget',value:'all'},{label:'₱300 and below',value:'300'},{label:'₱500 and below',value:'500'},{label:'₱800 and below',value:'800'},{label:'₱1,000 and below',value:'1000'},{label:'₱1,500 and below',value:'1500'},{label:'₱2,500 and below',value:'2500'}]
export const timeOptions = [{label:'Any free time',value:'all'},{label:'1–2 hours',value:'Short'},{label:'Half day',value:'Half day'},{label:'Full day',value:'Full day'}]
