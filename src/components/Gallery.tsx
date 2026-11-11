'use client';

import { MAPS_URL } from '@/lib/site';


import { useTranslations } from 'next-intl';
import { useState, useCallback, useEffect, useRef } from 'react';

const photos = [
  { src: '/gallery/images (1).jpg' },
  { src: '/gallery/images (2).jpg' },
  { src: '/gallery/images (3).jpg' },
  { src: '/gallery/images (4).jpg' },
  { src: '/gallery/images (5).jpg' },
  { src: '/gallery/images (6).jpg' },
  { src: '/gallery/images (7).jpg' },
  { src: '/gallery/images (8).jpg' },
  { src: '/gallery/images (9).jpg' },
  { src: '/gallery/images (10).jpg' },
  { src: '/gallery/images (11).jpg' },
  { src: '/gallery/images (12).jpg' },
];

export default function Gallery() {
  const t = useTranslations('gallery');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    if (!isLightboxOpen || !dialogRef.current) return;
    const dialog = dialogRef.current;
    const opener = openerRef.current;
    const openedUrl = window.location.href;
    const { scrollX, scrollY } = window;
    const html = document.documentElement;
    const body = document.body;
    const htmlHadStyle = html.hasAttribute('style');
    const bodyHadStyle = body.hasAttribute('style');
    const properties = (element: HTMLElement, names: string[]) => names.map((name) => ({
      name, value: element.style.getPropertyValue(name), priority: element.style.getPropertyPriority(name),
    }));
    const htmlStyles = properties(html, ['overflow', 'scroll-behavior']);
    const bodyStyles = properties(body, ['overflow', 'position', 'top', 'left', 'width', 'padding-right']);
    const restore = (element: HTMLElement, styles: ReturnType<typeof properties>) => {
      styles.forEach(({ name, value, priority }) => {
        if (value) element.style.setProperty(name, value, priority);
        else element.style.removeProperty(name);
      });
    };
    const scrollbarWidth = window.innerWidth - html.clientWidth;
    const paddingRight = parseFloat(window.getComputedStyle(body).paddingRight) || 0;

    // The native modal makes the rest of the document inert. Fixed positioning
    // also locks the background on touch browsers without a global wheel handler.
    html.style.overflow = 'hidden';
    html.style.scrollBehavior = 'auto';
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.left = `-${scrollX}px`;
    body.style.width = '100%';
    body.style.paddingRight = `${paddingRight + scrollbarWidth}px`;
    dialog.showModal();
    dialog.querySelector<HTMLButtonElement>('button')?.focus({ preventScroll: true });

    return () => {
      dialog.close();
      restore(body, bodyStyles);
      // Do not put a route change back at the gallery's old scroll position.
      if (window.location.href === openedUrl) {
        window.scrollTo({ left: scrollX, top: scrollY, behavior: 'instant' });
        if (opener?.isConnected) opener.focus({ preventScroll: true });
      }
      restore(html, htmlStyles);
      if (!htmlHadStyle && html.style.length === 0) html.removeAttribute('style');
      if (!bodyHadStyle && body.style.length === 0) body.removeAttribute('style');
    };
  }, [isLightboxOpen]);

  const openLightbox = (opener: HTMLButtonElement) => {
    openerRef.current = opener;
    setIsLightboxOpen(true);
  };
  const closeLightbox = () => setIsLightboxOpen(false);

  return (
    <>
      <section id="gallery" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-display text-3xl sm:text-4xl font-semibold mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('title')}
          </h2>
          <p className="mb-8" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
          <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {photos.map((photo, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={t('captions.' + i)}
                  className={`gallery-item relative group cursor-pointer text-left rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
                  onClick={(e) => {
                    setCurrentIndex(i);
                    openLightbox(e.currentTarget);
                  }}
                >
                  <img
                    src={photo.src}
                    alt={t('captions.' + i)}
                    className="w-full h-full object-cover rounded-lg"
                    style={{ minHeight: i === 0 ? '400px' : '180px' }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors rounded-lg flex items-end">
                    <p className="text-white text-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      {t('captions.' + i)}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={(e) => { goToPrevious(); openLightbox(e.currentTarget); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-colors"
              aria-label={t("previous")}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={(e) => { goToNext(); openLightbox(e.currentTarget); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-colors"
              aria-label={t("next")}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <div className="flex justify-center mt-6 gap-4 items-center">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
                style={{ color: 'var(--accent)' }}
              >
                {t('viewAll')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {isLightboxOpen && (
        <dialog
          ref={dialogRef}
          aria-modal="true"
          aria-label={t("captions." + currentIndex)}
          className="fixed inset-0 m-0 p-0 border-0 w-screen h-dvh max-w-none max-h-none z-[60] bg-black/95 open:flex items-center justify-center overscroll-contain"
          onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}
          onCancel={(e) => { e.preventDefault(); closeLightbox(); }}
          onClose={(e) => { if (!e.currentTarget.open) closeLightbox(); }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
              e.preventDefault();
              if (e.key === 'ArrowLeft') goToPrevious();
              else goToNext();
            }
            if (e.key === 'Tab') {
              const buttons = e.currentTarget.querySelectorAll<HTMLButtonElement>('button');
              const first = buttons[0];
              const last = buttons[buttons.length - 1];
              if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last?.focus({ preventScroll: true });
              } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first?.focus({ preventScroll: true });
              }
            }
          }}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            aria-label={t("close")}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            aria-label={t("previous")}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <img
            src={photos[currentIndex].src}
            alt={t('captions.' + currentIndex)}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            aria-label={t("next")}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {currentIndex + 1} / {photos.length}
          </div>
        </dialog>
      )}
    </>
  );
}
