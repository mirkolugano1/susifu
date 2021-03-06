var years = [
    2016,
    2017,
    2018,
    2019,
    2020,
    2021,
    2022,
    2023,
    2024,
    2025,
    2026,
    2027,
    2028,
    2029,
];
var indexes = {};
for (var j = 0; j<years.length; j++) {            
    indexes[years[j]] = -1;
}
var year = years[years.length - 1];
var isFirstLoad = true;
var home = '#home';
window.location.hash = home;        
        
function refreshLayout() {
    if ($('#loading').is(':visible')) {
        var top = ($(window).height() - 60) / 2;
        $('#loading').css('top', top);
    } else {
        var h = $(window).height() - 150;
        $('#container').height(h);
    }
}

$(document).on('ready', function () {            
    refreshLayout();
    setTimeout(function () {
        $('#loading').hide();
        $('#years').show();
    }, 5000);
}).on('click', '.yearSelection', function (e) {
    var value = '#' + $(this).data('value');            
    gotoHash(value);
});

$(window).on('resize', function () {
    refreshLayout();
}).on('hashchange', function (e) {
    if (isFirstLoad) isFirstLoad = false;
    else {
        var _hash = window.location.hash;
        try {
            var _year = 0;
            if (_hash != home) _year = parseInt(_hash.substring(1));
            init(_year);
        } catch (e) {                
            gotoHash(home);
        }
    }
});

var text2016 = 'Cara Susi,#06/06/15 - 06/06/16:#1 anno di noi!!##@##Tra vette (quasi) inesplorate...#$#' +
    'dalla baguette...#$#ai crucchi mangia crauti...#$#alle isole (piu o meno) tropicali...#$#' +
    '(che avevano pure i loro perche\'),#$$#dal freddo dei paesi nordici...#$#al profondo sud italia...#$#' +
    'Sei speciale come una tripletta in finale di un torneo,#' +
    'sei abbagliante come una vittoria lampo in 5 mosse di una partita a scacchi,#' +
    'sei ubriacante come la figura di salsa \'meneala y sacala\',#' +
    'sei gratificante come un birdie in una gara di golf,#' +
    'sei bella come una sconfitta della juve in finale di Champions.##' + 
    'Grazie per il tuo supporto nei momenti difficili.#Grazie per tutti i bei momenti assieme.' +
    '##??##...a tante nuove avventure insieme...#...e a un nuovo anno di noi!##@##*';            

var text2017 = 'Liebe Susi,#06/06/16 - 06/06/17:#Zwei Jahre von uns!!##@##Ein tolles weiteres Jahr mit dir ist nun Geschichte.#' +
    'Im Gegensatz zum vorherigen Jahr, haben wir in den letzten 12 Monaten nicht viel gereist.#' + 
    'Allerdings haben wir sehr viel zusammen unternommen:##' + 
    'Ausfl??ge mit Freunden...#$#Abenteuer in portugiesischen Inseln...#$#' +
    'wo wir tolle Wanderungen durchgef??hrt hatten...#$#' +
    'und mit ermutigender Geist, riesige Ungeheuer begegnet und hinter uns gelassen...#$#' +
    'Manchmal bekamen wir ??berraschungen auf dem Weg...#$#' +
    'aber immer mit traumhaften Landschaften im Hintergrund...#$#' + 
    'Wir jubelten mit den Einheimischen...#$#' + 
    'teilten aber nicht immer die gleichen Aktivit??ten...#$#' + 
    'Danach widmeten wir uns um etwas kulturell...#$#' +
    'dann um die Sternen...#$#' + 
    'Wandern blieb f??r uns eine tolle Abwechslungsmethode...#$$#' + 
    'Nachher besuchten wir eine Hochzeit von guten Freunden...#$#' + 
    'Das Zusammenessen war nat??rlich ein wichtiger Teil unserer Zeit...#$#' + 
    'Nach einem kurzen Besuch zu Les Crosets...#$#' + 
    'gingen wir zuerst mit Freunden Bowling spielen...#$#' +
    'dann nach Kloten, um Ambri Piotta zu unterst??tzen...#$#' + 
    'immer mit dem Essen im Kopf...#$#' + 
    'Traurig war unsere sch??ne Wohnungen belassen zu m??ssen...#$$#' + 
    'das aber zum heutigen Zusammenwohnen fuhr...#$#' + 
    'Eine gute Osterpaella, um wieder zum Thema Essen zur??ckzukehren...#$#' +
    'Und die letzte (zumindest bis jetzt) sch??ne spanische Reise...#$#' +
    '##Nee, warte Mal, ich habe etwas vergessen...#' +
    'Eigentlich hatte ich fast das beste des Jahres vergessen...#$#' +
    'Jetzt geht die Rechnung endlich wieder auf!#' +
    '#Was f??r ein Jahr ist es gewesen.#' + 
    'Und was f??r ein neues Jahr wird das n??chste mit dir sein!#' +
    'Meine Liebe f??r dich erneut sich jedes Jahr immer wieder, wie eine Niederlage von Le Merde in einem Champions League Finalspiel.#' + 
    'Ich bedanke mich umso mehr, dass du bei mir bist, und ich bei dir.#' + 
    'Ich liebe dich sehr viel.##@##*';

