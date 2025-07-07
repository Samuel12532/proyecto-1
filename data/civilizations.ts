import type { Civilization } from '../types';

export const civilizationsData: Civilization[] = [
    {
        id: 'britons',
        name: 'Britanos',
        shield: 'https://picsum.photos/seed/briton_shield/100/100',
        playstyle: 'Una civilización de arqueros por excelencia. Su poder reside en sus arqueros de largo alcance que superan a casi cualquier otra unidad a distancia.',
        bonuses: [
            'Centros urbanos cuestan -50% de madera a partir de la Edad de los Castillos.',
            'Galerías de tiro con arco trabajan un 20% más rápido.',
            'Pastores trabajan un 25% más rápido.',
        ],
        uniqueUnit: {
            name: 'Arquero de Tiro Largo',
            image: 'https://picsum.photos/seed/longbowman/200/200',
            description: 'Un arquero con un alcance excepcional, ideal para hostigar y eliminar unidades enemigas desde una distancia segura.'
        },
        uniqueTechs: [
            { name: 'Yeomen', age: 'Castillos', description: '+1 de alcance para arqueros a pie; +2 de ataque para torres.' },
            { name: 'Warwolf', age: 'Imperial', description: 'Los trabuquetes tienen 100% de precisión y causan daño de área.' },
        ],
        teamBonus: 'Galerías de tiro con arco trabajan un 20% más rápido.',
    },
    {
        id: 'franks',
        name: 'Francos',
        shield: 'https://picsum.photos/seed/frank_shield/100/100',
        playstyle: 'Civilización de caballería pesada. Sus paladines son de los más fuertes del juego, y su economía es robusta para soportar su producción.',
        bonuses: [
            'Caballería tiene +20% de puntos de vida.',
            'Recolectores de bayas trabajan un 25% más rápido.',
            'Mejoras de granja gratis.',
        ],
        uniqueUnit: {
            name: 'Lanzador de Hachas',
            image: 'https://picsum.photos/seed/axethrower/200/200',
            description: 'Una unidad de infantería a distancia que es efectiva contra otras unidades de infantería. Su ataque es a distancia pero de tipo cuerpo a cuerpo.'
        },
        uniqueTechs: [
            { name: 'Chivalry', age: 'Castillos', description: 'Establos trabajan un 40% más rápido.' },
            { name: 'Bearded Axe', age: 'Imperial', description: '+1 de alcance para Lanzadores de Hachas.' },
        ],
        teamBonus: 'Caballería +2 de línea de visión.',
    },
    {
        id: 'goths',
        name: 'Godos',
        shield: 'https://picsum.photos/seed/goth_shield/100/100',
        playstyle: 'Una civilización de infantería que se especializa en abrumar al enemigo con grandes cantidades de unidades baratas y de rápida producción.',
        bonuses: [
            'Infantería es un 35% más barata a partir de la Edad Feudal.',
            'Infantería tiene +1 de ataque contra edificios.',
            'Aldeanos tienen +5 de ataque vs jabalíes.',
            '+10 al límite de población en la Edad Imperial.'
        ],
        uniqueUnit: {
            name: 'Huscarle',
            image: 'https://picsum.photos/seed/huskarl/200/200',
            description: 'Una unidad de infantería con una armadura anti-proyectil extremadamente alta, lo que la hace ideal para contrarrestar arqueros.'
        },
        uniqueTechs: [
            { name: 'Anarchy', age: 'Castillos', description: 'Permite crear Huscarles en los cuarteles.' },
            { name: 'Perfusion', age: 'Imperial', description: 'Cuarteles trabajan un 100% más rápido.' },
        ],
        teamBonus: 'Cuarteles trabajan un 20% más rápido.',
    },
    {
        id: 'byzantines',
        name: 'Bizantinos',
        shield: 'https://picsum.photos/seed/byzantine_shield/100/100',
        playstyle: 'Civilización defensiva con edificios resistentes y unidades de contraataque baratas.',
        bonuses: [
            'Edificios tienen +10% HP en Edad Oscura, +20% en Feudal, +30% en Castillos, +40% en Imperial.',
            'Piqueros, Guerrilleros y Camellos cuestan -25%.',
            'Brulotes atacan un 25% más rápido.',
            'Avanzar a la Edad Imperial es un 33% más barato.',
        ],
        uniqueUnit: {
            name: 'Catafracta',
            image: 'https://picsum.photos/seed/cataphract/200/200',
            description: 'Caballería pesada que inflige daño extra a la infantería y tiene alta armadura.'
        },
        uniqueTechs: [
            { name: 'Fuego Griego', age: 'Castillos', description: '+1 de alcance para Brulotes.' },
            { name: 'Logística', age: 'Imperial', description: 'Las catafractas infligen daño de área y tienen bonus contra infantería.' },
        ],
        teamBonus: 'Monjes curan un 50% más rápido.',
    },
    {
        id: 'celts',
        name: 'Celtas',
        shield: 'https://picsum.photos/seed/celt_shield/100/100',
        playstyle: 'Civilización de infantería rápida y poderosas armas de asedio.',
        bonuses: [
            'Infantería se mueve un 15% más rápido.',
            'Leñadores trabajan un 15% más rápido.',
            'Armas de asedio disparan un 25% más rápido.',
            'Ovejas no se convierten si están en la línea de visión de una unidad celta.',
        ],
        uniqueUnit: {
            name: 'Invasor de Pastos',
            image: 'https://picsum.photos/seed/woadraider/200/200',
            description: 'Infantería rápida y bien blindada, excelente para incursiones rápidas.'
        },
        uniqueTechs: [
            { name: 'Stronghold', age: 'Castillos', description: 'Castillos y torres atacan un 25% más rápido.' },
            { name: 'Furor Celta', age: 'Imperial', description: 'Unidades de taller de asedio tienen +40% de HP.' },
        ],
        teamBonus: 'Talleres de asedio trabajan un 20% más rápido.',
    },
    {
        id: 'chinese',
        name: 'Chinos',
        shield: 'https://picsum.photos/seed/chinese_shield/100/100',
        playstyle: 'Civilización versátil con un inicio fuerte gracias a sus aldeanos adicionales, pero con un árbol tecnológico con carencias.',
        bonuses: [
            'Empiezan con +3 aldeanos, pero -200 de comida y -50 de madera.',
            'Centros urbanos soportan 10 de población.',
            'Tecnologías cuestan -10% en Feudal, -15% en Castillos, -20% en Imperial.',
            'Galeones de demolición +50% HP.',
        ],
        uniqueUnit: {
            name: 'Chu Ko Nu',
            image: 'https://picsum.photos/seed/chukonu/200/200',
            description: 'Ballestero que dispara una ráfaga de proyectiles, devastador en grandes números.'
        },
        uniqueTechs: [
            { name: 'Great Wall', age: 'Castillos', description: 'Muros y torres tienen +30% de HP.' },
            { name: 'Rocketry', age: 'Imperial', description: 'Chu Ko Nu +2 de ataque de perforación, escorpiones +4.' },
        ],
        teamBonus: 'Granjas +45 de comida.',
    },
    {
        id: 'japanese',
        name: 'Japoneses',
        shield: 'https://picsum.photos/seed/japanese_shield/100/100',
        playstyle: 'Civilización de infantería fuerte que ataca más rápido y es efectiva en el agua.',
        bonuses: [
            'Barcos de pesca tienen el doble de HP; +2 de armadura anti-proyectil; trabajan +5% más rápido en Oscura, +10% en Feudal, +15% en Castillos, +20% en Imperial.',
            'Molinos, campamentos madereros y mineros cuestan -50%.',
            'Infantería ataca un 33% más rápido a partir de la Edad Feudal.',
        ],
        uniqueUnit: {
            name: 'Samurái',
            image: 'https://picsum.photos/seed/samurai/200/200',
            description: 'Infantería que ataca rápidamente y tiene bonus de ataque contra otras unidades únicas.'
        },
        uniqueTechs: [
            { name: 'Yasama', age: 'Castillos', description: 'Torres disparan flechas adicionales.' },
            { name: 'Kataparuto', age: 'Imperial', description: 'Trabuquetes disparan y se montan más rápido.' },
        ],
        teamBonus: 'Galeras tienen +50% de línea de visión.',
    },
    {
        id: 'mongols',
        name: 'Mongoles',
        shield: 'https://picsum.photos/seed/mongol_shield/100/100',
        playstyle: 'Civilización de caballería de arqueros rápida y letal, excelente para tácticas de golpear y correr.',
        bonuses: [
            'Caballería de arqueros dispara un 25% más rápido.',
            'Caballería ligera y Húsares tienen +30% de HP.',
            'Cazadores trabajan un 40% más rápido.',
        ],
        uniqueUnit: {
            name: 'Mangudai',
            image: 'https://picsum.photos/seed/mangudai/200/200',
            description: 'Arquero a caballo con un bonus de ataque contra armas de asedio y una alta cadencia de fuego.'
        },
        uniqueTechs: [
            { name: 'Nomads', age: 'Castillos', description: 'Casas no pierden población al ser destruidas.' },
            { name: 'Drill', age: 'Imperial', description: 'Unidades de taller de asedio se mueven un 50% más rápido.' },
        ],
        teamBonus: 'Caballería de exploración y ligera +2 de línea de visión.',
    },
    {
        id: 'persians',
        name: 'Persas',
        shield: 'https://picsum.photos/seed/persian_shield/100/100',
        playstyle: 'Civilización de caballería fuerte con un centro urbano y muelle de trabajo rápido para un boom económico.',
        bonuses: [
            'Empiezan con +50 de madera y comida.',
            'Centro Urbano y Muelle tienen el doble de HP; trabajan +10% más rápido en Feudal, +15% en Castillos, +20% en Imperial.',
        ],
        uniqueUnit: {
            name: 'Elefante de Guerra',
            image: 'https://picsum.photos/seed/warelephant/200/200',
            description: 'Unidad de caballería lenta pero extremadamente poderosa y resistente, capaz de arrollar unidades.'
        },
        uniqueTechs: [
            { name: 'Kamandaran', age: 'Castillos', description: 'La línea de arqueros cuesta madera en vez de oro.' },
            { name: 'Mahouts', age: 'Imperial', description: 'Elefantes de guerra se mueven un 30% más rápido.' },
        ],
        teamBonus: 'Caballeros +2 de ataque contra arqueros.',
    },
    {
        id: 'saracens',
        name: 'Sarracenos',
        shield: 'https://picsum.photos/seed/saracen_shield/100/100',
        playstyle: 'Civilización flexible con un mercado poderoso, arqueros a pie fuertes y una caballería de camellos efectiva.',
        bonuses: [
            'El mercado cuesta -100 de madera y sus comisiones son solo del 5%.',
            'Barcos de transporte tienen el doble de HP y +5 de capacidad.',
            'Galeras atacan un 25% más rápido.',
            'Arqueros a pie tienen bonus de ataque contra edificios.',
        ],
        uniqueUnit: {
            name: 'Mameluco',
            image: 'https://picsum.photos/seed/mameluke/200/200',
            description: 'Unidad de camello a distancia, fuerte contra la caballería.'
        },
        uniqueTechs: [
            { name: 'Madrasah', age: 'Castillos', description: 'Monjes devuelven el 33% de su costo al morir.' },
            { name: 'Zealotry', age: 'Imperial', description: 'Camellos y Mamelucos +20 HP.' },
        ],
        teamBonus: 'Arqueros a pie +2 de ataque contra edificios.',
    },
    {
        id: 'teutons',
        name: 'Teutones',
        shield: 'https://picsum.photos/seed/teuton_shield/100/100',
        playstyle: 'Civilización de infantería lenta pero muy blindada, con castillos y torres poderosos.',
        bonuses: [
            'Monjes curan desde el doble de distancia.',
            'Torres guarecen el doble de unidades.',
            'Granjas cuestan -40% de madera.',
            'Unidades de cuartel y establo reciben +1 de armadura cuerpo a cuerpo en Castillos (+2 total en Imperial).',
        ],
        uniqueUnit: {
            name: 'Caballero de la Orden Teutónica',
            image: 'https://picsum.photos/seed/teutonicknight/200/200',
            description: 'Infantería muy lenta pero con una armadura y ataque devastadores.'
        },
        uniqueTechs: [
            { name: 'Ironclad', age: 'Castillos', description: 'Armas de asedio +4 de armadura cuerpo a cuerpo.' },
            { name: 'Crenellations', age: 'Imperial', description: 'Castillos +3 de alcance; infantería guarnecida dispara flechas.' },
        ],
        teamBonus: 'Unidades resisten la conversión.',
    },
    {
        id: 'turks',
        name: 'Turcos',
        shield: 'https://picsum.photos/seed/turk_shield/100/100',
        playstyle: 'Civilización centrada en la pólvora, con unidades de pólvora fuertes y mejoras más baratas.',
        bonuses: [
            'Unidades de pólvora tienen +25% de HP.',
            'Investigar tecnologías de pólvora cuesta -50%.',
            'Mejoras de caballería ligera y húsar son gratis.',
            'Mineros de oro trabajan un 20% más rápido.',
        ],
        uniqueUnit: {
            name: 'Jenízaro',
            image: 'https://picsum.photos/seed/janissary/200/200',
            description: 'Artillero manual con más alcance y vida que el estándar.'
        },
        uniqueTechs: [
            { name: 'Sipahi', age: 'Castillos', description: 'Arqueros a caballo +20 HP.' },
            { name: 'Artillería', age: 'Imperial', description: 'Torres de bombardeo, cañones de asedio y galeones de cañón +2 de alcance.' },
        ],
        teamBonus: 'Unidades de pólvora se crean un 20% más rápido.',
    },
    {
        id: 'vikings',
        name: 'Vikingos',
        shield: 'https://picsum.photos/seed/viking_shield/100/100',
        playstyle: 'Civilización con una infantería excepcional y una armada dominante, liderada por sus Drakkars.',
        bonuses: [
            'Barcos de guerra cuestan -15% en Feudal, -15% en Castillos, -20% en Imperial.',
            'Infantería tiene +10% HP en Feudal, +15% en Castillos, +20% en Imperial.',
            'Carretilla y Carro de mano gratis.',
        ],
        uniqueUnit: {
            name: 'Berserker',
            image: 'https://picsum.photos/seed/berserker/200/200',
            description: 'Infantería que se regenera lentamente. Su versión de élite puede regenerarse aún más rápido.'
        },
        uniqueTechs: [
            { name: 'Chieftains', age: 'Castillos', description: 'Infantería tiene bonus de ataque contra caballería (+5) y camellos (+4).' },
            { name: 'Berserkergang', age: 'Imperial', description: 'Berserkers se regeneran más rápido.' },
        ],
        teamBonus: 'Muelles cuestan -15%.',
    },
    {
        id: 'aztecs',
        name: 'Aztecas',
        shield: 'https://picsum.photos/seed/aztec_shield/100/100',
        playstyle: 'Civilización de infantería y monjes. Su infantería se crea rápidamente y los monjes son muy poderosos.',
        bonuses: [
            'Aldeanos cargan +3 de recursos.',
            'Unidades militares se crean un 11% más rápido.',
            'Monjes ganan +5 HP por cada tecnología de monasterio.',
            'Empiezan con +50 de oro.',
        ],
        uniqueUnit: {
            name: 'Guerrero Jaguar',
            image: 'https://picsum.photos/seed/jaguarknight/200/200',
            description: 'Infantería con un gran bonus de ataque contra otra infantería.'
        },
        uniqueTechs: [
            { name: 'Atlatl', age: 'Castillos', description: 'Guerrilleros +1 de ataque y +1 de alcance.' },
            { name: 'Garland Wars', age: 'Imperial', description: 'Infantería +4 de ataque.' },
        ],
        teamBonus: 'Producción de reliquias genera +33% de oro.',
    },
    {
        id: 'huns',
        name: 'Hunos',
        shield: 'https://picsum.photos/seed/hun_shield/100/100',
        playstyle: 'Civilización agresiva de caballería que no necesita casas, permitiendo un enfoque total en el ejército.',
        bonuses: [
            'No necesitan casas, pero empiezan con -100 de madera.',
            'Arqueros a caballo cuestan -10% en Castillos, -20% en Imperial.',
            'Trabuquetes tienen +30% de precisión.',
        ],
        uniqueUnit: {
            name: 'Tarkan',
            image: 'https://picsum.photos/seed/tarkan/200/200',
            description: 'Caballería especializada en destruir edificios, con alta armadura anti-proyectil.'
        },
        uniqueTechs: [
            { name: 'Marauders', age: 'Castillos', description: 'Crea Tarkans en los establos.' },
            { name: 'Atheism', age: 'Imperial', description: '+100 años para victorias por reliquias y maravillas; espionaje cuesta -50%.' },
        ],
        teamBonus: 'Establos trabajan un 20% más rápido.',
    },
    {
        id: 'koreans',
        name: 'Coreanos',
        shield: 'https://picsum.photos/seed/korean_shield/100/100',
        playstyle: 'Civilización defensiva con torres poderosas y unidades de asedio y navales únicas.',
        bonuses: [
            'Aldeanos tienen +2 de línea de visión.',
            'Canteros trabajan un 20% más rápido.',
            'Mejoras de torres son gratis.',
            'Torres (de guardia, de vigilancia) ganan +1 de alcance en Castillos, +1 en Imperial.',
        ],
        uniqueUnit: {
            name: 'Carreta de Guerra',
            image: 'https://picsum.photos/seed/warwagon/200/200',
            description: 'Unidad de caballería de arqueros muy blindada, similar a un tanque de la era medieval.'
        },
        uniqueTechs: [
            { name: 'Panokseon', age: 'Castillos', description: 'Barcos tortuga se mueven un 15% más rápido.' },
            { name: 'Shinkichon', age: 'Imperial', description: 'Onagros y Onagros de asedio +2 de alcance.' },
        ],
        teamBonus: 'Mangoneles y Onagros +1 de alcance.',
    },
    {
        id: 'mayas',
        name: 'Mayas',
        shield: 'https://picsum.photos/seed/mayan_shield/100/100',
        playstyle: 'Civilización de arqueros fuerte con recursos duraderos y una línea de Guerreros Águila potente.',
        bonuses: [
            'Empiezan con +1 aldeano, pero -50 de comida.',
            'Recursos duran un 15% más.',
            'Arqueros cuestan -10% en Feudal, -20% en Castillos, -30% en Imperial.',
            'Muros cuestan -50%.',
        ],
        uniqueUnit: {
            name: 'Arquero de Plumas',
            image: 'https://picsum.photos/seed/plumedarcher/200/200',
            description: 'Arquero rápido y resistente con buen ataque, excelente para tácticas de golpear y correr.'
        },
        uniqueTechs: [
            { name: 'Hul\'che Javelineers', age: 'Castillos', description: 'Guerrilleros lanzan un segundo proyectil.' },
            { name: 'El Dorado', age: 'Imperial', description: 'Guerreros Águila +40 HP.' },
        ],
        teamBonus: 'Muros cuestan -50%.',
    },
    {
        id: 'spanish',
        name: 'Españoles',
        shield: 'https://picsum.photos/seed/spanish_shield/100/100',
        playstyle: 'Civilización de pólvora y caballería, con constructores rápidos y un comercio fuerte.',
        bonuses: [
            'Constructores trabajan un 30% más rápido.',
            'Mejoras de herrería no cuestan oro.',
            'Unidades de pólvora disparan un 18% más rápido.',
        ],
        uniqueUnit: {
            name: 'Conquistador',
            image: 'https://picsum.photos/seed/conquistador/200/200',
            description: 'Caballería de pólvora poderosa y rápida. También pueden entrenar Misioneros, monjes a caballo.'
        },
        uniqueTechs: [
            { name: 'Inquisition', age: 'Castillos', description: 'Monjes convierten más rápido.' },
            { name: 'Supremacy', age: 'Imperial', description: 'Aldeanos son más fuertes en combate.' },
        ],
        teamBonus: 'Unidades de comercio generan +25% de oro.',
    },
    {
        id: 'incas',
        name: 'Incas',
        shield: 'https://picsum.photos/seed/inca_shield/100/100',
        playstyle: 'Civilización de infantería con defensas fuertes y aldeanos que se benefician de mejoras de herrería.',
        bonuses: [
            'Empiezan con una llama.',
            'Aldeanos se benefician de las mejoras de infantería de la herrería.',
            'Casas y Centros Urbanos soportan +5 de población.',
            'Edificios cuestan -15% de piedra.',
        ],
        uniqueUnit: {
            name: 'Kamayuk',
            image: 'https://picsum.photos/seed/kamayuk/200/200',
            description: 'Infantería con alcance de 1, fuerte contra caballería.'
        },
        uniqueTechs: [
            { name: 'Andean Sling', age: 'Castillos', description: 'Honderos y guerrilleros no tienen alcance mínimo.' },
            { name: 'Couriers', age: 'Imperial', description: 'Kamayuks, Honderos y Guerreros Águila +1/+2 de armadura.' },
        ],
        teamBonus: 'Granjas se construyen un 50% más rápido.',
    },
    {
        id: 'indians',
        name: 'Indios',
        shield: 'https://picsum.photos/seed/indian_shield/100/100',
        playstyle: 'Civilización de camellos y caballería ligera, con una economía sólida gracias a aldeanos más baratos.',
        bonuses: [
            'Pescadores trabajan un 15% más rápido y cargan +15.',
            'Aldeanos cuestan -10% en Oscura, -15% en Feudal, -20% en Castillos, -25% en Imperial.',
            'Camellos tienen +1 de armadura anti-proyectil.',
        ],
        uniqueUnit: {
            name: 'Elefante Arquero',
            image: 'https://picsum.photos/seed/elephantarcher/200/200',
            description: 'Caballería de arqueros resistente. También tienen el Camello Imperial.'
        },
        uniqueTechs: [
            { name: 'Sultans', age: 'Castillos', description: 'Todas las fuentes de oro generan oro un 10% más rápido.' },
            { name: 'Shatagni', age: 'Imperial', description: 'Artilleros manuales +1 de alcance.' },
        ],
        teamBonus: 'Camellos +5 de ataque contra edificios.',
    },
    {
        id: 'italians',
        name: 'Italianos',
        shield: 'https://picsum.photos/seed/italian_shield/100/100',
        playstyle: 'Civilización naval y de arqueros, con tecnologías más baratas y una ventaja en el agua.',
        bonuses: [
            'Avanzar a la siguiente edad cuesta -15%.',
            'Tecnologías del muelle cuestan -50%.',
            'Unidades de pólvora cuestan -25%.',
            'Barcos de pesca cuestan -15%.',
        ],
        uniqueUnit: {
            name: 'Ballestero Genovés',
            image: 'https://picsum.photos/seed/genoesecrossbowman/200/200',
            description: 'Ballestero con bonus de ataque contra caballería. Pueden entrenar Condotieros en los cuarteles.'
        },
        uniqueTechs: [
            { name: 'Pavise', age: 'Castillos', description: 'Ballesteros Genoveses y a pie +1/+1 de armadura.' },
            { name: 'Silk Road', age: 'Imperial', description: 'Unidades de comercio cuestan -50%.' },
        ],
        teamBonus: 'Condotieros disponibles en cuartel.',
    },
    {
        id: 'magyars',
        name: 'Magiares',
        shield: 'https://picsum.photos/seed/magyar_shield/100/100',
        playstyle: 'Civilización de caballería con unidades baratas y un fuerte enfoque en el combate cuerpo a cuerpo.',
        bonuses: [
            'Aldeanos matan lobos de un golpe.',
            'Exploradores y caballería ligera cuestan -15%.',
            'Mejoras de ataque de herrería para unidades de cuerpo a cuerpo son gratis.',
        ],
        uniqueUnit: {
            name: 'Húsar Magiar',
            image: 'https://picsum.photos/seed/magyarhuszar/200/200',
            description: 'Caballería ligera fuerte contra armas de asedio, no cuesta oro con su tecnología única.'
        },
        uniqueTechs: [
            { name: 'Corvinian Army', age: 'Castillos', description: 'Húsares magiares no cuestan oro.' },
            { name: 'Recurve Bow', age: 'Imperial', description: 'Arqueros a caballo +1 de alcance y +1 de ataque.' },
        ],
        teamBonus: 'Arqueros a pie +2 de línea de visión.',
    },
    {
        id: 'slavs',
        name: 'Eslavos',
        shield: 'https://picsum.photos/seed/slav_shield/100/100',
        playstyle: 'Civilización de asedio e infantería, con una economía agrícola muy eficiente.',
        bonuses: [
            'Granjeros trabajan un 10% más rápido.',
            'Suministros afectan a la línea de milicia.',
            'Armas de asedio se construyen un 15% más barato.',
        ],
        uniqueUnit: {
            name: 'Boyardo',
            image: 'https://picsum.photos/seed/boyar/200/200',
            description: 'Caballería pesada con alta armadura cuerpo a cuerpo.'
        },
        uniqueTechs: [
            { name: 'Orthodoxy', age: 'Castillos', description: 'Monjes tienen +3 de armadura cuerpo a cuerpo.' },
            { name: 'Druzhina', age: 'Imperial', description: 'Infantería inflige daño de área.' },
        ],
        teamBonus: 'Edificios militares proporcionan +5 de población.',
    },
    {
        id: 'berbers',
        name: 'Bereberes',
        shield: 'https://picsum.photos/seed/berber_shield/100/100',
        playstyle: 'Civilización de caballería y naval, con unidades de establo más baratas y una flota fuerte.',
        bonuses: [
            'Aldeanos se mueven un 10% más rápido.',
            'Unidades de establo cuestan -15% en Castillos, -20% en Imperial.',
            'Barcos se mueven un 10% más rápido.',
        ],
        uniqueUnit: {
            name: 'Arquero de Camello',
            image: 'https://picsum.photos/seed/camelarcher/200/200',
            description: 'Unidad de camello a distancia, fuerte contra arqueros a caballo.'
        },
        uniqueTechs: [
            { name: 'Kasbah', age: 'Castillos', description: 'Castillos del equipo trabajan un 25% más rápido.' },
            { name: 'Maghrebi Camels', age: 'Imperial', description: 'Camellos y arqueros camelleros se regeneran.' },
        ],
        teamBonus: 'Genitour disponible en galería de tiro con arco.',
    },
    {
        id: 'ethiopians',
        name: 'Etíopes',
        shield: 'https://picsum.photos/seed/ethiopian_shield/100/100',
        playstyle: 'Civilización de arqueros y asedio, con un ejército que dispara rápido.',
        bonuses: [
            'Arqueros y guerrilleros disparan un 18% más rápido.',
            'Recibes +100 de oro y +100 de comida al avanzar de edad.',
            'La línea de piqueros recibe mejoras gratis.',
        ],
        uniqueUnit: {
            name: 'Guerrero Shotel',
            image: 'https://picsum.photos/seed/shotelwarrior/200/200',
            description: 'Infantería rápida con alto ataque pero poca armadura, entrenada muy rápidamente.'
        },
        uniqueTechs: [
            { name: 'Royal Heirs', age: 'Castillos', description: 'Guerreros Shotel se entrenan casi instantáneamente.' },
            { name: 'Torsion Engines', age: 'Imperial', description: 'Unidades de taller de asedio tienen un radio de explosión más grande.' },
        ],
        teamBonus: 'Torres y puestos de avanzada +3 de línea de visión.',
    },
    {
        id: 'malians',
        name: 'Malienses',
        shield: 'https://picsum.photos/seed/malian_shield/100/100',
        playstyle: 'Civilización de infantería versátil con edificios más baratos y resistencia a proyectiles.',
        bonuses: [
            'Edificios cuestan -15% de madera (excepto granjas).',
            'Cuarteles tienen +1 armadura anti-proyectil por edad (empezando en Feudal).',
            'Minería de oro dura un 30% más.',
        ],
        uniqueUnit: {
            name: 'Gbeto',
            image: 'https://picsum.photos/seed/gbeto/200/200',
            description: 'Infantería a distancia con alto ataque pero frágil.'
        },
        uniqueTechs: [
            { name: 'Tigui', age: 'Castillos', description: 'Centros Urbanos disparan flechas sin tener unidades guarnecidas.' },
            { name: 'Farimba', age: 'Imperial', description: 'Caballería +5 de ataque.' },
        ],
        teamBonus: 'Universidades investigan un 80% más rápido.',
    },
    {
        id: 'portuguese',
        name: 'Portugueses',
        shield: 'https://picsum.photos/seed/portuguese_shield/100/100',
        playstyle: 'Civilización naval y de pólvora, con acceso a todas las unidades en el muelle y un descuento de oro general.',
        bonuses: [
            'Todas las unidades cuestan -20% de oro.',
            'Todas las naves tienen +10% de HP.',
            'Pueden construir Feitorias en la Edad Imperial.',
        ],
        uniqueUnit: {
            name: 'Cañón de Órgano',
            image: 'https://picsum.photos/seed/organ_gun/200/200',
            description: 'Unidad de pólvora que dispara una ráfaga de proyectiles en área.'
        },
        uniqueTechs: [
            { name: 'Carrack', age: 'Castillos', description: 'Naves +1/+1 de armadura.' },
            { name: 'Arquebus', age: 'Imperial', description: 'Unidades de pólvora se benefician de balística (disparan más precisamente a objetivos móviles).' },
        ],
        teamBonus: 'Línea de visión compartida desde el inicio del juego.',
    },
    {
        id: 'burmese',
        name: 'Birmanos',
        shield: 'https://picsum.photos/seed/burmese_shield/100/100',
        playstyle: 'Civilización de infantería y elefantes de batalla, con un fuerte apoyo de monjes.',
        bonuses: [
            'Mejoras de campamento maderero gratis.',
            'Infantería +1 de ataque por edad (empezando en Feudal).',
            'Tecnologías de monasterio cuestan -50%.',
        ],
        uniqueUnit: {
            name: 'Arambai',
            image: 'https://picsum.photos/seed/arambai/200/200',
            description: 'Unidad de caballería a distancia con un ataque de área impreciso pero potente.'
        },
        uniqueTechs: [
            { name: 'Howdah', age: 'Castillos', description: 'Elefantes de batalla +1/+2 de armadura.' },
            { name: 'Manipur Cavalry', age: 'Imperial', description: 'Caballería y Arambai +5 de ataque contra edificios.' },
        ],
        teamBonus: 'Reliquias visibles en el mapa desde el principio.',
    },
    {
        id: 'khmer',
        name: 'Jemeres',
        shield: 'https://picsum.photos/seed/khmer_shield/100/100',
        playstyle: 'Civilización de asedio y elefantes, con una economía flexible que no requiere edificios para avanzar de edad.',
        bonuses: [
            'No se requieren edificios para avanzar de edad o desbloquear otros edificios.',
            'Granjeros no necesitan molinos ni centros urbanos para dejar comida.',
            'Elefantes de batalla se mueven un 10% más rápido.',
            'Aldeanos pueden guarecerse en las casas.',
        ],
        uniqueUnit: {
            name: 'Elefante con Ballesta',
            image: 'https://picsum.photos/seed/ballistaelephant/200/200',
            description: 'Elefante que dispara proyectiles de escorpión, devastador contra grupos de unidades.'
        },
        uniqueTechs: [
            { name: 'Tusk Swords', age: 'Castillos', description: 'Elefantes de batalla +3 de ataque.' },
            { name: 'Double Crossbow', age: 'Imperial', description: 'Elefantes con ballesta y escorpiones disparan dos proyectiles.' },
        ],
        teamBonus: 'Escorpiones +1 de alcance.',
    },
    {
        id: 'malay',
        name: 'Malayos',
        shield: 'https://picsum.photos/seed/malay_shield/100/100',
        playstyle: 'Civilización naval con avances de edad ultra rápidos y muelles que se convierten en torres defensivas.',
        bonuses: [
            'Avanzar de edad es un 66% más rápido.',
            'Trampas para peces cuestan -33% y proporcionan comida infinita.',
            'Muelles se mejoran a puertos, que disparan flechas.',
        ],
        uniqueUnit: {
            name: 'Guerrero Karambit',
            image: 'https://picsum.photos/seed/karambitwarrior/200/200',
            description: 'Infantería extremadamente barata y rápida que ocupa solo medio espacio de población.'
        },
        uniqueTechs: [
            { name: 'Thalassocracy', age: 'Castillos', description: 'Muelles se mejoran a puertos, que atacan.' },
            { name: 'Forced Levy', age: 'Imperial', description: 'Línea de milicia no cuesta oro.' },
        ],
        teamBonus: 'Muelles +100% de línea de visión.',
    },
    {
        id: 'vietnamese',
        name: 'Vietnamitas',
        shield: 'https://picsum.photos/seed/vietnamese_shield/100/100',
        playstyle: 'Civilización de arqueros y exploración, excelentes para controlar el mapa y con unidades de arquería muy resistentes.',
        bonuses: [
            'Revela las posiciones de los Centros Urbanos enemigos al inicio.',
            'Unidades de arquería tienen +20% de HP.',
            'Conscripción gratis.',
        ],
        uniqueUnit: {
            name: 'Arquero Ratan',
            image: 'https://picsum.photos/seed/rattanarcher/200/200',
            description: 'Arquero con alta armadura anti-proyectil, excelente contra otros arqueros.'
        },
        uniqueTechs: [
            { name: 'Chatras', age: 'Castillos', description: 'Elefantes de batalla +50 HP.' },
            { name: 'Paper Money', age: 'Imperial', description: 'Tus leñadores y los de tu equipo generan oro lentamente.' },
        ],
        teamBonus: 'Guerrilleros imperiales disponibles en la galería de tiro con arco.',
    },
];
