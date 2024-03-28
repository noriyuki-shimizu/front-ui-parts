import { describe, expect, it } from 'vitest'
import {
  isArray,
  isBoolean,
  isEmpty,
  isMap,
  isNil,
  isNull,
  isNumber,
  isObject,
  isSet,
  isString,
  isUndefined
} from './lang'

describe('Lang utility functions', () => {
  describe('isNull', () => {
    it('value is null', () => {
      expect(isNull(null)).toBe(true)
    })

    it('value is undefined', () => {
      expect(isNull(undefined)).toBe(false)
    })

    it('value is 0', () => {
      expect(isNull(0)).toBe(false)
    })

    it('value is ""', () => {
      expect(isNull('')).toBe(false)
    })

    it('value is []', () => {
      expect(isNull([])).toBe(false)
    })

    it('value is {}', () => {
      expect(isNull({})).toBe(false)
    })

    it('value is false', () => {
      expect(isNull(false)).toBe(false)
    })
  })

  describe('isUndefined', () => {
    it('value is null', () => {
      expect(isUndefined(null)).toBe(false)
    })

    it('value is undefined', () => {
      expect(isUndefined(undefined)).toBe(true)
    })

    it('value is 0', () => {
      expect(isUndefined(0)).toBe(false)
    })

    it('value is ""', () => {
      expect(isUndefined('')).toBe(false)
    })

    it('value is []', () => {
      expect(isUndefined([])).toBe(false)
    })

    it('value is {}', () => {
      expect(isUndefined({})).toBe(false)
    })

    it('value is false', () => {
      expect(isUndefined(false)).toBe(false)
    })
  })

  describe('isNil', () => {
    it('value is null', () => {
      expect(isNil(null)).toBe(true)
    })

    it('value is undefined', () => {
      expect(isNil(undefined)).toBe(true)
    })

    it('value is 0', () => {
      expect(isNil(0)).toBe(false)
    })

    it('value is ""', () => {
      expect(isNil('')).toBe(false)
    })

    it('value is []', () => {
      expect(isNil([])).toBe(false)
    })

    it('value is {}', () => {
      expect(isNil({})).toBe(false)
    })

    it('value is false', () => {
      expect(isNil(false)).toBe(false)
    })
  })

  describe('isObject', () => {
    it('value is {}', () => {
      expect(isObject({})).toBe(true)
    })

    it('value is function', () => {
      expect(isObject(() => {})).toBe(true)
    })

    it('value is null', () => {
      expect(isObject(null)).toBe(false)
    })

    it('value is undefined', () => {
      expect(isObject(undefined)).toBe(false)
    })
  })

  describe('isNumber', () => {
    it('value is string', () => {
      expect(isNumber(123)).toBe(true)
    })

    it('value is number', () => {
      expect(isNumber('123')).toBe(false)
    })

    it('value is null', () => {
      expect(isNumber(null)).toBe(false)
    })
  })

  describe('isString', () => {
    it('value is string', () => {
      expect(isString('123')).toBe(true)
    })

    it('value is number', () => {
      expect(isString(123)).toBe(false)
    })

    it('value is null', () => {
      expect(isNumber(null)).toBe(false)
    })
  })

  describe('isBoolean', () => {
    it('value is true', () => {
      expect(isBoolean(true)).toBe(true)
    })

    it('value is false', () => {
      expect(isBoolean(false)).toBe(true)
    })

    it('value is string', () => {
      expect(isBoolean('true')).toBe(false)
    })
  })

  describe('isArray', () => {
    it('value is number[]', () => {
      expect(isArray([1, 2, 3])).toBe(true)
    })

    it('value is string', () => {
      expect(isArray('123')).toBe(false)
    })

    it('value is null', () => {
      expect(isArray(null)).toBe(false)
    })
  })

  describe('isMap', () => {
    it('value is Map', () => {
      expect(isMap(new Map())).toBe(true)
    })

    it('value is {}', () => {
      expect(isMap({})).toBe(false)
    })

    it('value is null', () => {
      expect(isMap(null)).toBe(false)
    })
  })

  describe('isSet', () => {
    it('value is Set', () => {
      expect(isSet(new Set())).toBe(true)
    })

    it('value is {}', () => {
      expect(isSet({})).toBe(false)
    })

    it('value is null', () => {
      expect(isSet(null)).toBe(false)
    })
  })

  describe('isEmpty', () => {
    it('should return true for null or undefined', () => {
      expect(isEmpty(null)).toBe(true)
      expect(isEmpty(undefined)).toBe(true)
    })

    it('should return true for empty string', () => {
      expect(isEmpty('')).toBe(true)
    })

    it('should return false for non-empty string', () => {
      expect(isEmpty('not empty')).toBe(false)
    })

    it('should return true for empty array', () => {
      expect(isEmpty([])).toBe(true)
    })

    it('should return false for non-empty array', () => {
      expect(isEmpty([1, 2, 3])).toBe(false)
    })

    it('should return true for empty Map', () => {
      expect(isEmpty(new Map())).toBe(true)
    })

    it('should return false for non-empty Map', () => {
      const map = new Map()
      map.set('key', 'value')
      expect(isEmpty(map)).toBe(false)
    })

    it('should return true for empty Set', () => {
      expect(isEmpty(new Set())).toBe(true)
    })

    it('should return false for non-empty Set', () => {
      const set = new Set()
      set.add('value')
      expect(isEmpty(set)).toBe(false)
    })

    it('should return true for empty object', () => {
      expect(isEmpty({})).toBe(true)
    })

    it('should return false for non-empty object', () => {
      expect(isEmpty({ key: 'value' })).toBe(false)
    })

    it('should return true for number 0', () => {
      expect(isEmpty(0)).toBe(true)
    })

    it('should return false for non-zero number', () => {
      expect(isEmpty(1)).toBe(false)
    })
  })
})
