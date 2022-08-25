export const pokemonsId = [1, 34, 56, 7, 98]

pokemonsId.push(+'1') // Convertir string a number 

/* export const pokemon = {
    id: 1,
    name: 'Name example'
}
 */

interface Pokemon {
    id: number,
    name: string,
    age?: number // Optional
}

export const pokemon: Pokemon = {
    id: 19,
    name: "Example Name",
}
