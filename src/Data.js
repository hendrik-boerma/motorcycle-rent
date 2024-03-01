import sport from './Images/sport.jpg'
import adventure from './Images/adventure.jpg'
import naked from './Images/114.jpg'
import livewire from './Images/livewire.jpg'

export const bikes = [
    {
        name: 'LiveWire',
        price: '95,-',
        description: 'Electric - 2020',
        picture: livewire,
        link: 'livewire'
    },
    {
        name: 'Pan America',
        price: '100,-',
        description: 'V-twin 1250 - 2022',
        picture: adventure,
        link: 'pan_america'
    },
    {
        name: 'Fat Bob',
        price: '95,-',
        description: 'V-twin 1868 - 2022',
        picture: naked,
        link: 'fat_bob'
    },
    {
        name: 'Streetfighter',
        price: '95,-',
        description: 'V-twin 975 - 2024',
        picture: sport,
        link: 'streetfighter'
    }
];