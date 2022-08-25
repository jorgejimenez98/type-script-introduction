const Deprecated = (deprecationReason: string) => {
  return (
    target: any,
    memberName: string,
    propertyDescriptor: PropertyDescriptor
  ) => {
    // console.log({target})
    return {
      get() {
        const wrapperFn = (...args: any[]) => {
          console.warn(
            `Method ${memberName} is deprecated with reason: ${deprecationReason}`
          )
          //! Llamar la función propiamente con sus argumentos
          propertyDescriptor.value.apply(this, args)
        }
        return wrapperFn
      },
    }
  }
}

export class Pokemon {
  constructor(
    // Forma Sencilla
    public readonly id: number, // ReadOnly no se puede settear
    public name: string
  ) {}

  @Deprecated('Most use speak method instead')
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
