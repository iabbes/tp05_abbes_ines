import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AjouterAvion, SupprimerAvion } from "./action-shopping";
import { EtatShoppingModel } from "./etat-shopping-model";


@State<EtatShoppingModel>({
    name: 'avions',
    defaults: {
        avions: [],
    },
})

@Injectable()
export class EtatShopping {
    @Selector()
    static getNbProducts(state: EtatShoppingModel) {
        return state.avions.length
    }

    @Selector()
    static getListProducts(state: EtatShoppingModel) {
        return state.avions;
    }


    
    @Action(AjouterAvion)
    add(
        { getState, patchState }: StateContext<EtatShoppingModel>,
        { payload }: AjouterAvion
    ) {
        const state = getState();
        patchState({
                avions: [...state.avions, payload]
        });
    }



    @Action(SupprimerAvion)
    delete(
        { getState, patchState }: StateContext<EtatShoppingModel>,
        { payload }: SupprimerAvion
    ) {
        const state = getState();
        patchState({
            avions: state.avions.filter(a => a.id !== payload.id)
        });
    }
}