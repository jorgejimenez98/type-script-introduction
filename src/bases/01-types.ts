export let name: string = 'Jorge'
export const age: number = 24
export const isValid: boolean = true

name = 'New NANE'

export const templateString = `
    Esto es un string multilinea 
    que puede tener " dobles 
    ' Simples
    inyectar valores \$ ${name}
    expresiones ${1 + 1}
    numeros ${age}
    booleanos ${isValid}
`