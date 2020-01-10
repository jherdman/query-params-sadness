import Controller from '@ember/controller';

import { readOnly } from '@ember/object/computed';

export default class ApplicationController extends Controller {
  queryParams = ['p'];

  @readOnly('p') pancake;
}
