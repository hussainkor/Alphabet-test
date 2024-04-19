const alphaTest = [
    {
        letter: "A",
        name: "Apple",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Discovery_apples.jpg/800px-Discovery_apples.jpg",
        details: {
            fullDetails: 'An apple is a round, edible fruit that grows on an apple tree. The scientific name for the apple tree genus is Malus, and most apples grown today are of the Malus domestica species. Apple trees are cultivated worldwide and originated in Central Asia, where the wild ancestor, Malus sieversii, is still found.'
        }
    },
    {
        letter: "B",
        name: "Bear",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/9/9e/Ours_brun_parcanimalierpyrenees_1.jpg",
        details: {
            fullDetails: 'Bears are carnivoran mammals of the family Ursidae (/ˈɜːrsɪdiː, -daɪ/). They are classified as caniforms, or doglike carnivorans. Although only eight species of bears are extant, they are widespread, appearing in a wide variety of habitats throughout most of the Northern Hemisphere and partially in the Southern Hemisphere. Bears are found on the continents of North America, South America, and Eurasia.'
        }
    },
    {
        letter: "C",
        name: "Cat",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/b/b6/Felis_catus-cat_on_snow.jpg",
        details: {
            fullDetails: 'The cat (Felis catus), commonly referred to as the domestic cat or house cat, is the only domesticated species in the family Felidae. Recent advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around 7500 BC.'
        }
    },
    {
        letter: "D",
        name: "Dog",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/9/99/Brooks_Chase_Ranger_of_Jolly_Dogs_Jack_Russell.jpg",
        details: {
            fullDetails: 'The dog (Canis familiaris or Canis lupus familiaris) is a domesticated descendant of the wolf. Also called the domestic dog, it is derived from extinct gray wolves, and the gray wolf is the dogs closest living relative The dog was the first species to be domesticated by humans.'
        }
    },
    {
        letter: "E",
        name: "Elephant",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/9/98/Elephas_maximus_%28Bandipur%29.jpg",
        details: {
            fullDetails: 'Elephants are the largest living land animals. Three living species are currently recognised: the African bush elephant (Loxodonta africana), the African forest elephant (L. cyclotis), and the Asian elephant (Elephas maximus). They are the only surviving members of the family Elephantidae and the order Proboscidea; extinct relatives include mammoths and mastodons. '
        }
    },
    {
        letter: "F",
        name: "Fish",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/7/7f/Balantiocheilos_melanopterus_-_Karlsruhe_Zoo_02_%28cropped%29.jpg",
        details: {
            fullDetails: 'A fish (pl.: fish or fishes) is an aquatic, gill-bearing vertebrate animal with swimming fins and a hard skull, but lacking limbs with digits. Fish can be grouped into the more basal jawless fish and the more common jawed fish, the latter including all living cartilaginous and bony fish, as well as the extinct placoderms and acanthodians.'
        }
    },
    {
        letter: "G",
        name: "Goat",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/f/ff/Domestic_goat_kid_in_capeweed.jpg",
        details: {
            fullDetails: 'The goat or domestic goat (Capra hircus) is a domesticated species of goat-antelope typically kept as livestock. It was domesticated from the wild goat (C. aegagrus) of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and the tribe Caprini, meaning it is closely related to the sheep. There are over 300 distinct breeds of goat.'
        }
    },
    {
        letter: "H",
        name: "Hut",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/b/b0/Sindhi_desert_Home.JPG",
        details: {
            fullDetails: 'A hut is a small dwelling, which may be constructed of various local materials. Huts are a type of vernacular architecture because they are built of readily available materials such as wood, snow, ice, stone, grass, palm leaves, branches, clay, hides, fabric, or mud using techniques passed down through the generations.'
        }
    },
    {
        letter: "I",
        name: "Icecream",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/a/a5/Italian_ice_cream.jpg",
        details: {
            fullDetails: 'Ice cream is a frozen dessert typically made from milk or cream that has been flavoured with a sweetener, either sugar or an alternative, and a spice, such as cocoa or vanilla, or with fruit, such as strawberries or peaches. Food colouring is sometimes added in addition to stabilizers. The mixture is cooled below the freezing point of water and stirred to incorporate air spaces and prevent detectable ice crystals from forming'
        }
    },
    {
        letter: "J",
        name: "Juice",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/6/6a/Pomegranate_Juice_%282019%29.jpg",
        details: {
            fullDetails: 'Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice. Juice is commonly consumed as a beverage or used as an ingredient or flavoring in foods or other beverages, such as smoothies. '
        }
    },
    {
        letter: "K",
        name: "Kite",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/f/fb/Thrill-of-flying-kites_640.jpg",
        details: {
            fullDetails: 'A kite is a tethered heavier-than-air or lighter-than-air craft with wing surfaces that react against the air to create lift and drag forces.[2] A kite consists of wings, tethers and anchors. Kites often have a bridle and tail to guide the face of the kite so the wind can lift it.[3] Some kite designs do not need a bridle; box kites can have a single attachment point.'
        }
    },
    {
        letter: "L",
        name: "Lion",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg",
        details: {
            fullDetails: 'The lion (Panthera leo) is a large cat of the genus Panthera, native to Africa and India. It has a muscular, broad-chested body; a short, rounded head; round ears; and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane. It is a social species, forming groups called prides. A lions pride consists of a few adult males, related females, and cubs.'
        }
    },
    {
        letter: "M",
        name: "Monkey",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/4/40/Portrait_of_a_father.jpg",
        details: {
            fullDetails: 'Monkey is a common name that may refer to most mammals of the infraorder Simiiformes, also known as the simians. Traditionally, all animals in the group now known as simians are counted as monkeys except the apes. Thus monkeys, in that sense, constitute an incomplete paraphyletic grouping; however, in the broader sense based on cladistics, apes (Hominoidea) are also included, making the terms monkeys and simians synonyms in regard to their scope.'
        }
    },
    {
        letter: "N",
        name: "Nest",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/a/ac/Artamus_cyanopterus_Mortimer.jpg",
        details: {
            fullDetails: 'A nest is a structure built for certain animals to hold eggs or young. Although nests are most closely associated with birds, members of all classes of vertebrates and some invertebrates construct nests. They may be composed of organic material such as twigs, grass, and leaves, or may be a simple depression in the ground, or a hole in a rock, tree, or building.'
        }
    },
    {
        letter: "O",
        name: "Orange",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/e/e3/Oranges_-_whole-halved-segment.jpg",
        details: {
            fullDetails: 'An orange, also called sweet orange to distinguish it from the bitter orange Citrus × aurantium, is the fruit of a tree in the family Rutaceae. Botanically, this is the hybrid Citrus × sinensis, between the pomelo (Citrus maxima) and the mandarin orange (Citrus reticulata). The chloroplast genome, and therefore the maternal line, is that of pomelo.'
        }
    },
    {
        letter: "P",
        name: "Pen",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/0/09/Dip_Pen.jpg",
        details: {
            fullDetails: 'A pen is a common writing instrument that applies ink to a surface, usually paper, for writing or drawing.[1] Early pens such as reed pens, quill pens, dip pens and ruling pens held a small amount of ink on a nib or in a small void or cavity that had to be periodically recharged by dipping the tip of the pen into an inkwell.[2][3] Today, such pens find only a small number of specialized uses, such as in illustration and calligraphy.'
        }
    },
    {
        letter: "Q",
        name: "Queen",
        image:
            "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/mpx/2704722219/2022_09/220908-ms-queen-elizabeth-longform-obit-1920x1080-fvueub.jpg",
        details: {
            fullDetails: 'The wife or widow of a king. a woman who rules a country because she has been born into a royal family, or a woman who is married to a king.'
        }
    },
    {
        letter: "R",
        name: "Ring",
        image:
            "https://dictionary.cambridge.org/images/full/ring_noun_002_31227.jpg",
        details: {
            fullDetails: 'A small circular band, typically of precious metal and often set with one or more gemstones, worn on a finger as an ornament or a token of marriage, engagement, or authority.'
        }
    },
    {
        letter: "S",
        name: "Snake",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/e/ed/Indian_spectacled_cobra_-_Flickr_-_Scorius.jpg",
        details: {
            fullDetails: 'Snakes are elongated, limbless, carnivorous reptiles of the suborder Serpentes (/sɜːrˈpɛntiːz/).[2] Like all other squamates, snakes are ectothermic, amniote vertebrates covered in overlapping scales. Many species of snakes have skulls with several more joints than their lizard ancestors, enabling them to swallow prey much larger than their heads (cranial kinesis).'
        }
    },
    {
        letter: "T",
        name: "Tiger",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/d/d8/Panthera_tigris_corbetti_%28Tierpark_Berlin%29_832-714-%28118%29.jpg",
        details: {
            fullDetails: 'The tiger (Panthera tigris) is the largest living cat species and a member of the genus Panthera. It is most recognisable for its black stripes on orange fur with a white underside. An apex predator, it primarily preys on ungulates, such as deer and wild boar. It is territorial and generally a solitary but social predator, requiring large contiguous areas of habitat to support its requirements for prey and rearing of its offspring.'
        }
    },
    {
        letter: "U",
        name: "Umbrella",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/0/08/Umbrellas_at_Caudan_Waterfront_Mall.JPG",
        details: {
            fullDetails: 'An umbrella or parasol is a folding canopy supported by wooden or metal ribs that is mounted on a wooden, metal, or plastic pole. It is usually designed to protect a person against rain. The term umbrella is traditionally used when protecting oneself from rain, while parasol is used when protecting oneself from sunlight, though the terms continue to be used interchangeably.'
        }
    },
    {
        letter: "V",
        name: "Van",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/1/1a/2018_Ford_Transit_Custom_300_Base_2.0_facelift.jpg",
        details: {
            fullDetails: 'A van is a type of road vehicle used for transporting goods or people. Depending on the type of van, it can be bigger or smaller than a pickup truck and SUV, and bigger than a common car. There is some variation in the scope of the word across the different English-speaking countries. The smallest vans, microvans, are used for transporting either goods or people in tiny quantities'
        }
    },
    {
        letter: "W",
        name: "Watch",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/e/e1/Bond-Omega.JPG",
        details: {
            fullDetails: 'A watch is a portable timepiece intended to be carried or worn by a person.[1] It is designed to keep a consistent movement despite the motions caused by the persons activities.A wristwatch is designed to be worn around the wrist, [2] attached by a watch strap or other type of bracelet, including metal bands, leather straps, or any other kind of bracelet.'
        }
    },
    {
        letter: "X",
        name: "Xylophone",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/d/d3/Xylophone.jpg",
        details: {
            fullDetails: 'The xylophone (from Ancient Greek ξύλον (xúlon) wood, and sound, voice lit. (sound of wood) is a musical instrument in the percussion family that consists of wooden bars struck by mallets. Like the glockenspiel (which uses metal bars), the xylophone essentially consists of a set of tuned wooden keys arranged in the fashion of the keyboard of a piano.'
        }
    },
    {
        letter: "Y",
        name: "Yacht",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/e/ef/Bavaria_Cruiser_45.jpg",
        details: {
            fullDetails: 'A yacht (/jɒt/) is a sailing or power vessel used for pleasure, cruising, or racing.[2][3][4] There is no standard definition, though the term generally applies to vessels with a cabin intended for overnight use. To be termed a yacht, as opposed to a boat, such a pleasure vessel is likely to be at least 33 feet (10 m) in length and may have been judged to have good aesthetic qualities.'
        }
    },
    {
        letter: "Z",
        name: "Zebra",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/8/87/Equus_quagga_%28185908025%29.jpg",
        details: {
            fullDetails: 'Zebras (US: /ˈziːbrəz/, UK: /ˈzɛbrəz, ˈziː-/)[1] (subgenus Hippotigris) are African equines with distinctive black-and-white striped coats. There are three living species: Grévys zebra(Equus grevyi), the plains zebra(E.quagga), and the mountain zebra(E.zebra).Zebras share the genus Equus with horses and asses, the three groups being the only living members of the family Equidae.'
        }
    },
];

export default alphaTest;