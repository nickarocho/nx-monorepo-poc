import { myAmazingApp } from './app/my-amazing-app';

import { core } from '@nx-monorepo-poc/core';
import { cat } from '@nx-monorepo-poc/cat';
import { dog } from '@nx-monorepo-poc/dog';

console.log(`Running ${myAmazingApp()}`);

console.log(core());
console.log(cat());
console.log(dog());
