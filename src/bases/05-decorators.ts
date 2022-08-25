class NewPokemon {
  constructor(
    // Forma Sencilla
    public readonly id: number, // ReadOnly no se puede settear
    public name: string
  ) {}

  public scream() {
    // Methods Example
    console.log(`No quiero`)
  }

  public speak() {
    // Solo se puede llamar dentro de la clase
    console.log(`No quiero Hablar`)
  }
}

const MyDecorator = () => {
  return (target: Function) => {
    console.log(target)
    return NewPokemon
  }
}

@MyDecorator()
export class Pokemon {
  constructor(
    // Forma Sencilla
    public readonly id: number, // ReadOnly no se puede settear
    public name: string
  ) {}

  public scream() {
    // Methods Example
    console.log(`${this.name.toUpperCase()}`)
  }

  public speak() {
    // Solo se puede llamar dentro de la clase
    console.log(`${this.name} ${this.name}`)
  }
}

export const p1 = new Pokemon(12, "New Name")

p1.scream()
p1.speak()
