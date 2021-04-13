// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportConsume from '../../../app/controller/consume';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    consume: ExportConsume;
    home: ExportHome;
  }
}
