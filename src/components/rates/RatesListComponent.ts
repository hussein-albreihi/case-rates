import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Rates } from "../../models/rates.model";
import { RatesStore } from "../../stores/rates.store";

@Component({
    selector: 'app-rates-list',
    templateUrl: './RatesListComponent.html',
})
export class RatesListComponent {
    rates$: Observable<Rates>;

    constructor(private ratesStore: RatesStore) {
        this.rates$ = this.ratesStore.selectAll();
    }
}