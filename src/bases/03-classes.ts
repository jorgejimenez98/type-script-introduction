export class Pokemon {
  /* public id: number = 1 // Init Value
  public name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
    console.log("Constructor Called")
  } */
  constructor(public readonly id: number, public name: string) {} // Forma Sencilla
}

export const p1 = new Pokemon(12, "New Name")
