import { toRem } from '.'

describe(toRem, () => {
   it('should be a function', () => {
      expect(toRem).toBeInstanceOf(Function)
   })

   it.each([
      ['0.25rem', 4],
      ['0.50rem', 8],
      ['0.75rem', 12],
      ['1.00rem', 16],
      ['1.50rem', 24],
      ['2.00rem', 32]
   ])('should return %s when passed %ipx', (expected, pixel) => {
      expect(toRem(pixel)).toBe(expected)
   })
})
