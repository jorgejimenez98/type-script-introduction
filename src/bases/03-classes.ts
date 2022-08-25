export class Pokemon {
  /* public id: number = 1 // Init Value
  public name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
    console.log("Constructor Called")
  } */

  constructor(
    // Forma Sencilla
    public readonly id: number, // ReadOnly no se puede settear
    public name: string
  ) {}

  get imageUrl(): string {
    // Getter Example
    return `https://pokemon.com/${this.id}.jpg`
  }

  public scream() {
    // Methods Example
    console.log(`${this.name.toUpperCase()}`)
  }
  
  private speak() {
    // Solo se puede llamar dentro de la clase
    console.log(`${this.name} ${this.name}`)
  }
}

export const p1 = new Pokemon(12, "New Name")

console.log(p1.imageUrl)
p1.scream()
p1.speak()