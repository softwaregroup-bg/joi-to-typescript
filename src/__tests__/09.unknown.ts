import Joi from 'joi';

import { convertSchema, Settings } from '../index';

test('09.unknown', () => {
  const schema = Joi.object({
    name: Joi.string()
  })
    .label('TestSchema')
    .description('a test schema definition')
    .unknown(true);

  const result = convertSchema(({} as unknown) as Settings, schema);
  expect(result).not.toBeUndefined;
  expect(result?.content).toBe(`/**
 * a test schema definition
 */
export interface TestSchema {
  /**
   * name
   */
  name?: string;
  /**
   * Unknown Property
   */
  [x: string]: any;
}`);

  const schema2 = Joi.object({
    name: Joi.string()
  })
    .label('TestSchema')
    .description('a test schema definition')
    .unknown(false);

  const result2 = convertSchema(({} as unknown) as Settings, schema2);
  expect(result2).not.toBeUndefined;
  expect(result2?.content).toBe(`/**
 * a test schema definition
 */
export interface TestSchema {
  /**
   * name
   */
  name?: string;
}`);
});