var text2018 = 'Querida Susana##no hay 2 sin 3!!##@##' +
    'Hoy celebremos el tercer a??o juntos desde la gita a Colmar#$#' + 
    '(y desde la derrota de las mierdas en final)#$#' +
    'Como los otros a??os, en este a??o tambien hemos hecho mucho.#' + 
    'Para bien empezar, hicimos un viaje a lago de Garda#$#' +
    'Ademas algunos paseos como Curzutt#$#' +
    'o el Mythen#$#' +
    'a veces con amigas que no sabian donde ir#$#' +
    'Tambien hicimos gitas en ciudades como Ravensburg#$#' +
    'Thusis#$#' + 
    'Biel / Neuchatel#$#' +
    'Bruxelles#$#' +
    'y por dos drogatones como nosotros no podia faltar Amsterdam#$#' +
    'Otros recuerdos furon un a??o nuevo con amigos#$#' + 
    'y una muy bonita vacaciones de golf en Algarve#$#' +
    'que fue la cereza sul pastel.##' + 
    'Algunos se casaron#' + 
    'tu hermana#$$#' + 
    'y algunos amigos como Noemi & Mathias#$#y Sara Fedier#$#' +
    'Si pienso a esto proximo a??o, estoy seguro que sera asi y tambien muy bonito y interessante como el pasado...#$#' +
    'Te amo muchissimo##*##...cuando menos lo merezca, quiereme.';

