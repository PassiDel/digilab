import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

const initialValue = [
    {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
        editing: false
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
        editing: false
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
        editing: false
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
        editing: false
    },
]

export const useDummyStore = defineStore({
    id: 'dummy',
    state: () => ({
        fundings: useStorage('dummy.fundings', initialValue),
        furniture: useStorage('dummy.furniture', []),
        contacts: useStorage('dummy.contacts', []),
        hardware: useStorage('dummy.hardware', []),
        marketing: useStorage('dummy.marketing', []),
        network: useStorage('dummy.network', []),
        place: useStorage('dummy.place', []),
        staff: useStorage('dummy.staff:', []),
        workshops: useStorage('dummy.workshops', [])
    }),
    actions: {
        reset() {
            this.fundings = {...initialValue}
        }
    },
})
