import { createZoo } from "./zoo";
import { v4 } from "uuid"

const zoo = createZoo()

zoo.forEach(d => d.woof())
console.log("ZOO 2 " + v4())