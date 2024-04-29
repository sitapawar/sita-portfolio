const masonry_container = document.querySelector('#masonry-gallery-demo');
window.lightGallery(masonry_container, {
    selector: '.lg-item',
    zoomFromOrigin: true,
    download: true,
    plugins: [
        lgZoom,
        lgAutoplay,
        lgFullscreen,
        lgRotate,
        lgShare,
        lgThumbnail
    ],
});