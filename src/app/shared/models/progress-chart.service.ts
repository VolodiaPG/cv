import { Injectable } from '@angular/core';
import { BaseModelLoaderService } from '@app/core/model-builder/base-model-loader.service';

@Injectable({
  providedIn: 'root'
})
export class ProgressChartLoaderService extends BaseModelLoaderService {
  constructor() {
    super();
  }
}
