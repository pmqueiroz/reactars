import { generateKeyFromName } from '.'

describe(generateKeyFromName, () => {
   it('should be a function', () => {
      expect(generateKeyFromName).toBeInstanceOf(Function)
   })

   it('should return the correct key', () => {
      expect(generateKeyFromName('test')).toBe('test')
   })
})
