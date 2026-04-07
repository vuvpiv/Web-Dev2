import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetailComponent implements OnInit {
  loading = true;
  album: Album | null = null;
  editedTitle = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe({
      next: (a) => {
        this.album = a;
        this.editedTitle = a.title;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  save() {
    if (!this.album) return;

    const updated: Album = { ...this.album, title: this.editedTitle };

    this.albumService.updateAlbum(updated).subscribe({
      next: (a) => {
        this.album = a;
      },
    });
  }

  back() {
    this.router.navigate(['/albums']);
  }
}