import {Request,Response} from 'express';

                                            import { pet } from '../models/pet';

import {createMenuObject} from '../helpers/createMenuObject';

export const home = (req:Request,res:Response) => {
let list = pet.getAll();

res.render('pages/page',{
                                                menu:createMenuObject('all'),
    banner:{
        
        title:'Todos os animais',
        background:'allanimals.jpg'
    },
    list
});
}

export const dogs = (req:Request,res:Response) => {
                                                let list = pet.getFromType('dog');

    res.render('pages/page',{
                                                menu:createMenuObject('dog'),
        banner:{
            
            title:'Cachorro',
            background:'banner_dog.jpg'
        },
        list
    });
}

export const cats = (req:Request,res:Response) => {
                                                let list = pet.getFromType('cat');

    res.render('pages/page',{
                                                menu:createMenuObject('cat'),
        banner:{
            
            title:'Cats',
            background:'banner_cat.jpg'
        },
        list
    });
}

export const fishes = (req:Request,res:Response) => {
                                                let list = pet.getFromType('fish');

    res.render('pages/page',{
        

                                                menu:createMenuObject('fish'),
        banner:{
            
            title:'Fishes',
            background:'banner_fish.jpg'
        },
        list
    });
}