import './App.css';

import Dropdown from './Dropdown';
import Washer from './Washer';

const dropdowns = [
    {
        label: "Sortuj po",
        options: [
            'Popularność',
            'Wszystkie',
            'Cena',
            'Pojemność'
        ]
    },
    {
        label: "Funkcje",
        options: [
            'Wszystkie',
            'Drzwi AddWash',
            'Panel AI Control',
            'Silnik inwerterowy',
            'Wyświetlacz elektroniczny'
        ]
    },
    {
        label: "Klasa energetyczna",
        options: [
            'Wszystkie',
            'A',
            'B',
            'D'
        ]
    },
    {
        label: "Pojemność",
        options: [
            'Wszystkie',
            '9kg',
            '8kg',
            '10.5kg'
        ]
    },
];

const washers = [
    {
        imagePath: '/pralka1.png',
        number: 'WW90T754ABT',
        name: 'Pralka QuickDrive™',
        capacity: 9,
        color: 'biała',
        dimensions: {
            depth: '55',
            width: '60',
            height: '85'
        },
        options: [
            'Drzwi AddWash™',
            'Panel AI Control',
            'Silnik inwerterowy',
            'Wyświetlacz elektroniczny'
        ],
        energyClass: 'A',
        price: 3199.00,
        loanPeriods: 60,
        loanPrice: 53.31
    },
    {
        imagePath: '/pralka2.png',
        number: 'WW10T654DLH',
        name: 'Pralka EcoBubble™',
        capacity: 10.5,
        color: 'biała',
        dimensions: {
            depth: '55',
            width: '60',
            height: '85'
        },
        options: [
            'Drzwi AddWash™',
            'Panel AI Control',
            'Silnik inwerterowy',
            'Wyświetlacz elektroniczny'
        ],
        energyClass: 'B',
        price: 3199.00,
        loanPeriods: 60,
        loanPrice: 53.31
    },
    {
        imagePath: '/pralka3.png',
        number: 'WW90T654DLH',
        name: 'Pralka EcoBubble™',
        capacity: 9,
        color: 'biała',
        dimensions: {
            depth: '55',
            width: '60',
            height: '85'
        },
        options: [
            'Drzwi AddWash™',
            'Panel AI Control',
            'Silnik inwerterowy',
            'Wyświetlacz elektroniczny'
        ],
        energyClass: 'C',
        price: 3199.00,
        loanPeriods: 60,
        loanPrice: 53.31   
    },
    {
        imagePath: '/pralka1.png',
        number: 'WW90T754ABT',
        name: 'Pralka QuickDrive™',
        capacity: 9,
        color: 'biała',
        dimensions: {
            depth: '55',
            width: '60',
            height: '85'
        },
        options: [
            'Drzwi AddWash™',
            'Panel AI Control',
            'Silnik inwerterowy',
            'Wyświetlacz elektroniczny'
        ],
        energyClass: 'D',
        price: 3199.00,
        loanPeriods: 60,
        loanPrice: 53.31
    },
    {
        imagePath: '/pralka2.png',
        number: 'WW10T654DLH',
        name: 'Pralka EcoBubble™',
        capacity: 10.5, 
        color: 'biała',
        dimensions: {
            depth: '55',
            width: '60',
            height: '85'
        },
        options: [
            'Drzwi AddWash™',
            'Panel AI Control',
            'Silnik inwerterowy',
            'Wyświetlacz elektroniczny'
        ],
        energyClass: 'E',
        price: 3199.00,
        loanPeriods: 60,
        loanPrice: 53.31
    },
    {
        imagePath: '/pralka3.png',
        number: 'WW90T654DLH',
        name: 'Pralka EcoBubble™',
        capacity: 8,
        color: 'biała',
        dimensions: {
            depth: '55',
            width: '60',
            height: '85'
        },
        options: [
            'Drzwi AddWash™',
            'Panel AI Control',
            'Silnik inwerterowy',
            'Wyświetlacz elektroniczny'
        ],
        energyClass: 'F',
        price: 3199.00,
        loanPeriods: 60,
        loanPrice: 53.31
    },
]

function App() {
    return (
        <div className="App">
            <div className="navbar bg-white justify-content-center">
                <h1>Wybierz urządzenie</h1>
            </div>

            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="search mt-4 mb-5">
                        <input className="form-control" placeholder="Search..." />
                    </div>
                </div>
                
                <div className="dropdowns row">
                    {dropdowns.map((dropdown) => (
                    <Dropdown dropdown={dropdown} />
                    ))}
                </div>
                
                <p className="my-2">Liczba wyników: {washers.length}</p>
                
                <div className="washers">
                    <div className="row">
                        {washers.map((washer) => (
                        <Washer washer={washer} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
