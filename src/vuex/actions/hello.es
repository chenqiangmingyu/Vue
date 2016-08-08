import util from '../util';
import api from '../../api';
import * as types from '../mutation-type';

export const sayHello = util.makeAction(types.SAY_HELLO, api.getView);
