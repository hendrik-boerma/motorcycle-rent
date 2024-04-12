import sport from './Images/sport.jpg'
import adventure from './Images/adventure.jpg'
import naked from './Images/114.jpg'
import livewire from './Images/livewire.jpg'
import placeholder from './Images/placeholderimage.png';

export const bikes = [
    {
        brand: 'Harley',
        name: 'LiveWire',
        price: 95,
        engine: 'Electric',
        year: 2020,
        picture: livewire,
        link: 'livewire',
        index: 0
    },
    {
        brand: 'Harley',
        name: 'Pan America',
        price: 100,
        engine: 'V-twin 1250',
        year: 2022,
        picture: adventure,
        link: 'pan_america',
        index: 1
    },
    {
        brand: 'Harley',
        name: 'Fat Bob',
        price: 95,
        engine: 'V-twin 1868',
        year: 2022,
        picture: naked,
        link: 'fat_bob',
        index: 2
    },
    {
        brand: 'Harley',
        name: 'Streetfighter',
        price: 95,
        engine: 'V-twin 975',
        year: 2024,
        picture: sport,
        link: 'streetfighter',
        index: 3
    },
    {
        brand: 'Ducati',
        name: 'Panigale V4',
        price: 100,
        engine: 'V4 1103cc',
        year: 2022,
        picture: placeholder,
        link: 'panigale',
        index: 4
    },
    {
        brand: 'Triumph',
        name: 'Bonneville T120',
        price: 90,
        engine: 'Parallel twin 1200',
        year: 2023,
        picture: placeholder,
        link: 'bonneville',
        index: 5
    },
    {
        brand: 'BMW',
        name: 'R 1250 GS Adventure',
        price: 110,
        engine: 'Boxer twin 1254',
        year: 2021,
        picture: placeholder,
        link: 'gs_adventure',
        index: 6
    },
    {
        brand: 'Yamaha',
        name: 'YZF-R6',
        price: 95,
        engine: 'Inline-four 599',
        year: 2022,
        picture: placeholder,
        link: 'r6',
        index: 7
    },
    {
        brand: 'Honda',
        name: 'CBR1000RR Fireblade',
        price: 100,
        engine: 'Inline-four 999',
        year: 2021,
        picture: placeholder,
        link: 'fireblade',
        index: 8
    },
    {
        brand: 'Kawasaki',
        name: 'Ninja ZX-10R',
        price: 105,
        engine: 'Inline-four 998',
        year: 2023,
        picture: placeholder,
        link: 'zx10r',
        index: 9
    },
    {
        brand: 'Suzuki',
        name: 'GSX-R1000',
        price: 95,
        engine: 'Inline-four 999',
        year: 2022,
        picture: placeholder,
        link: 'gsxr1000',
        index: 10
    },
    {
        brand: 'Indian',
        name: 'Scout',
        price: 90,
        engine: 'V-twin 1133',
        year: 2021,
        picture: placeholder,
        link: 'scout',
        index: 11
    },
    {
        brand: 'KTM',
        name: '1290 Super Duke R',
        price: 110,
        engine: 'V-twin 1301',
        year: 2023,
        picture: placeholder,
        link: 'super_duke_r',
        index: 12
    },
    {
        brand: 'Yamaha',
        name: 'MT-09',
        price: 85,
        engine: 'Inline-three 889',
        year: 2023,
        picture: placeholder,
        link: 'mt09',
        index: 13
    },
    {
        brand: 'Ducati',
        name: 'Diavel',
        price: 105,
        engine: 'V-twin 1260',
        year: 2021,
        picture: placeholder,
        link: 'diavel',
        index: 14
    },
    {
        brand: 'Triumph',
        name: 'Street Triple',
        price: 90,
        engine: 'Inline-triple 765',
        year: 2022,
        picture: placeholder,
        link: 'street_triple',
        index: 15
    },
    {
        brand: 'BMW',
        name: 'S 1000 R',
        price: 100,
        engine: 'Inline-four 999',
        year: 2022,
        picture: placeholder,
        link: 's1000r',
        index: 16
    },
    {
        brand: 'Triumph',
        name: 'Speed Twin',
        price: 95,
        engine: 'Parallel twin 1200',
        year: 2021,
        picture: placeholder,
        link: 'speed_twin',
        index: 17
    },
    {
        brand: 'Honda',
        name: 'CB650R',
        price: 85,
        engine: 'Inline-four 649',
        year: 2023,
        picture: placeholder,
        link: 'cb650r',
        index: 18
    },
    {
        brand: 'Aprilia',
        name: 'Tuono V4',
        price: 105,
        engine: 'V4 1077',
        year: 2022,
        picture: placeholder,
        link: 'tuono',
        index: 19
    },
    {
        brand: 'BMW',
        name: 'F 900 XR',
        price: 95,
        engine: 'Parallel twin 895',
        year: 2022,
        picture: placeholder,
        link: 'xr',
        index: 20
    },
    {
        brand: 'Suzuki',
        name: 'V-Strom 1050',
        price: 90,
        engine: 'V-twin 1037',
        year: 2023,
        picture: placeholder,
        link: 'vstrom',
        index: 21
    },
    {
        brand: 'Yamaha',
        name: 'MT-07',
        price: 80,
        engine: 'Parallel twin 689',
        year: 2022,
        picture: placeholder,
        link: 'mt07',
        index: 22
    },
];


export const brands = [...new Set(bikes.map(bike => bike.brand))].sort();
export const prices = [...new Set(bikes.map(bike => bike.price))].sort((a, b) => a - b);