var text2019 = 'Carissima Susi##e sono 4 (di gi???)!##@##' +
    'eh si, anche quest\' anno festeggiamo la ricorrenza della nostra gita francese,# ' +
    'nonch?? l\'eliminazione delle merdacce, #$# anche quest\'anno arrivata puntuale; #' +
    'ormai ?? come la Pasqua: cade sempre in un giorno diverso, #ma si festeggia tutti ' +
    'gli anni e gli unici scontenti sono gli Agnelli :).##' +
    'Tantissime cose belle abbiamo fatto quest\'anno insieme: #' +
    'un bel viaggetto in estremo oriente#$#' +
    'poi abbiamo visitato una "bellissima" citt?? dove abbiamo potuto ammirare l\'ottava ' +
    'meraviglia del mondo#$#' +
    'un paio di escursioni in montagna non guastano mai # Walensee #$# Monte Bar #$# H??rnli #$#' +
    'una partitina a hockey anche non guasta #$#' +
    'ci ?? poi venuta l\'ispirazione per una possibile destinazione vacanziera da fare in campeggio, # (possibilmente non in tenda all\'aperto ' +
    'ad Ottobre) #$#' +
    'un giretto alle cascate del Niagara... o quasi #$#' +
    'una festicciola con le amiche tappabuchi #$#' +
    'una bella idea ?? stata anche andare al wellness hotel a Stoos #$#' +
    'ma l\'idea migliore ?? stata la "vacanza" a Mallorca #$# dove peraltro il jiji ha dovuto "lavorare" parecchio...###' +
    'L\'anno nuovo inizia poi con la consueta vacanza di sole e golf #$#' +
    'e prosegue con un weekend di sci, dove purtroppo causa "infortunio" non hai potuto sciare #$#' +
    'siamo poi stati fortunati a trovare un nuovo nido #$#' +
    'che sar?? la base del nostro progetto futuro #$#' +
    'ma prima ci siamo goduti ancora una piccola vacanza a Valencia #$#' +
    'dove abbiamo potuto ammirare le bellissime opere del famosissimo Cagatrave,# artista e architetto noto in tutto il mondo (??)# ' +
    'nonch?? autore di spettacolari campolavori tipo #$#$# su cui pero\' spiccano i favolosi orinatoi #$###' +
    'insomma ?? stato anche questo un altro bellissimo anno assieme, #e insieme ci prepareremo adesso per il progetto piu\' importante ' +
    'della nostra vita.## Ti amo tanto ##@##*';

var text2020 = 'Cara Susi##assieme abbiamo gi?? trascorso un lustro!##@##e a darci lustro stavolta c\'?? #$#' +
    'ma andiamo con ordine: l\'anno inizia con una bellissima vacanza in liguria #$$# e con lo storico triplete di vittorie del jiji con la sua squadra #$$$#' +
    'ma gi?? verso l\'estate ci aspettano grandi novit?? #$# che il 21 agosto diventano realt?? #$$# pian piano la Martina cresce #$#' +
    'e scopriamo che riusciamo a portarla con noi sia in auto che in treno, #$# ma anche nei party a casa nostra ci sta bene, come a capodanno #$#' +
    'e pure all\'asilo #$# Col passare del tempo poi diventa una vera bimba fashion #$# sempre supportata da noi, che tra un momento insensato e l\'altro #$$#' +
    'ci assicuriamo che Martina abbia sempre quello di cui ha bisogno per essere felice #$$# come d\'altra parte sono felici anche i suoi genitori, ' +
    'come si puo\' ben vedere #$# senza contare che Martina ?? una bimba super precoce che gi?? sa stare in piedi #$# ed ?? contenta di venire a fare passeggiate' +
    ' con noi #$# e di provare sempre cose nuove #$# Data la novit?? quest\'anno abbiamo viaggiato molto meno, ma siamo comunque riusciti a concederci una ' +
    'bella vacanza a Malaga #$# dove anche Martina si ?? divertita, #$# il jiji ha fatto capire anche qua chi comanda #$# e siamo anche riusciti a fare una bellissima ' +
    'gita a Ronda #$# che ci ha molto sorpreso.#Da Marzo abbiamo avuto qualche difficolt?? in piu\' a causa del coronavirus, il quale pero\' sotto ' +
    'alcuni aspetti ci ha aiutato a vedere le cose da un altro punto di vista e a cambiare in meglio alcune nostre abitudini.# Una cosa pero\' non ?? cambiata, ' +
    'ed ?? il nostro amore, ## ...punto anche sul quale ci saranno a breve novit??.## Ti amo tanto ##@##*'

