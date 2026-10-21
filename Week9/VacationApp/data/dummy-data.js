import Country from "../models/countries";
import Destination from "../models/destinations";

export const COUNTRIES = [
  new Country("c1", "United States", "#f44336"), // Red
  new Country("c2", "United Kingdom", "#2196f3"), // Blue
  new Country("c3", "Turkey", "#4caf50"), // Green
  new Country("c4", "Spain", "#ff9800"), // Orange
  new Country("c5", "Mexico", "#9c27b0"), // Purple
  new Country("c6", "Japan", "#ffeb3b"), // Yellow
  new Country("c7", "Egypt", "#03a9f4"), // Light Blue
  new Country("c8", "France", "#8bc34a"), // Light Green
  new Country("c9", "Canada", "#ff5722"), // Deep Orange
  new Country("c10", "Ireland", "#673ab7"), // Deep Purple
];

export const DESTINATIONS = [
  new Destination(
    "d1",
    "c1",
    "Grand Canyon National Park",
    1200,
    1919,
    4.8,
    "A mile-deep gorge carved by the Colorado River across northern Arizona. The South Rim is open all year and holds most of the lookouts and lodging, while the North Rim shuts down through the winter months.",
    "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SAkYykJvHXQNPzNGdDEHKvieYsBrXO71wD4dBGezlGPQz9Njm-fadSjPRMeHMUeM2KjLKo2rC3UeQ9w8cer3krSCnmrvgzwu_1CoU591nWLNmDiwbDTMlH1XPnSgZyx-7J5LQ=s680-w680-h510-rw"
  ),
  new Destination(
    "d2",
    "c2",
    "Tower of London",
    900,
    1078,
    4.6,
    "A riverside fortress that has served as a royal palace, an armory, and a prison. It houses the Crown Jewels and is still guarded by the Yeomen Warders, who live on the grounds.",
    "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S7AXCRe0lALJV4NhsHLbULyyjhPWnipgNQDFOvzm1bIU7m0sleXdLOBeVJ-rhAsGObFCELSu8lyGvksfJbuqdBhY979IfAN2fXz1B_3SmL1o0Vozu__oxY-IHzQIy8X-qPPSV9_Q=s680-w680-h510-rw"
  ),
  new Destination(
    "d3",
    "c3",
    "Hagia Sophia",
    850,
    537,
    4.7,
    "Built as a cathedral under the Byzantine emperor Justinian, later converted to a mosque, then a museum, and back to a mosque. Its enormous central dome was the largest in the world for nearly a thousand years.",
    "https://lh3.googleusercontent.com/grass-cs/AABkmLe-ptVWglR5RELIy1JYbXSrcC8_ekTV7iKZheF8_XaYsftkHTp84vOzcibS-foa-DO_En3Lv3Lr7l5Bo-LNmu-Mmez7vIEGUoCX6yrwYC1F2pQ5aMmC1GHjftfufs2pUgmrGEnP5w=w408-h306-k-no"
  ),
  new Destination(
    "d4",
    "c4",
    "Sagrada Familia",
    1050,
    1882,
    4.8,
    "Antoni Gaudi's unfinished basilica in Barcelona, still under construction more than a century after the first stone was laid. The stained glass washes the interior in shifting color through the day.",
    "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QC0OWxw-uYc3jVzg9-Hvshv2y1qrD4-RFfh-0-LDq79TtzfvoX-L7J6eGnDNUwBCrfmKG0STLH1qxtxVDEcnHIPWPGCG4CFMapB2_VeFM8eVo7LQXc9MoJs8K3P8Vqa9Bv1SuWYA=s680-w680-h510-rw"
  ),
  new Destination(
    "d5",
    "c5",
    "Chichen Itza",
    1150,
    1988,
    4.6,
    "A Maya city on the Yucatan Peninsula centered on the stepped pyramid of El Castillo. Twice a year the equinox sun casts a shadow down the staircase that resembles a descending serpent.",
    "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Tn6nqRsfVGJ2G8M5T9awGxdzVK6XFa7xQGjm2UPF2o6NcmRlBzpsUxAMZMDNac1btm89G69egLaAAYQeYYrzlhQcko2bU4toSn3Uw4Zszm7VHgxizgT9MZ6H1pMo_K8A0NvLI=s680-w680-h510-rw"
  ),
  new Destination(
    "d6",
    "c6",
    "Fushimi Inari Shrine",
    1900,
    711,
    4.8,
    "A Shinto shrine south of Kyoto known for the thousands of vermilion torii gates lining the trails up Mount Inari. The full loop to the summit takes two to three hours.",
    "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sci8UpHPe5nXG5DfUMGIqD0iVB7SsjkOB5oMpYqt9Oi7QWnhInuIw8OgdQZrv7zogj49DUEoRTzq8sveB1LTkNkDHgnL5F1ltIzdwjEL-CWTPugIdnI3dHiY9jEcd7Ktja9jzO8ztpBfM=s680-w680-h510-rw"
  ),
  new Destination(
    "d7",
    "c7",
    "Pyramids of Giza",
    1300,
    1979,
    4.7,
    "Three pyramids built as tombs for Fourth Dynasty pharaohs, guarded by the Great Sphinx. The Great Pyramid stood as the tallest structure on earth for over three thousand years.",
    "https://lh3.googleusercontent.com/grass-cs/AABkmLfDKGZWWjRhYuHH908JXYCP2DAD63sV44wHj5yCEDPMLCzdQkbemNZs30jPakqoTMPCbiSmln8a3Q5_AU6iUzTZBBlRw-CddilqkvP1S8GO56cF-fcOpVeprADEkaGgyj-Do6IY=w408-h374-k-no"
  ),
  new Destination(
    "d8",
    "c8",
    "Eiffel Tower",
    1250,
    1889,
    4.6,
    "An iron lattice tower raised for the 1889 World's Fair and intended to be dismantled afterward. Its radio antennas saved it, and the top platform now looks out across all of Paris.",
    "https://lh3.googleusercontent.com/grass-cs/AABkmLdZuoljzvV1k1uTP3EmhJr-KY2hZnS6R9XayzETpxnB9DjLf7EzunzxtSpZYj2Wq1_lQje45KtHy5XdYLgp8XgRap3FUMeIDcsD4OwXLYQ0XhrnqjcrGQ4B3Wsai9Ms3bbsNJOS1Q=w408-h543-k-no"
  ),
  new Destination(
    "d9",
    "c9",
    "Banff National Park",
    1350,
    1885,
    4.9,
    "Canada's oldest national park, set in the Alberta Rockies. Lake Louise and Moraine Lake get their blue-green color from glacial silt suspended in the meltwater.",
    "https://lh3.googleusercontent.com/grass-cs/AABkmLc-FxwqKUjzmVDwIUo6k-ZJ9tvEIYoCjr-fC3sObYIh3a8GQx4800bR-s-RxNnrIC4uu6h8-JU9vMU5EOY4GnqX-0VfuJtDMFv2QAapKOlVIuKSVqAQv54c98taa3phqqtKCqsY=w408-h493-k-no"
  ),
  new Destination(
    "d10",
    "c10",
    "Cliffs of Moher",
    950,
    1979,
    4.8,
    "Atlantic sea cliffs along the County Clare coast, rising past two hundred meters at their highest. O'Brien's Tower was put up in the 1830s purely as a viewing platform for visitors.",
    "https://lh3.googleusercontent.com/grass-cs/AABkmLccbFvsThyUmXqiilboY7hC_ifTWndvmZwrIP1TysSyoMJT--b-fgYdWasFzGkmpRidl4cHXvcBQ2LCFIJg2XUtI1FAmq87U8PpYX8U9thULZ6M3Wq-ush5BQMh40HbR_6lvgTX=w408-h272-k-no"
  ),
  new Destination(
    "d11",
    "c1",
    "Yellowstone National Park",
    1400,
    1872,
    4.7,
    "The first national park anywhere in the world, sitting on top of an active volcanic caldera. Half the planet's geysers are inside its boundaries, Old Faithful among them.",
    "https://lh3.googleusercontent.com/grass-cs/AABkmLfNxPcOV0tbXq265ZHuptTcpLdlkoDK8A4l3F8mipNgyS_u_PixfGEc1gFJi3GY9W96pJPuZko9pGtoL8wLPLcRk_9EbjNhf_fnVDMhsOrQfkshAxDfhtw9UjILobQbeYBscBiy=w408-h544-k-no"
  ),
  new Destination(
    "d12",
    "c2",
    "Edinburgh Castle",
    1000,
    1103,
    4.5,
    "A fortress on volcanic rock above the Scottish capital, occupied in some form since the Iron Age. The One O'Clock Gun has been fired almost every day since 1861.",
    "https://lh3.googleusercontent.com/grass-cs/AABkmLc5TTFiRc-YCOIanXjjAFus1v9pMpwsnjaPFTh9q1GqGzNHdRiqTw9CtV3N6YwmdP1Jo-zMgmHaOx8O-vYjIgEzKhBRqDGLc-d5JLHnsPpvA7gBgiIw8vhHkVIc2COXAS_MxvaS=w408-h306-k-no"
  ),
  new Destination(
    "d13",
    "c3",
    "Cappadocia",
    1100,
    1985,
    4.9,
    "A region of soft volcanic rock in central Anatolia eroded into spires locally called fairy chimneys. Entire underground cities were cut into the stone, and hot air balloons launch at dawn most mornings.",
    "https://lh3.googleusercontent.com/grass-cs/AABkmLcSgEWHr4XS6pqNtR4GmrAM_pY_dONl_CZ8gTorKBVTveYnB4aRnHOWd709KeqKxEFs-MhoQASthOzg_-ubXFX5rZgYFvVbOgqz7cMMgmhZv_jCdVqdU1hPUv1lgNemq0aLHYP_iwKKM4g=w408-h306-k-no"
  ),
  new Destination(
    "d14",
    "c4",
    "Alhambra",
    980,
    1238,
    4.7,
    "A palace and fortress complex in Granada built by the Nasrid dynasty. The courtyards, carved stucco, and water channels are among the best surviving examples of Islamic architecture in Europe.",
    "https://lh3.googleusercontent.com/grass-cs/AABkmLcxKOIDULHmgeRe0FKs5zG1aFekm3sokAJomb_QQrInftX_nYHst5N4luifng0GcnzsKE8i-Vinz5iHV3zvKDulTGZgT5s0mP65KpD7PODnzrhFp63B61suzcCkLjw9zHpUcKk=w408-h307-k-no"
  ),
  new Destination(
    "d15",
    "c5",
    "Tulum Ruins",
    1000,
    1981,
    4.4,
    "A walled Maya port perched on a cliff above the Caribbean, one of the last cities the Maya built. A beach sits directly below the ruins and is reachable from the site.",
    "https://lh3.googleusercontent.com/grass-cs/AABkmLdZT1uE9qCIXWheI7HHFnRYDIvbXzabPaynLmryx7S-GFlgViFgvJATei8x1msVHiCj2RMDw5HKHK8hxaqMjSFin4pIreOo5Fp54s0qbqNeWGgPOb5l1MttIxOZQp9YSJ_u5hxC=w426-h240-k-no"
  ),
  new Destination(
    "d16",
    "c6",
    "Tokyo Skytree",
    1500,
    2012,
    4.4,
    "A broadcasting and observation tower in Sumida, and the tallest structure in Japan. Its central column is engineered to sway independently of the outer frame during earthquakes.",
    "https://lh3.googleusercontent.com/grass-cs/AABkmLffsHCwvB4kcbbCF7X_V7cqYr1G66pivO-x5tw9kieoEBM2_7O_FAFcuP7oYCqWukQDcT8wYx4WI9jeTE7jtLUdYwjPlp1TWb97kTZi_LfSydJcXvLaTAZ_rgHci_SX-zllIf62=w408-h725-k-no"
  ),
  new Destination(
    "d17",
    "c7",
    "Valley of the Kings",
    1250,
    1979,
    4.6,
    "A burial ground across the Nile from Luxor holding more than sixty rock-cut tombs of New Kingdom pharaohs. Tutankhamun's tomb was found here largely intact in 1922.",
    "https://lh3.googleusercontent.com/grass-cs/AABkmLfe1PVK9UpuNVFbNbZtwilE2SaWekDF9HVN85u2KASD2C3ND9xGoUNbeU7EJqkq9fWdl1A-K_rWW5TLEVnKm8wta1ozXQSnPhchWaqa0bn00kXig4M0v6DADfPh5B_7We1Qa1CnOA=w408-h306-k-no"
  ),
  new Destination(
    "d18",
    "c8",
    "Palace of Versailles",
    1100,
    1682,
    4.7,
    "Louis XIV moved the French court here from Paris, turning a hunting lodge into the seat of government. The Hall of Mirrors runs seventy-three meters along the garden front.",
    "https://lh3.googleusercontent.com/grass-cs/AABkmLdYvZzewOCdU2laU1uPmLByxv7IQILEFtoeS96ej5QiJGqbGrjh_usYRiuiynC1lvoLIRvFsKZmWZ6pGbcU7fJrpU-DmdNQIT3sjaXF_pkKZtCEeruZD9frtVxRrloZ1o6fqW0j_g=w408-h306-k-no"
  ),
  new Destination(
    "d19",
    "c9",
    "Old Quebec",
    1020,
    1608,
    4.6,
    "The historic core of Quebec City and the only walled city north of Mexico. Its narrow streets and stone buildings make it the oldest French settlement still standing in North America.",
    "https://lh3.googleusercontent.com/grass-cs/AABkmLdkl5Z0KS9fYHV5tjMYwbmw1CCH85UwNE1zI-nbkMKQ6nIQQpTG18Llk4DzQDZ2WuIFsri5KHHG9Ob6TmIBUal9nsrTBzsljizsfBq5kbV-3_1ljDkOVrmScKJuxh9guyOnnjNCow=w408-h306-k-no"
  ),
  new Destination(
    "d20",
    "c10",
    "Giant's Causeway",
    900,
    1986,
    4.5,
    "Around forty thousand interlocking basalt columns on the Antrim coast, formed by cooling lava. Local legend credits them to the giant Finn MacCool building a road to Scotland.",
    "https://lh3.googleusercontent.com/grass-cs/AABkmLcA5J5ftAsN8p8xk_n7Rffz2ZXo6p9739ua5xM2Tyv428ljyiVSe5VU7AhnF4hIurFrqK63lnf4Jdg8KhWBaHMsUdGkcmx-xftMhdlHPx1AYcrPKExo_nU0VgFqTqS6CR0e-oQaoA=w408-h274-k-no"
  ),
];



/* 
The information here was written with a series of prompts sent to Claude, owned by Anthropic:
This was made at the request of the video around the 30 minute mark.
The AI rewrote all code above this comment block.
The prompt was as followed:

he says "For your actual app I don't give you the dummy data, but you can copy this into chat and say 'Hey, I want' - for your hw assignment you wanted the vacation destinations. So, what I recommend doing is just
copying this file into chat and saying "Give me destinations, different colors for them as well"". thats the greenlight to hand over the dummy file to you and have you alter it, correct?
ignore the weblinks, ill work with those later, just leave placeholders or whatever. ill write the comment block at the top myself about ai.

as for countries:
United States
United Kingdom
Turkey
Spain
Mexico
Japan
Egypt
France
Canada

my bad, add Ireland too, and then these are the two things in models. before you move on make sure we compare whats required so we arent coding too much. check these out

ill handle rewriting the models, you just to the dummy data

Source: https://claude.ai/
*/