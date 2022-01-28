// import Animal from '../animals/index';
import { Dog, createDog } from '../animals/index';
import * as _ from "lodash"

export function createZoo(): Array<Dog> {
    return _.concat([
        createDog()
    ], [
        createDog()
    ]);
}

