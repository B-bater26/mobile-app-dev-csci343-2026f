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
    "IMAGE_URL_HERE"
  ),
  new Destination(
    "d2",
    "c2",
    "Tower of London",
    900,
    1078,
    4.6,
    "A riverside fortress that has served as a royal palace, an armory, and a prison. It houses the Crown Jewels and is still guarded by the Yeomen Warders, who live on the grounds.",
    "IMAGE_URL_HERE"
  ),
  new Destination(
    "d3",
    "c3",
    "Hagia Sophia",
    850,
    537,
    4.7,
    "Built as a cathedral under the Byzantine emperor Justinian, later converted to a mosque, then a museum, and back to a mosque. Its enormous central dome was the largest in the world for nearly a thousand years.",
    "IMAGE_URL_HERE"
  ),
  new Destination(
    "d4",
    "c4",
    "Sagrada Familia",
    1050,
    1882,
    4.8,
    "Antoni Gaudi's unfinished basilica in Barcelona, still under construction more than a century after the first stone was laid. The stained glass washes the interior in shifting color through the day.",
    "IMAGE_URL_HERE"
  ),
  new Destination(
    "d5",
    "c5",
    "Chichen Itza",
    1150,
    1988,
    4.6,
    "A Maya city on the Yucatan Peninsula centered on the stepped pyramid of El Castillo. Twice a year the equinox sun casts a shadow down the staircase that resembles a descending serpent.",
    "IMAGE_URL_HERE"
  ),
  new Destination(
    "d6",
    "c6",
    "Fushimi Inari Shrine",
    1900,
    711,
    4.8,
    "A Shinto shrine south of Kyoto known for the thousands of vermilion torii gates lining the trails up Mount Inari. The full loop to the summit takes two to three hours.",
    "IMAGE_URL_HERE"
  ),
  new Destination(
    "d7",
    "c7",
    "Pyramids of Giza",
    1300,
    1979,
    4.7,
    "Three pyramids built as tombs for Fourth Dynasty pharaohs, guarded by the Great Sphinx. The Great Pyramid stood as the tallest structure on earth for over three thousand years.",
    "IMAGE_URL_HERE"
  ),
  new Destination(
    "d8",
    "c8",
    "Eiffel Tower",
    1250,
    1889,
    4.6,
    "An iron lattice tower raised for the 1889 World's Fair and intended to be dismantled afterward. Its radio antennas saved it, and the top platform now looks out across all of Paris.",
    "IMAGE_URL_HERE"
  ),
  new Destination(
    "d9",
    "c9",
    "Banff National Park",
    1350,
    1885,
    4.9,
    "Canada's oldest national park, set in the Alberta Rockies. Lake Louise and Moraine Lake get their blue-green color from glacial silt suspended in the meltwater.",
    "IMAGE_URL_HERE"
  ),
  new Destination(
    "d10",
    "c10",
    "Cliffs of Moher",
    950,
    1979,
    4.8,
    "Atlantic sea cliffs along the County Clare coast, rising past two hundred meters at their highest. O'Brien's Tower was put up in the 1830s purely as a viewing platform for visitors.",
    "IMAGE_URL_HERE"
  ),
  new Destination(
    "d11",
    "c1",
    "Yellowstone National Park",
    1400,
    1872,
    4.7,
    "The first national park anywhere in the world, sitting on top of an active volcanic caldera. Half the planet's geysers are inside its boundaries, Old Faithful among them.",
    "IMAGE_URL_HERE"
  ),
  new Destination(
    "d12",
    "c2",
    "Edinburgh Castle",
    1000,
    1103,
    4.5,
    "A fortress on volcanic rock above the Scottish capital, occupied in some form since the Iron Age. The One O'Clock Gun has been fired almost every day since 1861.",
    "IMAGE_URL_HERE"
  ),
  new Destination(
    "d13",
    "c3",
    "Cappadocia",
    1100,
    1985,
    4.9,
    "A region of soft volcanic rock in central Anatolia eroded into spires locally called fairy chimneys. Entire underground cities were cut into the stone, and hot air balloons launch at dawn most mornings.",
    "IMAGE_URL_HERE"
  ),
  new Destination(
    "d14",
    "c4",
    "Alhambra",
    980,
    1238,
    4.7,
    "A palace and fortress complex in Granada built by the Nasrid dynasty. The courtyards, carved stucco, and water channels are among the best surviving examples of Islamic architecture in Europe.",
    "IMAGE_URL_HERE"
  ),
  new Destination(
    "d15",
    "c5",
    "Tulum Ruins",
    1000,
    1981,
    4.4,
    "A walled Maya port perched on a cliff above the Caribbean, one of the last cities the Maya built. A beach sits directly below the ruins and is reachable from the site.",
    "IMAGE_URL_HERE"
  ),
  new Destination(
    "d16",
    "c6",
    "Tokyo Skytree",
    1500,
    2012,
    4.4,
    "A broadcasting and observation tower in Sumida, and the tallest structure in Japan. Its central column is engineered to sway independently of the outer frame during earthquakes.",
    "IMAGE_URL_HERE"
  ),
  new Destination(
    "d17",
    "c7",
    "Valley of the Kings",
    1250,
    1979,
    4.6,
    "A burial ground across the Nile from Luxor holding more than sixty rock-cut tombs of New Kingdom pharaohs. Tutankhamun's tomb was found here largely intact in 1922.",
    "IMAGE_URL_HERE"
  ),
  new Destination(
    "d18",
    "c8",
    "Palace of Versailles",
    1100,
    1682,
    4.7,
    "Louis XIV moved the French court here from Paris, turning a hunting lodge into the seat of government. The Hall of Mirrors runs seventy-three meters along the garden front.",
    "IMAGE_URL_HERE"
  ),
  new Destination(
    "d19",
    "c9",
    "Old Quebec",
    1020,
    1608,
    4.6,
    "The historic core of Quebec City and the only walled city north of Mexico. Its narrow streets and stone buildings make it the oldest French settlement still standing in North America.",
    "IMAGE_URL_HERE"
  ),
  new Destination(
    "d20",
    "c10",
    "Giant's Causeway",
    900,
    1986,
    4.5,
    "Around forty thousand interlocking basalt columns on the Antrim coast, formed by cooling lava. Local legend credits them to the giant Finn MacCool building a road to Scotland.",
    "IMAGE_URL_HERE"
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