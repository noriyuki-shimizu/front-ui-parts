import { describe, expect, it } from 'vitest'
import { LangUtil } from './'

describe('Lang utility functions', () => {
  describe('LangUtil.isNull', () => {
    const testData = [
      { expected: null, actual: true },
      { expected: undefined, actual: false },
      { expected: 0, actual: false },
      { expected: '', actual: false },
      { expected: [], actual: false },
      { expected: {}, actual: false },
      { expected: false, actual: false }
    ]

    it.each(testData)('"$expected" の場合、"$actual"', ({ expected, actual }) => {
      expect(LangUtil.isNull(expected)).toBe(actual)
    })
  })

  describe('isUndefined', () => {
    const testData = [
      { expected: undefined, actual: true },
      { expected: null, actual: false },
      { expected: 0, actual: false },
      { expected: '', actual: false },
      { expected: [], actual: false },
      { expected: {}, actual: false },
      { expected: false, actual: false }
    ]

    it.each(testData)('"$expected" の場合、"$actual"', ({ expected, actual }) => {
      expect(LangUtil.isUndefined(expected)).toBe(actual)
    })
  })

  describe('isNil', () => {
    const testData = [
      { expected: null, actual: true },
      { expected: undefined, actual: true },
      { expected: 0, actual: false },
      { expected: '', actual: false },
      { expected: [], actual: false },
      { expected: {}, actual: false },
      { expected: false, actual: false }
    ]

    it.each(testData)('"$expected" の場合、"$actual"', ({ expected, actual }) => {
      expect(LangUtil.isNil(expected)).toBe(actual)
    })
  })

  describe('isObject', () => {
    const testData = [
      { expected: {}, actual: true },
      { expected: () => {}, actual: true },
      { expected: null, actual: false },
      { expected: undefined, actual: false }
    ]

    it.each(testData)('"$expected" の場合、"$actual"', ({ expected, actual }) => {
      expect(LangUtil.isObject(expected)).toBe(actual)
    })
  })

  describe('isNumber', () => {
    const testData = [
      { expected: 123, actual: true },
      { expected: '123', actual: false },
      { expected: null, actual: false }
    ]

    it.each(testData)('"$expected" の場合、"$actual"', ({ expected, actual }) => {
      expect(LangUtil.isNumber(expected)).toBe(actual)
    })
  })

  describe('isString', () => {
    const testData = [
      { expected: '123', actual: true },
      { expected: 123, actual: false },
      { expected: null, actual: false }
    ]

    it.each(testData)('"$expected" の場合、"$actual"', ({ expected, actual }) => {
      expect(LangUtil.isString(expected)).toBe(actual)
    })
  })

  describe('isBoolean', () => {
    const testData = [
      { expected: true, actual: true },
      { expected: false, actual: true },
      { expected: 'true', actual: false }
    ]

    it.each(testData)('"$expected" の場合、"$actual"', ({ expected, actual }) => {
      expect(LangUtil.isBoolean(expected)).toBe(actual)
    })
  })

  describe('isArray', () => {
    const testData = [
      { expected: [1, 2, 3], actual: true },
      { expected: '123', actual: false },
      { expected: null, actual: false }
    ]

    it.each(testData)('"$expected" の場合、"$actual"', ({ expected, actual }) => {
      expect(LangUtil.isArray(expected)).toBe(actual)
    })
  })

  describe('isMap', () => {
    const testData = [
      { expected: new Map(), actual: true },
      { expected: {}, actual: false },
      { expected: null, actual: false }
    ]

    it.each(testData)('"$expected" の場合、"$actual"', ({ expected, actual }) => {
      expect(LangUtil.isMap(expected)).toBe(actual)
    })
  })

  describe('isSet', () => {
    const testData = [
      { expected: new Set(), actual: true },
      { expected: {}, actual: false },
      { expected: null, actual: false }
    ]

    it.each(testData)('"$expected" の場合、"$actual"', ({ expected, actual }) => {
      expect(LangUtil.isSet(expected)).toBe(actual)
    })
  })

  describe('isEmpty', () => {
    const testData = [
      { expected: null, actual: true },
      { expected: undefined, actual: true },
      { expected: '', actual: true },
      { expected: [], actual: true },
      { expected: {}, actual: true },
      { expected: new Map(), actual: true },
      { expected: new Set(), actual: true },
      { expected: 0, actual: true },
      { expected: 'not empty', actual: false },
      { expected: [1, 2, 3], actual: false },
      { expected: new Map([['key', 'value']]), actual: false },
      { expected: new Set(['value']), actual: false },
      { expected: { key: 'value' }, actual: false },
      { expected: 1, actual: false }
    ]

    it.each(testData)('"$expected" の場合、"$actual"', ({ expected, actual }) => {
      expect(LangUtil.isEmpty(expected)).toBe(actual)
    })
  })
})
