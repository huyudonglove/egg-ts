// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportConsume from '../../../app/model/consume';

declare module 'egg' {
  interface IModel {
    Consume: ReturnType<typeof ExportConsume>;
  }
}
