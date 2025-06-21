const songs = [
  {
    title: "Ocean Breeze",
    artist: "Waveform",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    cover: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Night Drive",
    artist: "Synthwave",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Sunset Groove",
    artist: "Chill Masters",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    cover: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Forest Walk",
    artist: "Nature Sound",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    cover: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Electric Avenue",
    artist: "Neon Lights",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Starry Night",
    artist: "Dreamscape",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Morning Sun",
    artist: "Rise & Shine",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    cover: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "City Lights",
    artist: "Urban Flow",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
     cover: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Dream Fields",
    artist: "Synth Dream",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Golden Hour",
    artist: "Sunset Crew",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
    cover: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Rainy Days",
    artist: "Cloud Nine",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
    cover: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Midnight Jazz",
    artist: "Blue Note",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Desert Wind",
    artist: "Sahara",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
    cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Blue Lagoon",
    artist: "Aqua",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
    cover: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Firefly",
    artist: "Night Lights",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Crystal Skies",
    artist: "Skyline",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    cover: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Retro Drive",
    artist: "Vaporwave",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Sunrise",
    artist: "Early Birds",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    cover: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Deep Forest",
    artist: "Nature Sound",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
     cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Cloud Surfing",
    artist: "Sky High",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    cover: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Golden Leaves",
    artist: "Autumn",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Neon Nights",
    artist: "City Lights",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "River Flow",
    artist: "Nature Sound",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    cover: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Purple Haze",
    artist: "Dreamscape",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
     cover: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Café Jazz",
    artist: "Smooth Blend",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    cover: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Sunset Drive",
    artist: "Chill Masters",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
    cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Misty Morning",
    artist: "Rise & Shine",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
    cover: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Electric Dreams",
    artist: "Neon Lights",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Frozen Lake",
    artist: "Winter Sound",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
    cover: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Golden Sands",
    artist: "Sahara",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
     cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Cloudy Afternoon",
    artist: "Cloud Nine",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
    cover: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Night Owl",
    artist: "Synthwave",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Blue Moon",
    artist: "Dreamscape",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Sunbeam",
    artist: "Rise & Shine",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    cover: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Deep Blue",
    artist: "Aqua",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Golden Gate",
    artist: "Urban Flow",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    cover: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Aurora",
    artist: "Skyline",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Starlit Road",
    artist: "Night Drive",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Violet Skies",
    artist: "Dreamscape",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    cover: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Sunset Boulevard",
    artist: "Chill Masters",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Lush Green",
    artist: "Nature Sound",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    cover: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Electric Pulse",
    artist: "Neon Lights",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  },
  {
    title: "Golden Path",
    artist: "Sahara",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
    cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400",
    favorite: false,
  }
];

let current = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;
let searchQuery = "";

const audio = document.getElementById('audio');
const cover = document.getElementById('cover');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const favBtn = document.getElementById('fav-btn');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volumeBtn = document.getElementById('volume-btn');
const volumeSlider = document.getElementById('volume');
const songListBtn = document.getElementById('song-list-btn');
const songListOverlay = document.getElementById('song-list-overlay');
const closeListBtn = document.getElementById('close-list-btn');
const songList = document.getElementById('song-list');
const searchInput = document.getElementById('song-search');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const shuffleBtn = document.getElementById('shuffle-btn');
const repeatBtn = document.getElementById('repeat-btn');
const suggestions = document.getElementById('suggestions');

function saveFavorites() {
  const favs = songs.map(song => song.favorite);
  localStorage.setItem('musicAppFavorites', JSON.stringify(favs));
}
function loadFavorites() {
  const favs = JSON.parse(localStorage.getItem('musicAppFavorites') || '[]');
  favs.forEach((fav, i) => {
    if (songs[i]) songs[i].favorite = fav;
  });
}
loadFavorites();

function loadSong(idx) {
  const song = songs[idx];
  cover.src = song.cover;
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = song.src;
  favBtn.classList.toggle('active', song.favorite);
  updateSongList();
}
function playSong() {
  audio.play();
  isPlaying = true;
  playBtn.textContent = "⏸";
}
function pauseSong() {
  audio.pause();
  isPlaying = false;
  playBtn.textContent = "▶";
}

