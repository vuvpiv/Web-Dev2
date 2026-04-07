import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css',
})
export class AlbumsComponent implements OnInit {

  private albumsSubject = new BehaviorSubject<Album[]>([]);
  albums$ = this.albumsSubject.asObservable();

  loading = true;

  constructor(private albumService: AlbumService) {}

  ngOnInit() {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albumsSubject.next(data);
        this.loading = false;
        
      },
      error: () => {
        this.loading = false;
        alert('Error loading albums');
      }
    });
  }

  delete(id: number) {
    if (!confirm('Delete this album?')) return;

    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albumsSubject.next(
          this.albumsSubject.value.filter(a => a.id !== id)
        );
      },
      error: () => alert('Delete failed')
    });
  }
}