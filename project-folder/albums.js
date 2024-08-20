function loadScript(src) {
  const script = document.createElement('script')
  script.src = src;
  document.head.prepend(script);
}
loadScript('navigation.js')
  
  
  async function fetchAlbumsWithDetails() {
    try {
      
      const albumsResponse = await fetch('https://jsonplaceholder.typicode.com/albums');
      const albums = await albumsResponse.json();

      
      const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await usersResponse.json();

     
      const photosResponse = await fetch('https://jsonplaceholder.typicode.com/photos');
      const photos = await photosResponse.json();

      
      const albumsContainer = document.getElementById('albumsContainer');

      
      albums.forEach(album => {
        
        const creator = users.find(user => user.id === album.userId);

        
        const albumPhotos = photos.filter(photo => photo.albumId === album.id);

        
        const photoCount = albumPhotos.length;
        const samplePhoto = albumPhotos[0]; 

        
        const albumElement = document.createElement('div');
        albumElement.classList.add('album');

        const albumTitleLink = document.createElement('a');
        albumTitleLink.href = `/project-folder/albums.html`;
        albumTitleLink.textContent = `${album.title} (${photoCount} photos)`;

        const creatorLink = document.createElement('a');
        creatorLink.href = `/project-folder/index.html`;
        creatorLink.textContent = ` by ${creator.name}`;

        
        const samplePhotoLink = document.createElement('a');
        samplePhotoLink.href = samplePhoto.url;
        const samplePhotoImg = document.createElement('img');
        samplePhotoImg.src = samplePhoto.thumbnailUrl;
        samplePhotoImg.alt = album.title;
        samplePhotoLink.appendChild(samplePhotoImg);

        
        albumElement.appendChild(albumTitleLink);
        albumElement.appendChild(creatorLink);
        albumElement.appendChild(samplePhotoLink);

        
        albumsContainer.appendChild(albumElement);
      });
    } catch (error) {
      console.error('Error fetching albums or photos:', error);
    }
  }


  fetchAlbumsWithDetails();