var text2021 = `
Cara Susi##@## #$# il momento piu' bello di un anno complicato ma interessante, con la nostra principessa
che diventa ogni giorno piu' bella #$#$# E' stato un anno caratterizzato purtroppo ancora dal Corona.#
Oltre i vari e veri problemi, disagi e cambiamenti, c'?? stato anche lo spostamento della champions dalla primavera 
ad agosto 2020, cosa che ci permette oggi di festeggiare non una, bensi' DUE eliminazioni delle merdacce 
dalla coppa :) #$$# Per noi per fortuna non tutto il male ?? venuto per nuocere, e siamo riusciti 
a trarre anche diversi vantaggi dal nuovo stile di vita impostoci dalla pandemia (es. Home Office).#
Nonostante cio' siamo comunque riusciti, nel limite del possibile, a fare diverse gite: ##
Egelsee al compleanno del Jiji #$# Bodensee (Gaienhofen e Mainau) #$$# Hallwilersee e Rigi #$$#
Abbiamo festeggiato la prima candelina della prima patatina (che fa pure rima...) #$# poi siamo andati 
in italia #$$# poi al bellissimo Alpen Hotel in Austria #$$# nel frattempo 
la Martina ha iniziato a scoprire il tennis #$# e poi ?? cominciato il luuungo inverno, in cui pero' non 
sono comunque mancati bei momenti #$$# tra i quali un Natale un po' particolare #$#
e il capodanno, festeggiato come lo scorso anno tra di noi #$# 
ci sono stati altri momenti diciamo "rivedibili" #$#
ma tra le cose belle, sicuramente vedere i costanti progressi della Martina #$$# e quello che riusciamo
ormai a fare assieme a lei #$$#
L'ultima gita (finora) ?? stata un bellissimo weekend ad Airolo #$# ma presto ne faremo altre.##
Altri fatti rilevanti in quest'ultimo anno sono stati per il Jiji purtroppo lo stop momentaneo al calcio #$# 
sempre causa pandemia, e (putroppo o per fortuna) aver chiuso la propria avventura alla Swiss Academic Software dopo 9 anni ##
Per la Susi invece, aver chiuso due capitoli del proprio passato #$$#
... # ... # e poi per entrambi ovviamente la nuova bellissima sfida che ci attende nei prossimi mesi ...
## Ti amo tanto ##@##*
`;

var text2022 = '';

var text2023 = '';

var text2024 = '';

var text2025 = '';

var text2026 = '';

var text2027 = '';

var text2028 = '';

var text2029 = '';

var songs = {
    2016: { currentTime: 0 },
    2017: { currentTime: 0 },
    2018: { currentTime: 0 },
    2019: { currentTime: 0 },
    2020: { currentTime: 0 },
    2021: { currentTime: 0 },
    2022: { currentTime: 0 },
    2023: { currentTime: 0 },
    2024: { currentTime: 0 },
    2025: { currentTime: 0 },
    2026: { currentTime: 0 },
    2027: { currentTime: 0 },
    2028: { currentTime: 0 },
    2029: { currentTime: 0 }
};

var texts = {
    2016: text2016,
    2017: text2017,
    2018: text2018,
    2019: text2019,
    2020: text2020,
    2021: text2021,
    2022: text2022,
    2023: text2023,
    2024: text2024,
    2025: text2025,
    2026: text2026,
    2027: text2027,
    2028: text2028,
    2029: text2029,
};

