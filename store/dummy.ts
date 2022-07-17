import {defineStore} from 'pinia'
import {useStorage} from '@vueuse/core'

const initialValue = {
    fundings: [
        {
            date: '2021-12-02',
            money: '53.310,39 €',
            name: 'City Development Plan Q1',
            fromm: 'City Mayor',
            from: 'January 2021',
            to: 'March 2022'
        },
        {
            date: '2022-06-15',
            money: '186.929,39 €',
            name: 'City Development Plan Q3 & Q4',
            fromm: 'City Mayor',
            from: 'July 2022',
            to: 'December 2022'
        },
        {date: '2022-07-17', money: '1.054,19 €', name: 'Donation', fromm: 'Big corporation Ltd.', from: '', to: ''},
    ],
    furniture: [
        {type: 'Chair', vendor: 'IKEA', name: 'STEFAN', price: '29,99 €', amount: '34', notes: ''},
        {type: 'Chair', vendor: 'IKEA', name: 'TEODORES', price: '39,99 €', amount: '75', notes: 'Stackable'},
        {type: 'Table', vendor: 'IKEA', name: 'LINNMON / ADILS', price: '39,99 €', amount: '12', notes: '100x60 cm'},
        {type: 'Chair', vendor: 'STIER', name: 'Buche', price: '112,17 €', amount: '12', notes: '4 pack'},
    ],
    contacts: [
        {
            name: 'Daniel Rothschild',
            address: 'Kurfürstendamm 60 18109 Rostock',
            tel: '+49 (0) 381 46 28 81',
            function: 'Hazardous materials removal worker',
            notes: 'was helpful last year'
        },
        {
            name: 'Sara Schulz',
            address: 'Kantstraße 89 98604 Meiningen',
            tel: '+49 (0) 3693 69 73 34',
            function: 'Geological engineer',
            notes: ''
        },
        {
            name: 'Uwe Wannemaker',
            address: 'Unter den Linden 27 39045 Magdeburg',
            tel: '+49 (0) 391 92 17 13',
            function: 'Programmer',
            notes: 'Son of the mayor'
        },
        {
            name: 'Stephanie Werner',
            address: 'Reeperbahn 81 08133 Wildenfels',
            tel: '+49 (0) 37603 86 99',
            function: 'Social work assistant',
            notes: ''
        }
    ],
    hardware: [
        {
            type: 'PC',
            vendor: 'Dell',
            name: 'XPS 17 9710',
            price: '2.499,00 €',
            amount: '23',
            notes: 'Intel Core i7-11800H, 16GB RAM, 1TB SSD, NVIDIA GeForce RTX 3050'
        },
        {type: '3D Printer', vendor: 'ANYCUBIC', name: 'Mega Pro', price: '249,99 €', amount: '8', notes: ''},
        {
            type: '3D Printer',
            vendor: 'ELEGOO',
            name: 'Mars 2 Mono MSLA',
            price: '149,99 €',
            amount: '3',
            notes: 'Resin printer'
        },
        {type: 'VR', vendor: 'Oculus', name: 'Quest 2', price: '421,95 €', amount: '17', notes: 'White'},
        {type: 'VR', vendor: 'Oculus', name: 'Quest 2', price: '421,95 €', amount: '3', notes: 'Black'},
    ],
    marketing: [
        {provider: 'Google', type: 'Online Ads', reach: 'Age 12-18, city Bassum', cost: '354,68 €', notes: 'per week'},
        {
            provider: 'Google',
            type: 'Online Ads',
            reach: 'Age 12-22, city Bassum + 10km',
            cost: '1.203,19 €',
            notes: 'for two weeks'
        },
        {
            provider: 'Meta',
            type: 'Online Ads',
            reach: 'Age 12-18, city Bassum, tech savy',
            cost: '419,19 €',
            notes: 'on all platforms'
        },
        {provider: 'Twitter', type: 'Online Ads', reach: 'Germany', cost: '191,19 €', notes: 'per day'},
        {
            provider: 'Weser-Kurier',
            type: 'Newspaper',
            reach: '118.837',
            cost: '10.438,80 €',
            notes: 'Griffecke Titelseite'
        }
    ],
    network: [
        {
            name: 'Sabrina Neudorf',
            area: 'CEO',
            address: 'Eschenweg 46 96504 Sonneberg',
            email: 'SabrinaNeudorf@teleworm.us',
            tel: '+49 (0) 3675 33 33 25',
            notes: 'Donated PCs'
        },
        {
            name: 'Florian Finkel',
            area: 'Web Developer',
            address: 'Friedrichstrasse 31 40213 Düsseldorf Altstadt',
            email: 'FlorianFinkel@jourrapide.com',
            tel: '+49 (0) 211 57 48 70',
            notes: ''
        },
        {
            name: 'Felix Schultheiss',
            area: 'Teacher',
            address: 'Joachimstaler Str. 92 55483 Unzenberg',
            email: 'FelixSchultheiss@dayrep.com\n',
            tel: '+49 (0) 6763 67 69 63',
            notes: ''
        },
        {
            name: 'Vanessa Zweig',
            area: 'Teacher',
            address: 'Ellmenreichstrasse 27 95309 Kulmbach',
            email: 'VanessaZweig@armyspy.com',
            tel: '+49 (0) 9221 99 39 28',
            notes: '3D-Printing Expert'
        },
    ],
    place: [
        {
            address: 'Rudower Strasse 99 54655 Kyllburgweiler',
            total: '120',
            usable: '81',
            rooms: '5',
            price: '1.139,99 €',
            notes: 'Nice big windows'
        },
        {
            address: 'Paderborner Strasse 31 86459 Gessertshausen',
            total: '80',
            usable: '53',
            rooms: '2',
            price: '928 €',
            notes: 'Large rooms'
        },
    ],
    staff: [
        {
            name: 'Thorsten Gärtner',
            address: 'Billwerder Neuer Deich 51 95114 Naila',
            email: 'ThorstenGartner@dayrep.com',
            tel: '+49 (0) 9282 15 04 28',
            salary: 'E11 6',
            position: 'Teacher'
        },
        {
            name: 'Stefan Zweig',
            address: 'Mellingburgredder 14 91054 Buckenhof',
            email: 'StefanZweig@dayrep.com',
            tel: '+49 (0) 9131 68 02 03',
            salary: 'E11 3 50%',
            position: 'Accounting'
        },
        {
            name: 'Katharina Nacht',
            address: 'Mohrenstrasse 89 78592 Egesheim',
            email: 'KatharinaNacht@jourrapide.com',
            tel: '+49 (0) 7429 19 14 56',
            salary: 'E11 3 50%',
            position: 'Accounting'
        },
        {
            name: 'Frank Krüger',
            address: 'Heinrich Heine Platz 64 99439 Ballstedt',
            email: 'FrankKruger@teleworm.us',
            tel: '+49 (0) 3634 10 03 34',
            salary: 'E12 5 50%',
            position: 'IT'
        },
    ],
    workshops: []

}

