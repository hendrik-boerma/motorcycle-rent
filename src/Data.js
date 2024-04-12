import sport from './Images/sport.jpg'
import adventure from './Images/adventure.jpg'
import naked from './Images/114.jpg'
import livewire from './Images/livewire.jpg'
import panigale from './Images/livewire.jpg';
import bonneville from './Images/livewire.jpg';
import gs_adventure from './Images/livewire.jpg';
import r6 from './Images/livewire.jpg';
import fireblade from './Images/livewire.jpg';
import zx10r from './Images/livewire.jpg';
import gsxr1000 from './Images/livewire.jpg';
import scout from './Images/livewire.jpg';
import super_duke_r from './Images/livewire.jpg';
import fz07 from './Images/livewire.jpg';
import diavel from './Images/livewire.jpg';
import street_triple from './Images/livewire.jpg';
import xr from './Images/livewire.jpg';
import mt09 from './Images/livewire.jpg';
import vstrom from './Images/livewire.jpg';
import cb650r from './Images/livewire.jpg';
import tuono from './Images/livewire.jpg';
import speed_twin from './Images/livewire.jpg';
import s1000r from './Images/livewire.jpg';

export const bikes = [
    {
        brand: 'Harley',
        name: 'LiveWire',
        price: 95,
        description: 'Electric - 2020',
        picture: livewire,
        link: 'livewire'
    },
    {
        brand: 'Harley',
        name: 'Pan America',
        price: 100,
        description: 'V-twin 1250 - 2022',
        picture: adventure,
        link: 'pan_america'
    },
    {
        brand: 'Harley',
        name: 'Fat Bob',
        price: 95,
        description: 'V-twin 1868 - 2022',
        picture: naked,
        link: 'fat_bob'
    },
    {
        brand: 'Harley',
        name: 'Streetfighter',
        price: 95,
        description: 'V-twin 975 - 2024',
        picture: sport,
        link: 'streetfighter'
    },
    {
        brand: 'Ducati',
        name: 'Panigale V4',
        price: 100,
        description: 'V4 1103cc - 2022',
        picture: panigale,
        link: 'panigale'
    },
    {
        brand: 'Triumph',
        name: 'Bonneville T120',
        price: 90,
        description: 'Parallel twin 1200 - 2023',
        picture: bonneville,
        link: 'bonneville'
    },
    {
        brand: 'BMW',
        name: 'R 1250 GS Adventure',
        price: 110,
        description: 'Boxer twin 1254 - 2021',
        picture: gs_adventure,
        link: 'gs_adventure'
    },
    {
        brand: 'Yamaha',
        name: 'YZF-R6',
        price: 95,
        description: 'Inline-four 599 - 2022',
        picture: r6,
        link: 'r6'
    },
    {
        brand: 'Honda',
        name: 'CBR1000RR Fireblade',
        price: 100,
        description: 'Inline-four 999 - 2021',
        picture: fireblade,
        link: 'fireblade'
    },
    {
        brand: 'Kawasaki',
        name: 'Ninja ZX-10R',
        price: 105,
        description: 'Inline-four 998 - 2023',
        picture: zx10r,
        link: 'zx10r'
    },
    {
        brand: 'Suzuki',
        name: 'GSX-R1000',
        price: 95,
        description: 'Inline-four 999 - 2022',
        picture: gsxr1000,
        link: 'gsxr1000'
    },
    {
        brand: 'Indian',
        name: 'Scout',
        price: 90,
        description: 'V-twin 1133 - 2021',
        picture: scout,
        link: 'scout'
    },
    {
        brand: 'KTM',
        name: '1290 Super Duke R',
        price: 110,
        description: 'V-twin 1301 - 2023',
        picture: super_duke_r,
        link: 'super_duke_r'
    },
    {
        brand: 'Yamaha',
        name: 'MT-09',
        price: 85,
        description: 'Inline-three 889 - 2023',
        picture: mt09,
        link: 'mt09'
    },
    {
        brand: 'Ducati',
        name: 'Diavel',
        price: 105,
        description: 'V-twin 1260 - 2021',
        picture: diavel,
        link: 'diavel'
    },
    {
        brand: 'Triumph',
        name: 'Street Triple',
        price: 90,
        description: 'Inline-triple 765 - 2022',
        picture: street_triple,
        link: 'street_triple'
    },
    {
        brand: 'BMW',
        name: 'S 1000 R',
        price: 100,
        description: 'Inline-four 999 - 2022',
        picture: s1000r,
        link: 's1000r'
    },
    {
        brand: 'Triumph',
        name: 'Speed Twin',
        price: 95,
        description: 'Parallel twin 1200 - 2021',
        picture: speed_twin,
        link: 'speed_twin'
    },
    {
        brand: 'Honda',
        name: 'CB650R',
        price: 85,
        description: 'Inline-four 649 - 2023',
        picture: cb650r,
        link: 'cb650r'
    },
    {
        brand: 'Aprilia',
        name: 'Tuono V4',
        price: 105,
        description: 'V4 1077 - 2022',
        picture: tuono,
        link: 'tuono'
    },
    {
        brand: 'BMW',
        name: 'F 900 XR',
        price: 95,
        description: 'Parallel twin 895 - 2022',
        picture: xr,
        link: 'xr'
    },
    {
        brand: 'Suzuki',
        name: 'V-Strom 1050',
        price: 90,
        description: 'V-twin 1037 - 2023',
        picture: vstrom,
        link: 'vstrom'
    },
    {
        brand: 'Yamaha',
        name: 'MT-07',
        price: 80,
        description: 'Parallel twin 689 - 2022',
        picture: fz07,
        link: 'mt07'
    },
];

export const brands = [...new Set(bikes.map(bike => bike.brand))].sort();
export const prices = [...new Set(bikes.map(bike => bike.price))].sort((a, b) => a - b);