playBtn.onclick = () => isPlaying ? pauseSong() : playSong();
prevBtn.onclick = () => {
  current = (current - 1 + songs.length) % songs.length;
  loadSong(current);
  playSong();
};
nextBtn.onclick = () => {
  current = (current + 1) % songs.length;
  loadSong(current);
  playSong();
};

audio.onloadedmetadata = () => {
  progress.max = audio.duration;
  durationEl.textContent = formatTime(audio.duration);
};
audio.ontimeupdate = () => {
  progress.value = audio.currentTime;
  currentTimeEl.textContent = formatTime(audio.currentTime);
};
progress.oninput = () => {
  audio.currentTime = progress.value;
};
audio.addEventListener('ended', () => {
  if (isRepeat) {
    audio.currentTime = 0;
    audio.play();
  } else if (isShuffle) {
    let next;
    do {
      next = Math.floor(Math.random() * songs.length);
    } while (next === current && songs.length > 1);
    current = next;
    loadSong(current);
    playSong();
  } else {
    current = (current + 1) % songs.length;
    loadSong(current);
    playSong();
  }
});

volumeBtn.onclick = () => {
  volumeSlider.style.display = volumeSlider.style.display === "block" ? "none" : "block";
};
volumeSlider.oninput = () => {
  audio.volume = volumeSlider.value;
};

favBtn.onclick = () => {
  songs[current].favorite = !songs[current].favorite;
  favBtn.classList.toggle('active', songs[current].favorite);
  updateSongList();
  saveFavorites();
};

songListBtn.onclick = () => {
  songListOverlay.style.display = "flex";
};
closeListBtn.onclick = () => {
  songListOverlay.style.display = "none";
};

themeToggle.onclick = function() {
  document.body.classList.toggle('light-mode');
  themeIcon.textContent = document.body.classList.contains('light-mode') ? "☀️" : "🌙";
};

shuffleBtn.addEventListener('click', () => {
  isShuffle = !isShuffle;
  shuffleBtn.style.color = isShuffle ? '#1db954' : '';
});
repeatBtn.addEventListener('click', () => {
  isRepeat = !isRepeat;
  repeatBtn.style.color = isRepeat ? '#1db954' : '';
});

searchInput.addEventListener('input', function() {
  searchQuery = this.value.toLowerCase();
  updateSongList();

  if (!window.autocompleteBox) {
    let box = document.getElementById('autocomplete-box');
    if (!box) {
      box = document.createElement('div');
      box.id = 'autocomplete-box';
      box.style.position = 'absolute';
      box.style.background = '#232526';
      box.style.color = '#fff';
      box.style.width = '100%';
      box.style.maxHeight = '180px';
      box.style.overflowY = 'auto';
      box.style.borderRadius = '0 0 12px 12px';
      box.style.boxShadow = '0 4px 16px #0005';
      box.style.zIndex = '100';
      box.style.display = 'none';
      box.style.top = '100%';
      box.style.left = '0';
      box.style.fontSize = '1em';
      box.style.padding = '0';
      box.style.margin = '0';
      box.style.border = 'none';
      searchInput.parentNode.style.position = 'relative';
      searchInput.parentNode.appendChild(box);
    }
    window.autocompleteBox = box;
  }
  const autocompleteBox = window.autocompleteBox;

  if (searchQuery.length === 0) {
    autocompleteBox.style.display = 'none';
    autocompleteBox.innerHTML = '';
    return;
  }
  const matches = songs.filter(song =>
    song.title.toLowerCase().includes(searchQuery) ||
    song.artist.toLowerCase().includes(searchQuery)
  );
  if (matches.length === 0) {
    autocompleteBox.style.display = 'none';
    autocompleteBox.innerHTML = '';
    return;
  }
  autocompleteBox.innerHTML = matches
    .slice(0, 8)
    .map(song => `
      <div class="autocomplete-item" style="padding:8px 14px;cursor:pointer;transition:background 0.15s;">
        <span style="color:#1db954;font-weight:600;">${song.title}</span>
        <span style="color:#b3b3b3;font-size:0.97em;"> &mdash; ${song.artist}</span>
      </div>
    `).join('');
  autocompleteBox.style.display = 'block';

 
  Array.from(autocompleteBox.children).forEach((item, i) => {
    item.onclick = () => {
      searchInput.value = matches[i].title;
      searchQuery = matches[i].title.toLowerCase();
      updateSongList();

      const songIdx = songs.findIndex(song =>
        song.title.toLowerCase() === matches[i].title.toLowerCase() &&
        song.artist.toLowerCase() === matches[i].artist.toLowerCase()
      );
      if (songIdx !== -1) {
        current = songIdx;
        loadSong(current);
        playSong();
      }
      autocompleteBox.style.display = 'none';
    };
  });
});