var images = {
    2016: ['sbernardino', 'colmar', 'konstanz', 'spiaggia', 'paella', 'gelatino', 'vars', 'lucca'],
    2017: ['sementina', 'madeira1', 'madeira2', 'madeira3', 'madeira4', 'madeira5', 'madeira6', 'madeira7', 'tosca', 'urania', 'mythen1', 'mythen2', 'hochzeit', 'indiano', 'lescrosets', 'bowling', 'ambri', 'giappo', 'app_jiji', 'app_susi', 'app_schlieren', 'paella_2', 'toledo', 'golf'],
    2018: ['colmar_1', 'pirlo', 'garda', 'curzutt', 'mythen2017', 'wanderungDaniSusiSabine', 'ravensburg', 'thusis', 'biel', 'bruxelles', 'amsterdam', 'capodanno2018', 'algarve', 'saranico1', 'saranico', 'noemathi', 'sarafedier', 'japan' ],
    2019: ['juveajax', 'japan2', 'jetdeau', 'walensee', 'montebar', 'hoernli', 'ambrizsc', 'reichenau', 'schaffausen', 'cplsusi2018', 'stoos', 'mallorca', 'algarve2019', 'zermatt', 'casa_urdorf', 'baby_vestitini', 'valencia_restaurant', 'cagatrave_architettura', 'cagatrave_statua',      'cagatrave_orinatoi'],
    2020: ['m11', 'pietra_ligure', 'finale_ligure', 'zurich_triplete2', 'zurich_triplete1', 'zurich_triplete', 'susisch1', 
        'm1', 'm2', 'm6', 'm4', 'm3', 'm5', 'm7', 'm8', 'm9', 'm10', 'm12', 'm13', 'm14', 'm15', 'm16',
        'malaga_2', 'malaga_1', 'malaga_calcio', 'ronda'],
    2021: [
        '2021_1',
        'martina_katzensee',        
        '2021_2',
        '2021_3',
        '2021_4',
        '2021_5',
        '2021_6',
        '2021_7',
        '2021_8',
        '2021_9',
        '2021_10',
        '2021_11',
        '2021_12',
        '2021_13',
        '2021_14',
        '2021_15',
        '2021_16',
        '2021_17',
        'natale2020',
        '2021_18',
        'braunwald',
        '2021_19',
        '2021_20',
        '2021_21',
        '2021_22',
        '2021_23',
        '2021_24',
        '2021_25',
        '2021_26'
    ],
    2022: [
        '2022_0',
        '2022_1',
        '2022_2',
        '2022_3',
        '2022_4',
        '2022_5',
        '2022_6',
        '2022_7',
        '2022_8',
        '2022_9',
        '2022_10',
        '2022_11',
        '2022_12',
        '2022_13',
        '2022_14',
        '2022_15',
        '2022_16',
        '2022_17',
        '2022_18',
        '2022_19',
        '2022_20',
        '2022_21',
        '2022_22',
        '2022_23',
        '2022_24',
        '2022_25',
        '2022_26',
        '2022_27',
        '2022_28',
        '2022_29',
        '2022_30',
        '2022_31'
    ],
    2023: [
        '2023_0',
        '2023_1',
        '2023_2',
        '2023_3',
        '2023_4',
        '2023_5',
        '2023_6',
        '2023_7',
        '2023_8',
        '2023_9',
        '2023_10',
        '2023_11',
        '2023_12',
        '2023_13',
        '2023_14',
        '2023_15',
        '2023_16',
        '2023_17',
        '2023_18',
        '2023_19',
        '2023_20',
        '2023_21',
        '2023_22',
        '2023_23',
        '2023_24',
        '2023_25',
        '2023_26',
        '2023_27',
        '2023_28',
        '2023_29',
        '2023_30',
        '2023_31'
    ],
    2024: [
        '2024_0',
        '2024_1',
        '2024_2',
        '2024_3',
        '2024_4',
        '2024_5',
        '2024_6',
        '2024_7',
        '2024_8',
        '2024_9',
        '2024_10',
        '2024_11',
        '2024_12',
        '2024_13',
        '2024_14',
        '2024_15',
        '2024_16',
        '2024_17',
        '2024_18',
        '2024_19',
        '2024_20',
        '2024_21',
        '2024_22',
        '2024_23',
        '2024_24',
        '2024_25',
        '2024_26',
        '2024_27',
        '2024_28',
        '2024_29',
        '2024_30',
        '2024_31'
    ],
    2025: [
        '2025_0',
        '2025_1',
        '2025_2',
        '2025_3',
        '2025_4',
        '2025_5',
        '2025_6',
        '2025_7',
        '2025_8',
        '2025_9',
        '2025_10',
        '2025_11',
        '2025_12',
        '2025_13',
        '2025_14',
        '2025_15',
        '2025_16',
        '2025_17',
        '2025_18',
        '2025_19',
        '2025_20',
        '2025_21',
        '2025_22',
        '2025_23',
        '2025_24',
        '2025_25',
        '2025_26',
        '2025_27',
        '2025_28',
        '2025_29',
        '2025_30',
        '2025_31'
    ],
    2026: [
        '2026_0',
        '2026_1',
        '2026_2',
        '2026_3',
        '2026_4',
        '2026_5',
        '2026_6',
        '2026_7',
        '2026_8',
        '2026_9',
        '2026_10',
        '2026_11',
        '2026_12',
        '2026_13',
        '2026_14',
        '2026_15',
        '2026_16',
        '2026_17',
        '2026_18',
        '2026_19',
        '2026_20',
        '2026_21',
        '2026_22',
        '2026_23',
        '2026_24',
        '2026_25',
        '2026_26',
        '2026_27',
        '2026_28',
        '2026_29',
        '2026_30',
        '2026_31'
    ],
    2027: [
        '2027_0',
        '2027_1',
        '2027_2',
        '2027_3',
        '2027_4',
        '2027_5',
        '2027_6',
        '2027_7',
        '2027_8',
        '2027_9',
        '2027_10',
        '2027_11',
        '2027_12',
        '2027_13',
        '2027_14',
        '2027_15',
        '2027_16',
        '2027_17',
        '2027_18',
        '2027_19',
        '2027_20',
        '2027_21',
        '2027_22',
        '2027_23',
        '2027_24',
        '2027_25',
        '2027_26',
        '2027_27',
        '2027_28',
        '2027_29',
        '2027_30',
        '2027_31',
    ],
    2028: [
        '2028_0',
        '2028_1',
        '2028_2',
        '2028_3',
        '2028_4',
        '2028_5',
        '2028_6',
        '2028_7',
        '2028_8',
        '2028_9',
        '2028_10',
        '2028_11',
        '2028_12',
        '2028_13',
        '2028_14',
        '2028_15',
        '2028_16',
        '2028_17',
        '2028_18',
        '2028_19',
        '2028_20',
        '2028_21',
        '2028_22',
        '2028_23',
        '2028_24',
        '2028_25',
        '2028_26',
        '2028_27',
        '2028_28',
        '2028_29',
        '2028_30',
        '2028_31'
    ],
    2029: [
        '2029_0',
        '2029_1',
        '2029_2',
        '2029_3',
        '2029_4',
        '2029_5',
        '2029_6',
        '2029_7',
        '2029_8',
        '2029_9',
        '2029_10',
        '2029_11',
        '2029_12',
        '2029_13',
        '2029_14',
        '2029_15',
        '2029_16',
        '2029_17',
        '2029_18',
        '2029_19',
        '2029_20',
        '2029_21',
        '2029_22',
        '2029_23',
        '2029_24',
        '2029_25',
        '2029_26',
        '2029_27',
        '2029_28',
        '2029_29',
        '2029_30',
        '2029_31'
    ],
};

