// Fotos del carrusel del hero (portada y /buy), con versiones para móvil.
//
// El sitio usa passthroughImageService (sin sharp en el deploy), así que Astro
// no genera tamaños. Las versiones de 640 y 960 px están ya generadas en
// src/assets/hero/ (sharp en local, calidad 72). Antes el teléfono bajaba la
// foto de 1600 px (200-440 KB) y Lighthouse marcaba 1.2-1.5 s de LCP de más.
// Si se cambia una foto, regenerar sus dos versiones con el mismo nombre.
import type { ImageMetadata } from 'astro';
import Utah from '../assets/Utah.webp';
import Utah640 from '../assets/hero/Utah-640.webp';
import Utah960 from '../assets/hero/Utah-960.webp';
import Idaho from '../assets/Idaho.webp';
import Idaho640 from '../assets/hero/Idaho-640.webp';
import Idaho960 from '../assets/hero/Idaho-960.webp';
import Nevada from '../assets/Nevada.webp';
import Nevada640 from '../assets/hero/Nevada-640.webp';
import Nevada960 from '../assets/hero/Nevada-960.webp';
import California from '../assets/California.webp';
import California640 from '../assets/hero/California-640.webp';
import California960 from '../assets/hero/California-960.webp';
import Texas from '../assets/Texas.webp';
import Texas640 from '../assets/hero/Texas-640.webp';
import Texas960 from '../assets/hero/Texas-960.webp';
import Florida from '../assets/Florida.webp';
import Florida640 from '../assets/hero/Florida-640.webp';
import Florida960 from '../assets/hero/Florida-960.webp';
import Colorado from '../assets/Colorado.webp';
import Colorado640 from '../assets/hero/Colorado-640.webp';
import Colorado960 from '../assets/hero/Colorado-960.webp';

export interface HeroImage {
  img: ImageMetadata;
  srcset: string;
  label: string;
  alt: string;
}

const srcset = (s640: ImageMetadata, s960: ImageMetadata, full: ImageMetadata) =>
  `${s640.src} 640w, ${s960.src} 960w, ${full.src} ${full.width}w`;

export const heroImages: HeroImage[] = [
  { img: Utah, srcset: srcset(Utah640, Utah960, Utah), label: 'Utah', alt: 'Downtown Salt Lake City skyline, Utah' },
  { img: Idaho, srcset: srcset(Idaho640, Idaho960, Idaho), label: 'Idaho', alt: 'Sawtooth Mountains, Idaho' },
  { img: Nevada, srcset: srcset(Nevada640, Nevada960, Nevada), label: 'Nevada', alt: 'Las Vegas Strip at dusk, Nevada' },
  { img: California, srcset: srcset(California640, California960, California), label: 'California', alt: 'Golden Gate Bridge, California' },
  { img: Texas, srcset: srcset(Texas640, Texas960, Texas), label: 'Texas', alt: 'The Alamo, Texas' },
  { img: Florida, srcset: srcset(Florida640, Florida960, Florida), label: 'Florida', alt: 'Miami Beach, Florida' },
  { img: Colorado, srcset: srcset(Colorado640, Colorado960, Colorado), label: 'Colorado', alt: 'Downtown Denver skyline, Colorado' },
];
