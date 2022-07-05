import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

const initialValue = {
    people: 20,
    price_student_pc: 500,
    aux_quality: 1,
    tech: false,
    salary: 3,
    trainer: 2,
    admin: 1,
    sq: 100,
    sq_price: 10
}
const salary = [
    59386.72,
    65282.72,
    70822.80,
    76658.16,
    84670.78,
    89178.81
]
export const useCalcStore = defineStore({
    id: 'calc',
    state: () => ({
        form: useStorage('calc', initialValue)
    }),
    getters: {
        cost() {
            let positions_once: {amount: number, name: string, tooltip: string}[] = [
                {amount: this.form.people * this.form.price_student_pc, name: 'Computer', tooltip: 'People * price per pc'}
        ]
            if (this.form.aux_quality)
                positions_once.push({amount: this.form.aux_quality * 3000 , name: 'Auxiliary', tooltip: 'Quality * 3.000,00 €'})
            if (!this.form.tech)
                positions_once.push({amount: 3000 , name: 'Tech infrastructure', tooltip: 'About 3.000,00 €'})

            let positions_yearly: {amount: number, name: string, tooltip: string}[] = [
                {amount: 1200, name: 'Internet', tooltip:'100,00 € per month'},
                {amount: this.form.sq * this.form.sq_price * 12, name: 'Rent', tooltip: 'Square meter * price per m² * 12 months'},
                {amount: this.form.sq * this.form.sq_price, name: 'Cleaning', tooltip: 'Rent / 12'},
                {amount: this.form.sq * this.form.sq_price * 12 / 10, name: 'Insurance', tooltip: 'Rent / 10'}
            ]

            if (this.form.trainer > 0)
                positions_yearly.push({amount: this.form.trainer * salary[this.form.salary - 1] * 0.5, name: 'Salary Trainer', tooltip: 'Trainer amount * Arbeitgeberbrutto TVÖD E11 * 50 %'})

            if (this.form.admin > 0)
                positions_yearly.push({amount: this.form.admin * salary[this.form.salary - 1] * 0.25, name: 'Salary Admin', tooltip: 'Admin amount * Arbeitgeberbrutto TVÖD E11 * 25 %'})


            const total_once = positions_once.reduce<number>((p, c) => p + c.amount, 0);
            const total_yearly = positions_yearly.reduce<number>((p, c) => p + c.amount, 0);
            return {
                once: {
                    positions: positions_once,
                    total: total_once
                },
                yearly: {
                    positions: positions_yearly,
                    total: total_yearly
                },
                year: Array(5).fill(0).map((_,i) => (i+1) * total_yearly + total_once)
            }
        }
    },
    actions: {
        reset() {
            this.form = {...initialValue}
        }
    },
})
