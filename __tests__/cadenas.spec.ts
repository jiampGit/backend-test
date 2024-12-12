import { describe, test, expect } from "@jest/globals"
import {contarCoincidenciasEnCadena} from "../src/app/cadenas"

describe('contarCoincidenciasEnCadena', () => {
    it('debería contar correctamente las coincidencias de una subcadena en una cadena', () => {
        expect(contarCoincidenciasEnCadena('abcabcabc', 'abc')).toBe(3);
    });

    it('debería devolver 0 si la subcadena no está presente en la cadena', () => {
        expect(contarCoincidenciasEnCadena('abcdef', 'xyz')).toBe(0);
    });

    it('debería manejar cadenas vacías correctamente', () => {
        expect(contarCoincidenciasEnCadena('', 'abc')).toBe(0);
        expect(contarCoincidenciasEnCadena('abc', '')).toBe(0);
    });

    it('debería manejar subcadenas más largas que la cadena principal', () => {
        expect(contarCoincidenciasEnCadena('abc', 'abcdef')).toBe(0);
    });

    it('debería contar coincidencias solapadas', () => {
        expect(contarCoincidenciasEnCadena('aaa', 'aa')).toBe(2);
    });
});