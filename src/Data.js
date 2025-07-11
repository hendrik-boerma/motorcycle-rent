import sport from './Images/sport.jpg'
import adventure from './Images/adventure.jpg'
import naked from './Images/114.jpg'
import livewire from './Images/livewire.jpg'
import placeholder from './Images/placeholderimage.png';

export const bikes = [
    {
        brand: 'Harley Davidson',
        name: 'LiveWire',
        price: 95,
        engine: 'Electric liquid-cooled',
        year: 2020,
        picture: livewire,
        link: 'livewire',
        index: 0,
        description: 'Harley’s first electric motorcycle, the LiveWire delivers instant torque and a futuristic riding experience. It’s perfect for urban riders looking for performance and sustainability.'
    },
    {
        brand: 'Harley Davidson',
        name: 'Pan America',
        price: 100,
        engine: 'V-twin 1250',
        year: 2022,
        picture: adventure,
        link: 'pan_america',
        index: 1,
        description: 'The Pan America is Harley’s bold entry into the adventure touring segment. It combines rugged off-road capability with long-distance comfort.'
    },
    {
        brand: 'Harley Davidson',
        name: 'Fat Bob',
        price: 95,
        engine: 'V-twin 1868',
        year: 2022,
        picture: naked,
        link: 'fat_bob',
        index: 2,
        description: 'The Fat Bob stands out with its aggressive styling and powerful Milwaukee-Eight engine. It’s built for riders who want muscle and attitude.'
    },
    {
        brand: 'Harley Davidson',
        name: 'Streetfighter',
        price: 95,
        engine: 'V-twin 975',
        year: 2024,
        picture: sport,
        link: 'streetfighter',
        index: 3,
        description: 'A modern take on performance, the Streetfighter offers nimble handling and a punchy engine. It’s ideal for spirited rides through city streets.'
    },
    {
        brand: 'Ducati',
        name: 'Panigale V4',
        price: 100,
        engine: 'V4 1103cc',
        year: 2022,
        picture: placeholder,
        link: 'panigale',
        index: 4,
        description: 'The Panigale V4 is Ducati’s flagship superbike, engineered for track dominance. Its V4 engine and aerodynamic design deliver unmatched speed and precision.'
    },
    {
        brand: 'Triumph',
        name: 'Bonneville T120',
        price: 90,
        engine: 'Parallel twin 1200',
        year: 2023,
        picture: placeholder,
        link: 'bonneville',
        index: 5,
        description: 'A modern classic, the Bonneville T120 blends vintage charm with modern performance. It’s perfect for relaxed cruising with timeless style.'
    },
    {
        brand: 'BMW',
        name: 'R 1250 GS Adventure',
        price: 110,
        engine: 'Boxer twin 1254',
        year: 2021,
        picture: placeholder,
        link: 'gs_adventure',
        index: 6,
        description: 'The R 1250 GS Adventure is the ultimate touring machine, built for long-distance exploration. Its boxer engine and advanced tech make it a global favorite.'
    },
    {
        brand: 'Yamaha',
        name: 'YZF-R6',
        price: 95,
        engine: 'Inline-four 599',
        year: 2022,
        picture: placeholder,
        link: 'r6',
        index: 7,
        description: 'The YZF-R6 is a track-focused supersport bike with razor-sharp handling. It’s a favorite among riders who crave high-revving thrills.'
    },
    {
        brand: 'Honda',
        name: 'CBR1000RR Fireblade',
        price: 100,
        engine: 'Inline-four 999',
        year: 2021,
        picture: placeholder,
        link: 'fireblade',
        index: 8,
        description: 'Honda’s Fireblade is a legendary superbike known for its balance and precision. It’s engineered for both road and track excellence.'
    },
    {
        brand: 'Kawasaki',
        name: 'Ninja ZX-10R',
        price: 105,
        engine: 'Inline-four 998',
        year: 2023,
        picture: placeholder,
        link: 'zx10r',
        index: 9,
        description: 'The ZX-10R is Kawasaki’s championship-winning superbike. It’s packed with race-derived technology for ultimate performance.'
    },
    {
        brand: 'Suzuki',
        name: 'GSX-R1000',
        price: 95,
        engine: 'Inline-four 999',
        year: 2022,
        picture: placeholder,
        link: 'gsxr1000',
        index: 10,
        description: 'The GSX-R1000 is Suzuki’s flagship sportbike, offering a blend of power and agility. It’s built for riders who demand speed and control.'
    },
    {
        brand: 'Indian',
        name: 'Scout',
        price: 90,
        engine: 'V-twin 1133',
        year: 2021,
        picture: placeholder,
        link: 'scout',
        index: 11,
        description: 'The Indian Scout is a stylish cruiser with a smooth V-twin engine. It’s ideal for relaxed rides with a touch of heritage.'
    },
    {
        brand: 'KTM',
        name: '1290 Super Duke R',
        price: 110,
        engine: 'V-twin 1301',
        year: 2023,
        picture: placeholder,
        link: 'super_duke_r',
        index: 12,
        description: 'Nicknamed “The Beast,” the Super Duke R is a naked bike with ferocious power. It’s built for adrenaline-fueled street riding.'
    },
    {
        brand: 'Yamaha',
        name: 'MT-09',
        price: 85,
        engine: 'Inline-three 889',
        year: 2023,
        picture: placeholder,
        link: 'mt09',
        index: 13,
        description: 'The MT-09 is a versatile naked bike with a torquey triple engine. It’s fun, agile, and perfect for everyday thrills.'
    },
    {
        brand: 'Ducati',
        name: 'Diavel',
        price: 105,
        engine: 'V-twin 1260',
        year: 2021,
        picture: placeholder,
        link: 'diavel',
        index: 14,
        description: 'The Diavel blends cruiser comfort with sportbike performance. Its muscular design and powerful engine make a bold statement.'
    },
    {
        brand: 'Triumph',
        name: 'Street Triple',
        price: 90,
        engine: 'Inline-triple 765',
        year: 2022,
        picture: placeholder,
        link: 'street_triple',
        index: 15,
        description: 'The Street Triple is a lightweight naked bike with sharp handling. It’s a favorite for urban riders and weekend warriors alike.'
    },
    {
        brand: 'BMW',
        name: 'S 1000 R',
        price: 100,
        engine: 'Inline-four 999',
        year: 2022,
        picture: placeholder,
        link: 's1000r',
        index: 16,
        description: 'The S 1000 R is a high-performance naked bike with superbike DNA. It offers cutting-edge tech and thrilling acceleration.'
    },
    {
        brand: 'Triumph',
        name: 'Speed Twin',
        price: 95,
        engine: 'Parallel twin 1200',
        year: 2021,
        picture: placeholder,
        link: 'speed_twin',
        index: 17,
        description: 'The Speed Twin combines retro looks with modern performance. It’s a stylish and capable roadster for everyday riding.'
    },
    {
        brand: 'Honda',
        name: 'CB650R',
        price: 85,
        engine: 'Inline-four 649',
        year: 2023,
        picture: placeholder,
        link: 'cb650r',
        index: 18,
        description: 'The CB650R is a middleweight naked bike with a smooth inline-four engine. It’s great for new riders and seasoned commuters alike.'
    },
    {
        brand: 'Aprilia',
        name: 'Tuono V4',
        price: 105,
        engine: 'V4 1077',
        year: 2022,
        picture: placeholder,
        link: 'tuono',
        index: 19,
        description: 'The Tuono V4 is a streetfighter with race-bred performance. Its V4 engine and electronics package make it a top-tier naked bike.'
    },
    {
        brand: 'BMW',
        name: 'F 900 XR',
        price: 95,
        engine: 'Parallel twin 895',
        year: 2022,
        picture: placeholder,
        link: 'xr',
        index: 20,
        description: 'The F 900 XR is a sport-touring bike with upright ergonomics and dynamic performance. It’s built for comfort and agility on long rides.'
    },

    {
        brand: 'Suzuki',
        name: 'V-Strom 1050',
        price: 90,
        engine: 'V-twin 1037',
        year: 2023,
        picture: placeholder,
        link: 'vstrom',
        index: 21,
        description: 'The V-Strom 1050 is a capable adventure bike with a reliable V-twin engine. It’s built for touring comfort and light off-road exploration.'
    },
    {
        brand: 'Yamaha',
        name: 'MT-07',
        price: 80,
        engine: 'Parallel twin 689',
        year: 2022,
        picture: placeholder,
        link: 'mt07',
        index: 22,
        description: 'The MT-07 is a lightweight and approachable naked bike with a punchy twin-cylinder engine. It’s a favorite among beginners and experienced riders alike.'
    }
];


export const brands = [...new Set(bikes.map(bike => bike.brand))].sort();
export const prices = [...new Set(bikes.map(bike => bike.price))].sort((a, b) => a - b);