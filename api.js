const clientId = '2f6db3c9cc9d430cb6b41ae92317f56f';
const clientSecret = '9a35a4bbebc0481aae502a2723b71a62';

async function searchTrack(trackName) {
    const token = await getAccessToken();
    const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(trackName)}&type=track`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();
    return data.tracks.items; 
}


async function getAccessToken() {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials'
    });

    const data = await response.json();
    return data.access_token;
}

async function displayTracks(trackName) {
    const tracks = await searchTrack(trackName);
    const container = document.querySelector('.nl-container .row');

    container.innerHTML = '';

    tracks.forEach(track => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-12', 'col-md-4');
        
        const mediaDiv = document.createElement('div');
        mediaDiv.classList.add('media');
        
        const anchor = document.createElement('a');
        anchor.href = track.external_urls.spotify;
        
        const img = document.createElement('img');
        img.src = track.album.images[0].url; 
        img.alt = track.name;

        const infoDiv = document.createElement('div');
        infoDiv.classList.add('info');

        const title = document.createElement('span');
        title.classList.add('title');
        title.textContent = track.name;

        const artist = document.createElement('span');
        artist.classList.add('artist');
        artist.textContent = track.artists.map(a => a.name).join(', '); 

        const time = document.createElement('span');
        time.classList.add('time');
        time.textContent = track.album.release_date;

        infoDiv.appendChild(title);
        infoDiv.appendChild(artist);
        infoDiv.appendChild(time);
        anchor.appendChild(img);
        anchor.appendChild(infoDiv);
        mediaDiv.appendChild(anchor);
        colDiv.appendChild(mediaDiv);
        container.appendChild(colDiv);
    });
}

displayTracks('Your Track Name');

// Treding
async function searchAlbum(albumName) {
    const token = await getAccessToken();
    const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(albumName)}&type=album`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();
    return data.albums.items; 
}

async function displayAlbums(albumName) {
    const albums = await searchAlbum(albumName);
    const container = document.querySelector('.trending-container'); 

    albums.forEach(album => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-12', 'col-md-2', 'text-center');
        
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        
        const img = document.createElement('img');
        img.src = album.images[0].url; 
        img.alt = album.name;

        const anchor = document.createElement('a');
        anchor.href = album.external_urls.spotify; 
        anchor.classList.add('title');

        const span = document.createElement('span');
        span.textContent = album.name; 

        anchor.appendChild(span);
        cardDiv.appendChild(img);
        cardDiv.appendChild(anchor);
        colDiv.appendChild(cardDiv);
        container.appendChild(colDiv);
    });
}

displayAlbums('Your Album Name');

// Chill
async function searchChillMusic() {
    const token = await getAccessToken();
    const response = await fetch(`https://api.spotify.com/v1/search?q=chill&type=track`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();
    return data.tracks.items; 
}
async function displayChillMusic() {
    const tracks = await searchChillMusic();
    const container = document.querySelector('.chill-container .row');

    container.innerHTML = ''; // Xóa nội dung cũ

    tracks.forEach(track => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-12', 'col-md-2', 'text-center');
        
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        
        const img = document.createElement('img');
        img.src = track.album.images[0].url; // Ảnh bìa bài hát
        img.alt = track.name;

        const anchor = document.createElement('a');
        anchor.href = track.external_urls.spotify; // Liên kết đến bài hát trên Spotify
        anchor.classList.add('title');

        const span = document.createElement('span');
        span.textContent = track.name; // Tên bài hát

        anchor.appendChild(span);
        cardDiv.appendChild(img);
        cardDiv.appendChild(anchor);
        colDiv.appendChild(cardDiv);
        container.appendChild(colDiv);
    });
}

// Gọi hàm displayChillMusic khi tải trang
displayChillMusic();

// Album hhot
async function searchAlbums() {
    const token = await getAccessToken();
    const response = await fetch(`https://api.spotify.com/v1/search?q=album&type=album`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();
    return data.albums.items; 
}


async function displayAlbums() {
    const albums = await searchAlbums();
    const container = document.getElementById('album-hot-items');

    container.innerHTML = ''; // Xóa nội dung cũ

    albums.forEach(album => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-12', 'col-md-2', 'text-center');
        
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        
        const img = document.createElement('img');
        img.src = album.images[0].url; // Ảnh bìa album
        img.alt = album.name;

        const anchor = document.createElement('a');
        anchor.href = album.external_urls.spotify; // Liên kết đến album trên Spotify
        anchor.classList.add('title');

        const span = document.createElement('span');
        span.textContent = album.name; // Tên album

        anchor.appendChild(span);
        cardDiv.appendChild(img);
        cardDiv.appendChild(anchor);
        colDiv.appendChild(cardDiv);
        container.appendChild(colDiv);
    });
}

// Gọi hàm displayAlbums khi tải trang
window.onload = () => {
    displayChillMusic(); // Hiển thị nhạc chill
    displayAlbums(); // Hiển thị album
};


// Radio
async function searchRadio() {
    const token = await getAccessToken();
    const response = await fetch(`https://api.spotify.com/v1/search?q=radio&type=playlist`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();
    return data.playlists.items; 
}

async function displayRadio() {
    const playlists = await searchRadio();
    const container = document.querySelector('.radio-hot .row');

    container.innerHTML = ''; // Xóa nội dung cũ

    playlists.forEach(playlist => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-12', 'col-md-2', 'text-center');
        
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        
        const img = document.createElement('img');
        img.src = playlist.images[0].url; // Ảnh bìa playlist
        img.alt = playlist.name;

        const anchor = document.createElement('a');
        anchor.href = playlist.external_urls.spotify; // Liên kết đến playlist trên Spotify
        anchor.classList.add('title');

        const span = document.createElement('span');
        span.textContent = playlist.name; // Tên playlist

        anchor.appendChild(span);
        cardDiv.appendChild(img);
        cardDiv.appendChild(anchor);
        
        const liveSpan = document.createElement('span');
        liveSpan.classList.add('live', 'live-recent');
        liveSpan.textContent = 'live'; // Hiển thị chữ "live"

        cardDiv.appendChild(liveSpan);
        colDiv.appendChild(cardDiv);
        container.appendChild(colDiv);
    });
}

// Gọi hàm displayRadio khi tải trang
window.onload = () => {
    displayChillMusic(); // Hiển thị nhạc chill
    displayAlbums(); // Hiển thị album
    displayRadio(); // Hiển thị radio
};
