import { Injectable } from '@angular/core';
import { BaseModel } from './base-model';
import { ExperienceModel } from '@app/shared/models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class BaseModelLoaderService {
  constructor() {}

  /**
   * Loads an array of objects (eg. from JSON) and transform them nicely into the required type that extends the BaseModel
   * @param object The source array of objects
   * @param type The type required
   *
   * @returns An array of typed models reprensenting the `object`
   */
  public load<TModel extends BaseModel>(objects: Object[], type: new (_: Object) => TModel): TModel[] {
    console.log(objects);

    let ret = new Array<TModel>();
    objects.forEach((obj: Object) => {
      ret.push(new type(obj));
    });

    return ret;
  }
}
