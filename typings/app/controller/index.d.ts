// This file is created by egg-ts-helper@1.30.3
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
