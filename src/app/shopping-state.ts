import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AddPlane, DeletePlane } from "./shopping-action";
import { ShoppingStateModel } from "./shopping-state-model";

//ici tu remplace products par catalog
@State<ShoppingStateModel>({
    name: 'products',
    defaults: {
        products: [],
    },
})

@Injectable()
export class ShoppingState {
    @Selector()
    static getNbProducts(state: ShoppingStateModel) {
        return state.products.length
    }

    @Selector()
    static getListProducts(state: ShoppingStateModel) {
        return state.products;
    }


    //Ensuite les action donc globalement ce qu'il se passe quand on ajoute un produit
    @Action(AddPlane)
    add(
        { getState, patchState }: StateContext<ShoppingStateModel>,
        { payload }: AddPlane
    ) {
        const state = getState();
        patchState({
            //ici mon code est compliqué mais celui du cours marchera très bien dans ton projet
            products: state.products.find((t) => t.id === payload.id)
                ? state.products.map((t) =>
                    t.id === payload.id ? { ...t, quantity: t.quantity + 1 } : t
                )
                : [...state.products, { ...payload, quantity: 1 }],
        });
    }



    @Action(DeletePlane)
    delete(
        { getState, patchState }: StateContext<ShoppingStateModel>,
        { payload }: DeletePlane
    ) {
        const state = getState();
        patchState({
            //ici mon code est compliqué mais celui du cours marchera très bien dans ton projet
            products: state.products.find((t) => t.id === payload.id)?.quantity === 1
                ? state.products.filter((t) => t.id !== payload.id)
                : state.products.map((t) =>
                    t.id === payload.id ? { ...t, quantity: t.quantity - 1 } : t
                ),
        });
    }
}