import { TestBed } from '@angular/core/testing';

import { Album } from '../models/album.model';
import { AlbumService } from './album.service';

describe('Album', () => {
  let service: AlbumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});