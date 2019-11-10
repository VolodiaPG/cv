import { BaseModelLoaderService } from '@app/core/model-builder/base-model-loader.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceLoaderService extends BaseModelLoaderService {
  constructor() {
    super();
  }
}
