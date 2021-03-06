import { convertFromDirectory } from '../index';
import { readFileSync } from 'fs';

test('04.multipleFiles', async () => {
  const typeOutputDirectory = './src/__tests__/04/models';

  const result = await convertFromDirectory({
    schemaDirectory: './src/__tests__/04/schemas',
    typeOutputDirectory
  });

  expect(result).toBe(true);

  const oneContent = readFileSync(`${typeOutputDirectory}/One.ts`).toString();

  expect(oneContent).toBe(
    `/**
 * This file was automatically generated by joi-to-typescript
 * Do not modify this file manually
 */

import { Person } from '.';

/**
 * Item
 */
export interface Item {
  /**
   * Female Zebra
   */
  femaleZebra?: Zebra;
  /**
   * Male Zebra
   */
  maleZebra?: Zebra;
  /**
   * name
   */
  name: string;
}

/**
 * A list of People
 */
export type People = Person[];

/**
 * a test schema definition
 */
export interface Test {
  /**
   * name
   */
  name?: string;
  /**
   * A list of People
   */
  people?: People;
  /**
   * propertyName1
   */
  propertyName1: boolean;
}

/**
 * Zebra
 */
export interface Zebra {
  /**
   * name
   */
  name?: string;
}
`
  );
});
