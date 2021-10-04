import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharachtersCollection";

const numbersCollection = new NumbersCollection([-1, 20, 12, 4, 10]);

numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollections = new CharactersCollection("XabyW");
charactersCollections.sort();
console.log(charactersCollections.data);
