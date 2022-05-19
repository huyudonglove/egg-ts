// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportConsume from '../../../app/model/consume';

declare module 'egg' {
  interface IModel {
    Consume: ReturnType<typeof ExportConsume>;
  }
}