var imagesCount = {
    2016: 0,
    2017: 0,
    2018: 0,
    2019: 0,
    2020: 0,
    2021: 0,
    2022: 0,
    2023: 0,
    2024: 0,
    2025: 0,
    2026: 0,
    2027: 0,
    2028: 0,
    2029: 0,
};

var heartCount = 0;
var appendSelector;

function gotoHash(value) {
    var isChrome = /Chrome/.test(navigator.userAgent);
    var isSafari = /Chrome/.test(navigator.userAgent);
    var isWebkit = isChrome || isSafari;
    if (location.hash) {                
        if (!isWebkit) {
            window.location.hash = value;
        } else {
            window.location.href = value;
        }
    }
};

function init(_year) {   
    if (!_year || _year == 0) {                                
        $('#years').show();
        clearTimeout(_timeout);
                                            
        if (!isFirstLoad) {
            for (var i = 0; i< years.length; i++) {
                var _y = years[i];
                $('#myAudio_' + _y)[0].pause();
                songs[_y].currentTime = $('#myAudio_' + _y)[0].currentTime;        
                $('#container' + _y).hide();
                $('body').removeClass('background' + _y);
            }
        }
                                       
        refreshLayout();
        return;
    }            
    year = _year;
    appendSelector = '#container' + year + ' .mCSB_container';
    $('#years').fadeOut('slow', function () {
        $('body').addClass('background');
        $('body').addClass('background' + year);
        
        $('#myAudio_' + year)[0].currentTime = songs[_year].currentTime;
        $('#myAudio_' + year)[0].play();                

        $('#container' + year).fadeIn('slow', function () {
            refreshLayout();
            $('#container' + year).mCustomScrollbar({
                autoHideScrollbar: true,
                contentTouchScroll: true,
                scrollInertia: 0,
                keyboard: { enable: true },
                mouseWheelPixels: 150,
                advanced: {
                    updateOnBrowserResize: true,
                    updateOnContentResize: true,
                    autoScrollOnFocus: true
                }                        
            });
            
            var _to = indexes[year] < 0 ? 3000 : 0;
            setTimeout(function(){
                process(indexes[year] + 1);
            }, _to);                    
        });
    });                        
}

