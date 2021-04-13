import { Controller } from 'egg';
import { list } from '../model/consume';

export default class ConsumeController extends Controller {
  public getList(ctx) {
    ctx.body = list;
  }
}