document.addEventListener('click', function (e) {
  const autocompleteBox = window.autocompleteBox;
  if (!searchInput.contains(e.target) && autocompleteBox && !autocompleteBox.contains(e.target)) {
    autocompleteBox.style.display = 'none';
  }
});

searchInput.addEventListener('blur', function () {
  const autocompleteBox = window.autocompleteBox;
  setTimeout(() => { if (autocompleteBox) autocompleteBox.style.display = 'none'; }, 120);
});

searchInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const query = this.value.trim().toLowerCase();
    if (!query) return;
    const matchIdx = songs.findIndex(song =>
      song.title.toLowerCase().includes(query) ||
      song.artist.toLowerCase().includes(query)
    );
    if (matchIdx !== -1) {
      current = matchIdx;
      loadSong(current);
      playSong();
      if (window.autocompleteBox) window.autocompleteBox.style.display = 'none';
      this.blur();
    }
  }
});

function updateSongList() {
  songList.innerHTML = "";
  songs.forEach((song, idx) => {
    if (
      searchQuery &&
      !song.title.toLowerCase().includes(searchQuery) &&
      !song.artist.toLowerCase().includes(searchQuery)
    ) {
      return;
    }
    const li = document.createElement('li');
    li.className = idx === current ? "active" : "";
    li.innerHTML = `
      <img src="${song.cover}" class="song-list-cover" />
      <div>
        <div class="song-list-title">${song.title}</div>
        <div class="song-list-artist">${song.artist}</div>
      </div>
      <span style="margin-left:auto;color:#e74c3c;cursor:pointer;">${song.favorite ? "♥" : ""}</span>
    `;
    li.onclick = () => {
      current = idx;
      loadSong(current);
      playSong();
      songListOverlay.style.display = "none";
    };
    li.querySelector('span').onclick = (e) => {
      e.stopPropagation();
      songs[idx].favorite = !songs[idx].favorite;
      updateSongList();
      saveFavorites();
    };
    songList.appendChild(li);
  });
}

function updateSuggestions() {
  const notFav = songs.filter((s, i) => !s.favorite && i !== current);
  const picks = [];
  while (picks.length < 4 && notFav.length) {
    const idx = Math.floor(Math.random() * notFav.length);
    picks.push(notFav.splice(idx, 1)[0]);
  }
  suggestions.innerHTML = `
    <div class="suggestion-heading" style="font-weight:700;font-size:1.15em;margin-bottom:10px;color:#1db954;">Suggestions for you</div>
    ${picks.map(song => `
      <div class="suggestion-card" tabindex="0">
        <img src="${song.cover}" alt="${song.title}" />
        <div>
          <div class="suggestion-title">${song.title}</div>
          <div class="suggestion-artist">${song.artist}</div>
        </div>
      </div>
    `).join('')}
  `;
  Array.from(suggestions.querySelectorAll('.suggestion-card')).forEach((card, i) => {
    card.onclick = () => {
      current = songs.indexOf(picks[i]);
      loadSong(current);
      playSong();
    };
  });
}

loadSong(current);
updateSuggestions();

favBtn.addEventListener('click', updateSuggestions);
audio.addEventListener('ended', updateSuggestions);
nextBtn.addEventListener('click', updateSuggestions);
prevBtn.addEventListener('click', updateSuggestions);

function formatTime(sec) {
  sec = Math.floor(sec);
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}