var _timeout;

function doProcess(timeout, i) {
    $('#container' + year).mCustomScrollbar("scrollTo", 'bottom');
    _timeout = setTimeout(function () {
        process(i + 1);
    }, timeout);
}

function process(i) {
    indexes[year] = i;
    var text = texts[year];
    if (i > text.length - 1) return;
    var timeout = 80;
    var letter = text[i];                                           
    switch (letter) {                
        case '#':
            $(appendSelector).append('<br/>');      
            timeout = 1000;              
            doProcess(timeout, i);
            break;
        case '??':
            $(appendSelector).append('<div style="width: 100px; margin: 0 auto; text-align: center;"><div style="float: left">I &nbsp;</div> <div class="heartContainer hidden" id="customHeart" style="float:left; position: relative; top: -4px;"><img class="heart" src="images/heart.png" id="customHeartImg"></img></div><div style="float:left">&nbsp; you</div>');
            timeout = 2000;
            $('#customHeart').fadeIn('slow', function () {
                doProcess(timeout, i);
            });
            break;                                
        case '@':
            var heartContainerId = 'heartContainer_' + heartCount;
            var heartContainer = '<div class="heartContainer hidden" id="' + heartContainerId + '"></div>';
            $(appendSelector).append(heartContainer);
            var selector = 'heart_' + heartCount;
            var img = $('<img id="' + selector + '">');
            img.attr('src', 'images/heart.png');
            img.attr('class', 'heart');                    
            $('#' + heartContainerId).append(img);                    
            heartCount++;
            timeout = 1000;

            $('#' + heartContainerId).fadeIn('slow', function () {
                doProcess(timeout, i);
            });
            break;
        case '$':
            var id = 'img_' + imagesCount[year];
            var img = $('<img id="' + id + '">');
            img.attr('src', 'images/' + images[year][imagesCount[year]] + '.jpg');
            img.attr('class', 'picture hidden');
            $(appendSelector).append(img);
            $(appendSelector).append('<div class="clear"></div><br/><br/>');
            imagesCount[year]++;                    
            timeout = 5000;                    
            setTimeout(function () {
                $('#container' + year).mCustomScrollbar("scrollTo", $("#anchor"));
                setTimeout(function () {
                    $('#' + id).fadeIn('slow', function () {
                        doProcess(timeout, i);
                    });
                }, 500);
            }, 0);
            
            break;
        case '*':
            var div = '<div id="signature">Jiji</div>';
            $(appendSelector).append(div);
            doProcess(timeout, i);
            break;
        default:
            if (letter == ' ') timeout = 120;
            $(appendSelector).append(letter);
            doProcess(timeout, i);
            break;
    }            
}