export const useDummyStore = defineStore({
    id: 'dummy',
    state: () => ({
        fundings: useStorage('dummy.fundings', initialValue.fundings),
        furniture: useStorage('dummy.furniture', initialValue.furniture),
        contacts: useStorage('dummy.contacts', initialValue.contacts),
        hardware: useStorage('dummy.hardware', initialValue.hardware),
        marketing: useStorage('dummy.marketing', initialValue.marketing),
        network: useStorage('dummy.network', initialValue.network),
        place: useStorage('dummy.place', initialValue.place),
        staff: useStorage('dummy.staff:', initialValue.staff),
        workshops: useStorage('dummy.workshops', initialValue.workshops)
    }),
    actions: {
        reset() {
            this.fundings = [...initialValue.fundings]
            this.furniture = [...initialValue.furniture]
            this.contacts = [...initialValue.contacts]
            this.hardware = [...initialValue.hardware]
            this.marketing = [...initialValue.marketing]
            this.network = [...initialValue.network]
            this.place = [...initialValue.place]
            this.staff = [...initialValue.staff]
            this.workshops = [...initialValue.workshops]
        },
        clear() {
            this.fundings = []
            this.furniture = []
            this.contacts = []
            this.hardware = []
            this.marketing = []
            this.network = []
            this.place = []
            this.staff = []
            this.workshops = []
        }
    },
})
