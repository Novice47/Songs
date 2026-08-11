/* ==========================================================================
   DEELUXE SALOON & MEHFIL-E-ISHQ — SCRIPT ENGINE
   Custom Glass Capsule Audio Engine for BOTH Saloon Songs & Love Songs Modes
   ========================================================================== */

// 1. ALL 101 EXACT LOCAL SONG OBJECTS
const songs = [
    { title: "Aa Bhi Ja Sanam", artist: "Prince", era: "2000s", category: "ROMANTIC", file: "./songs/Aa Bhi Ja Sanam  - [Bangmp3.blogspot.com].ogg" },
    { title: "Aa Bhi Jaa", artist: "Sur", era: "2000s", category: "CLASSICS", file: "./songs/Aa Bhi Jaa.ogg" },
    { title: "Aa Ke Teri Baahon Mein", artist: "Vansh", era: "90s", category: "ROMANTIC", file: "./songs/Aa Ke Teri Baahon Mein.ogg" },
    { title: "Aadat (Movie Version)", artist: "Kalyug", era: "2000s", category: "CLASSICS", file: "./songs/Aadat (Movie Version)  - [Bangmp3.blogspot.com].ogg" },
    { title: "Aaj Dil Gustakh Hai", artist: "Blue", era: "2000s", category: "ROMANTIC", file: "./songs/Aaj Dil Gustakh Hai @ SongsDL.com.ogg" },
    { title: "Aaj Hum Tum O Sanam", artist: "Saathi", era: "90s", category: "ROMANTIC", file: "./songs/Aaj Hum Tum O Sanam (Saathi) @ SongsDL.com.ogg" },
    { title: "Aaj Phir Tumpe", artist: "Dayavan", era: "90s", category: "CLASSICS", file: "./songs/Aaj Phir Tumpe (Dayavan) @ SongsDL.com.ogg" },
    { title: "Aaj Tu Gair Sahi", artist: "Oonche Log", era: "90s", category: "CLASSICS", file: "./songs/Aaj Tu Gair Sahi - Oonche Log @ SongsDL.com.ogg" },
    { title: "Aaja Aaja Meri Jaan", artist: "Aaja Meri Jaan", era: "90s", category: "ROMANTIC", file: "./songs/Aaja Aaja Meri Jaan (Aaja Meri Jaan) @ SongsDL.com.ogg" },
    { title: "Aaja Mahiya", artist: "Fiza", era: "2000s", category: "ROMANTIC", file: "./songs/Aaja Mahiya.ogg" },
    { title: "Aaja Soniye", artist: "Mujhse Shaadi Karogi", era: "2000s", category: "CLASSICS", file: "./songs/Aaja Soniye @ SongsDL.com.ogg" },
    { title: "Aankhen Pyari Hain", artist: "Vintage Archive", era: "90s", category: "ROMANTIC", file: "./songs/Aankhen Pyari Hain [www.DJLUV.in].ogg" },
    { title: "Aankhon Ki Gustakhiyaan", artist: "Hum Dil De Chuke Sanam", era: "90s", category: "ROMANTIC", file: "./songs/Aankhon Ki Gustakhiyaan - Hum Dil De Chuke Sanam @ SongsDL.com.ogg" },
    { title: "Aankhon Mein Teri", artist: "Om Shanti Om", era: "2000s", category: "ROMANTIC", file: "./songs/Aankhon Mein Teri @ SongsDL.com.ogg" },
    { title: "Aao Milo Chalo", artist: "Jab We Met", era: "2000s", category: "CLASSICS", file: "./songs/Aao Milo Chalo @ SongsDL.com.ogg" },
    { title: "Aap Ki Kashish", artist: "Aashiq Banaya Aapne", era: "2000s", category: "ROMANTIC", file: "./songs/Aap Ki Kashish - Aashiq Banaya Aapne @ SongsDL.com.ogg" },
    { title: "Aap Ki Yaad Aaye To", artist: "Aap Kaa Surroor", era: "2000s", category: "ROMANTIC", file: "./songs/Aap Ki Yaad Aaye To @ SongsDL.com.ogg" },
    { title: "Aapko Pehle Bhi Kahin Dekha Hai", artist: "Movie Soundtracks", era: "2000s", category: "CLASSICS", file: "./songs/Aapko Pehle Bhi Kahin Dekha Hai @ SongsDL.com.ogg" },
    { title: "Aas Paas (Solo Version)", artist: "Anjaana Anjaani", era: "2000s", category: "ROMANTIC", file: "./songs/Aas Paas (Solo Version)  - [Bangmp3.blogspot.com].ogg" },
    { title: "Aashiq Banaya Aapne", artist: "Aashiq Banaya Aapne", era: "2000s", category: "ROMANTIC", file: "./songs/Aashiq Banaya Aapne - Aashiq Banaya Aapne @ SongsDL.com.ogg" },
    { title: "Aashiqon Ka Naam", artist: "Vintage Collection", era: "90s", category: "CLASSICS", file: "./songs/Aashiqon Ka Naam @ SongsDL.com.ogg" },
    { title: "AASHIQUI MERI", artist: "Himesh Reshammiya & Sunidhi Chauhan", era: "2000s", category: "ROMANTIC", file: "./songs/AASHIQUI MERI -- HIMESH-SUNIDHI.ogg" },
    { title: "Aate Jaate Jo Milta Hai", artist: "Har Dil Jo Pyar Karega", era: "2000s", category: "ROMANTIC", file: "./songs/Aate Jaate Jo Milta Hai @ SongsDL.com.ogg" },
    { title: "Ab Mujhe Raat Din Tumhara", artist: "Sonu Nigam", era: "90s", category: "ROMANTIC", file: "./songs/Ab Mujhe Raat Din Tumhara @ SongsDL.com.ogg" },
    { title: "Achchha Sila Diya Toone Mere Pyar Ka", artist: "Bewafa Sanam", era: "90s", category: "CLASSICS", file: "./songs/Achchha Sila Diya Toone Mere Pyar Ka - Bewafa Sanam @ SongsDL.com.ogg" },
    { title: "Adayein Bhi Hain", artist: "Dil Hai Ke Manta Nahin", era: "90s", category: "ROMANTIC", file: "./songs/Adayein Bhi Hain @ SongsDL.com.ogg" },
    { title: "Ae Chand Teri", artist: "1990s Vault", era: "90s", category: "CLASSICS", file: "./songs/Ae Chand Teri.ogg" },
    { title: "Ae Mere Humsafar (Qayamat Se Qayamat Tak)", artist: "Qayamat Se Qayamat Tak", era: "90s", category: "ROMANTIC", file: "./songs/Ae Mere Humsafar - Qayamat Se Qayamat Tak @ SongsDL.com.ogg" },
    { title: "Ae Mere Humsafar", artist: "Baazigar", era: "90s", category: "ROMANTIC", file: "./songs/Ae Mere Humsafar @ SongsDL.com.ogg" },
    { title: "Afreen Tera Chehra", artist: "Nusrat Fateh Ali Khan", era: "90s", category: "CLASSICS", file: "./songs/Afreen Tera Chehra @ SongsDL.com.ogg" },
    { title: "Agar Aasman Tak Mere", artist: "Meherbaan", era: "90s", category: "CLASSICS", file: "./songs/Agar Aasman Tak Mere @ SongsDL.com.ogg" },
    { title: "Agar Tum Mil Jao", artist: "Zeher", era: "2000s", category: "ROMANTIC", file: "./songs/Agar Tum Mil Jao.ogg" },
    { title: "Ahista Ahista", artist: "Ahista Ahista", era: "2000s", category: "ROMANTIC", file: "./songs/Ahista Ahista @ SongsDL.com.ogg" },
    { title: "Aisa Deewana", artist: "Dil Wale", era: "90s", category: "ROMANTIC", file: "./songs/Aisa Deewana @ SongsDL.com.ogg" },
    { title: "Akele Hai To Kya Gham Hai", artist: "Qayamat Se Qayamat Tak", era: "90s", category: "ROMANTIC", file: "./songs/Akele Hai To Kya Gham Hai (Qayamat Se Qayamat Tak) @ SongsDL.com.ogg" },
    { title: "Ankhon Se", artist: "Vintage Archive", era: "90s", category: "ROMANTIC", file: "./songs/Ankhon Se - [Bangmp3.blogspot.com].ogg" },
    { title: "Awaaz Di Hai", artist: "Aitbaar", era: "90s", category: "CLASSICS", file: "./songs/Awaaz Di Hai (Aitbaar) @ SongsDL.com.ogg" },
    { title: "Baahon Ke Darmiyaan", artist: "Khamoshi", era: "90s", category: "ROMANTIC", file: "./songs/baahon ke darmiyaan.ogg" },
    { title: "Badi Muskil He", artist: "Lajja", era: "2000s", category: "CLASSICS", file: "./songs/Badi Muskil he.ogg" },
    { title: "Bajh Utha Saanson Mein", artist: "Eeshwar", era: "90s", category: "ROMANTIC", file: "./songs/Bajh Utha Saanson Mein - Eeshwar @ SongsDL.com.ogg" },
    { title: "Bakhuda Tumhi Ho", artist: "Kismat Konnection", era: "2000s", category: "ROMANTIC", file: "./songs/Bakhuda Tumhi Ho - [Bangmp3.blogspot.com].ogg" },
    { title: "Beeghi Yaadein (Rock)", artist: "Sanam", era: "2000s", category: "CLASSICS", file: "./songs/Beeghi Yaadein (Rock) - [Bangmp3.blogspot.com].ogg" },
    { title: "Behka", artist: "Ghajini", era: "2000s", category: "ROMANTIC", file: "./songs/Behka @ SongsDL.com.ogg" },
    { title: "Bhaage Re Mann", artist: "Chameli", era: "2000s", category: "CLASSICS", file: "./songs/Bhaage Re Mann - Chameli @ SongsDL.com.ogg" },
    { title: "Bhula Denge Tumko Sanam", artist: "Sonu Nigam", era: "2000s", category: "ROMANTIC", file: "./songs/BHULA DENGE TUMKO SANAM -- SONU.ogg" },
    { title: "Bin Tere Mar Javan", artist: "Vintage Hits", era: "90s", category: "ROMANTIC", file: "./songs/Bin Tere Mar Javan @ SongsDL.com.ogg" },
    { title: "Chaand", artist: "Midnight Collection", era: "90s", category: "CLASSICS", file: "./songs/Chaand @ SongsDL.com.ogg" },
    { title: "Chaha Hain Tumhein Chahenge", artist: "Jeena Marna Tere Sang", era: "90s", category: "ROMANTIC", file: "./songs/Chaha Hain Tumhein Chahenge - Jeena Marna Tere Sang @ SongsDL.com.ogg" },
    { title: "Chahe Lakh Toofan Aayen", artist: "Pyar Jhukta Nahin", era: "90s", category: "CLASSICS", file: "./songs/Chahe Lakh Toofan Aayen - Pyar Jhukta Nahin @ SongsDL.com.ogg" },
    { title: "Chain Mujhe Ab Aaye Na", artist: "Vintage Romance", era: "2000s", category: "ROMANTIC", file: "./songs/Chain Mujhe Ab Aaye Na @ SongsDL.com.ogg" },
    { title: "Chal Chalen", artist: "Woh Lamhe", era: "2000s", category: "CLASSICS", file: "./songs/Chal Chalen @ SongsDL.com.ogg" },
    { title: "Chalte Chalte", artist: "Chalte Chalte", era: "2000s", category: "ROMANTIC", file: "./songs/Chalte Chalte.ogg" },
    { title: "Chand", artist: "1990s Melody", era: "90s", category: "CLASSICS", file: "./songs/Chand @ SongsDL.com.ogg" },
    { title: "Chand Chhupa Baadal Mein", artist: "Hum Dil De Chuke Sanam", era: "90s", category: "ROMANTIC", file: "./songs/Chand Chhupa Baadal Mein - Hum Dil De Chuke Sanam @ SongsDL.com.ogg" },
    { title: "Chanda Ki Doli", artist: "Sonu Nigam", era: "90s", category: "CLASSICS", file: "./songs/Chanda Ki Doli.ogg" },
    { title: "Chhodenge Na Hum Tera Saath", artist: "Marte Dam Tak", era: "90s", category: "CLASSICS", file: "./songs/Chhodenge Na Hum Tera Saath - Marte Dam Tak @ SongsDL.com.ogg" },
    { title: "Chhoti Chhoti Baatein", artist: "Tum Bin", era: "2000s", category: "ROMANTIC", file: "./songs/Chhoti Chhoti Baatein @ SongsDL.com.ogg" },
    { title: "Chor Gayai", artist: "Nostalgic Vault", era: "2000s", category: "CLASSICS", file: "./songs/Chor Gayai - [Bangmp3.blogspot.com].ogg" },
    { title: "Chori Chori (Version 2)", artist: "Garam Masala", era: "2000s", category: "CLASSICS", file: "./songs/Chori Chori @ SongsDL.com (2).ogg" },
    { title: "Chori Chori", artist: "Chori Chori", era: "2000s", category: "ROMANTIC", file: "./songs/Chori Chori @ SongsDL.com.ogg" },
    { title: "Chudi Khankayi Re", artist: "Falguni Pathak", era: "90s", category: "CLASSICS", file: "./songs/Chudi Khankayi Re [www.DJLUV.in].ogg" },
    { title: "Chup Tum Raho", artist: "Is Raat Ki Subah Nahin", era: "90s", category: "ROMANTIC", file: "./songs/Chup Tum Raho @ SongsDL.com.ogg" },
    { title: "Chupke - 2 Sakhiyon Se", artist: "Vintage Melody", era: "90s", category: "CLASSICS", file: "./songs/Chupke - 2 Sakhiyon Se @ SongsDL.com.ogg" },
    { title: "Dagariya Chalo", artist: "Yodha", era: "90s", category: "CLASSICS", file: "./songs/Dagariya Chalo @ SongsDL.com.ogg" },
    { title: "Dance Pe Chance", artist: "Rab Ne Bana Di Jodi", era: "2000s", category: "CLASSICS", file: "./songs/Dance Pe Chance.ogg" },
    { title: "Deewane Hoke Hum", artist: "Jaan", era: "90s", category: "ROMANTIC", file: "./songs/Deewane Hoke Hum @ SongsDL.com.ogg" },
    { title: "Dekh Ke Tumko", artist: "Gawaahi", era: "90s", category: "ROMANTIC", file: "./songs/Dekh Ke Tumko (Gawaahi) @ SongsDL.com.ogg" },
    { title: "Dekhoon Tujhe To Pyaar", artist: "Vintage Duet", era: "90s", category: "ROMANTIC", file: "./songs/Dekhoon Tujhe To Pyaar @ SongsDL.com.ogg" },
    { title: "Dekhte Dekhte", artist: "Vintage Romance", era: "90s", category: "ROMANTIC", file: "./songs/Dekhte Dekhte @ SongsDL.com.ogg" },
    { title: "Dheere Dheere", artist: "Aashiqui", era: "90s", category: "ROMANTIC", file: "./songs/Dheere Dheere @ SongsDL.com.ogg" },
    { title: "Dhire Dhire (Club Mix)", artist: "Vintage Mix", era: "90s", category: "CLASSICS", file: "./songs/Dhire Dhire [www.DJLUV.in].ogg" },
    { title: "Dhire Jalna", artist: "Paheli", era: "2000s", category: "CLASSICS", file: "./songs/Dhire Jalna - Paheli @ SongsDL.com.ogg" },
    { title: "Dholna", artist: "Dil To Pagal Hai", era: "90s", category: "ROMANTIC", file: "./songs/Dholna @ SongsDL.com.ogg" },
    { title: "Dhoom Pichak Dhoom", artist: "Euphoria", era: "90s", category: "CLASSICS", file: "./songs/Dhoom Pichak Dhoom- UPHORIYA.ogg" },
    { title: "Dil Bekarar Tha", artist: "Teri Meherbaniyan", era: "90s", category: "ROMANTIC", file: "./songs/Dil Bekarar Tha @ SongsDL.com.ogg" },
    { title: "Dil De Diya Hai", artist: "Anand Raj Anand", era: "2000s", category: "ROMANTIC", file: "./songs/DIL DE DIYA HAI -- ANAND RAJ NANDN-.ogg" },
    { title: "Dil Deewana", artist: "Maine Pyar Kiya", era: "90s", category: "ROMANTIC", file: "./songs/Dil Deewana @ SongsDL.com.ogg" },
    { title: "Dil Di Nazar", artist: "Maine Pyaar Kyun Kiya", era: "2000s", category: "CLASSICS", file: "./songs/Dil Di Nazar @ SongsDL.com.ogg" },
    { title: "Dil Dil Dil", artist: "Ittefaq", era: "2000s", category: "CLASSICS", file: "./songs/Dil Dil Dil.ogg" },
    { title: "Dil Diya", artist: "Dil Diya Hai", era: "2000s", category: "ROMANTIC", file: "./songs/Dil Diya @ SongsDL.com.ogg" },
    { title: "Dil Diya Hai (Title Track)", artist: "Dil Diya Hai", era: "2000s", category: "ROMANTIC", file: "./songs/Dil Diya Hai - Dil Diya Hai @ SongsDL.com.ogg" },
    { title: "Dil Hai Ke Manta Nahin", artist: "Dil Hai Ke Manta Nahin", era: "90s", category: "ROMANTIC", file: "./songs/Dil Hai Ke Manta Nahin (Dil Hai Ke Manta Nahin) @ SongsDL.com.ogg" },
    { title: "Dil Jo Hamara Aahein Na Bharta", artist: "Naagmani", era: "90s", category: "CLASSICS", file: "./songs/Dil Jo Hamara Aahein Na Bharta - Naagmani @ SongsDL.com.ogg" },
    { title: "Dil Ka Aalam", artist: "Aashiqui", era: "90s", category: "ROMANTIC", file: "./songs/Dil Ka Aalam @ SongsDL.com.ogg" },
    { title: "Dil Ka Rishta (Ensemble)", artist: "Alka Yagnik, Kumar Sanu & Udit Narayan", era: "2000s", category: "ROMANTIC", file: "./songs/DIL KA RISHTA  -- DIL KA RISHTA  --   ALKA ,SANU ,  UDIT.ogg" },
    { title: "Dil Ka Rishta", artist: "Dil Ka Rishta", era: "2000s", category: "ROMANTIC", file: "./songs/Dil Ka Rishta @ SongsDL.com.ogg" },
    { title: "Dil Ka Rishtaa (Solo)", artist: "Dil Ka Rishta", era: "2000s", category: "ROMANTIC", file: "./songs/Dil Ka Rishtaa.ogg" },
    { title: "Dil Ke Badle Sanam", artist: "Kyon Ki", era: "2000s", category: "ROMANTIC", file: "./songs/Dil Ke Badle Sanam @ SongsDL.com.ogg" },
    { title: "Dil Keh Raha Hai Dil Se", artist: "Kyon Ki", era: "2000s", category: "ROMANTIC", file: "./songs/Dil Keh Raha Hai Dil Se @ SongsDL.com.ogg" },
    { title: "Dil Kehe Raha Hain", artist: "Kyon Ki", era: "2000s", category: "ROMANTIC", file: "./songs/Dil Kehe Raha Hain - Kyon Ki @ SongsDL.com.ogg" },
    { title: "Dil Kya Kare", artist: "Dil Kya Kare", era: "90s", category: "ROMANTIC", file: "./songs/Dil Kya Kare @ SongsDL.com.ogg" },
    { title: "Dil Leke", artist: "Wanted", era: "2000s", category: "CLASSICS", file: "./songs/Dil Leke @ SongsDL.com.ogg" },
    { title: "Dil Mein Aag Lagayee", artist: "Alag Alag", era: "90s", category: "CLASSICS", file: "./songs/Dil Mein Aag Lagayee - Alag Alag @ SongsDL.com.ogg" },
    { title: "Dil Mein Phir Aaj Teri Yaad Ka Mausam Aaya", artist: "Yaadon Ka Mausam", era: "90s", category: "ROMANTIC", file: "./songs/Dil Mein Phir Aaj Teri Yaad Ka Mausam Aaya - Yaadon Ka Mausam @ SongsDL.com.ogg" },
    { title: "Dil Mera Todo Na", artist: "Dance Dance", era: "90s", category: "CLASSICS", file: "./songs/Dil Mera Todo Na (Dance Dance) @ SongsDL.com.ogg" },
    { title: "Dil Ne Jise Apna Kahaa", artist: "Dil Ne Jise Apna Kahaa", era: "2000s", category: "ROMANTIC", file: "./songs/Dil Ne Jise Apna Kahaa - Dil Ne Jise Apna Kahaa @ SongsDL.com.ogg" },
    { title: "Dil To Bachcha Hai", artist: "Ishqiya", era: "2000s", category: "CLASSICS", file: "./songs/Dil To Bachcha Hai @ SongsDL.com.ogg" },
    { title: "Do Bol Kahke Hum To", artist: "Radha Ka Sangam", era: "90s", category: "CLASSICS", file: "./songs/Do Bol Kahke Hum To - Radha Ka Sangam @ SongsDL.com.ogg" },
    { title: "Don't Say Alvida", artist: "Main Aurr Mrs Khanna", era: "2000s", category: "ROMANTIC", file: "./songs/Don't Say Alvida @ SongsDL.com.ogg" },
    { title: "Doorie", artist: "Atif Aslam", era: "2000s", category: "ROMANTIC", file: "./songs/Doorie - [Bangmp3.blogspot.com].ogg" }
];

// State Variables
let appMode = 'saloon'; // 'saloon' or 'love'
let activeSongsList = songs;
let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let currentFilter = 'ALL';

// DOM Elements
const audioPlayer = document.getElementById('audio-player');
const playerTitle = document.getElementById('player-title');
const playerArtist = document.getElementById('player-artist');
const playBtn = document.getElementById('play-btn');
const playIcon = document.getElementById('play-icon');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const shuffleBtn = document.getElementById('shuffle-btn');

const progressBar = document.getElementById('progress-bar');
const progressTrack = document.getElementById('progress-track');
const progressFill = document.getElementById('progress-fill');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');

const liveClock = document.getElementById('live-clock');
const capsuleVinyl = document.getElementById('capsule-vinyl');
const capsuleArtText = document.getElementById('capsule-art-text');

const heroTitle = document.getElementById('hero-title');
const heroSubtitle = document.getElementById('hero-subtitle');
const btnModeSaloon = document.getElementById('btn-mode-saloon');
const btnModeLove = document.getElementById('btn-mode-love');
const archiveCount = document.getElementById('archive-count');

const drawerTitle = document.getElementById('drawer-title');
const drawerSubtitle = document.getElementById('drawer-subtitle');

const errorBanner = document.getElementById('error-banner');
const errorMessage = document.getElementById('error-message');
const closeErrorBtn = document.getElementById('close-error-btn');

const archiveDrawer = document.getElementById('archive-drawer');
const toggleArchiveBtn = document.getElementById('toggle-archive-drawer');
const closeDrawerBtn = document.getElementById('close-drawer-btn');
const playlistContainer = document.getElementById('playlist-container');

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
  setAppMode('saloon');
  setupEventListeners();
  startLiveClock();
});

// Switch App Mode (Saloon Songs vs Love Songs)
function setAppMode(mode) {
  appMode = mode;
  document.body.className = `mode-${mode}`;

  if (mode === 'saloon') {
    // Saloon Songs Mode (Full 101 Catalogue)
    activeSongsList = songs;
    heroTitle.innerHTML = 'डीलक्स<br>सैलून';
    heroSubtitle.textContent = 'MEHFIL FM — NOSTALGIC SALOON RADIO (101 TRACKS)';

    if (drawerTitle) drawerTitle.textContent = 'Saloon Songs Vault';
    if (drawerSubtitle) drawerSubtitle.textContent = '101 SALOON RECORDINGS';
    if (archiveCount) archiveCount.textContent = '101';

    btnModeSaloon.classList.add('active');
    btnModeLove.classList.remove('active');
  } else {
    // Love Songs Mode (Romantic Songs Filter)
    activeSongsList = songs.filter(s => s.category === 'ROMANTIC');
    heroTitle.innerHTML = 'महफ़िल-ए-इश्क़';
    heroSubtitle.textContent = `MEHFIL FM — 90S ROMANTIC MELODIES (${activeSongsList.length} TRACKS)`;

    if (drawerTitle) drawerTitle.textContent = 'Mehfil-E-Ishq Vault';
    if (drawerSubtitle) drawerSubtitle.textContent = `${activeSongsList.length} ROMANTIC RECORDINGS`;
    if (archiveCount) archiveCount.textContent = `${activeSongsList.length}`;

    btnModeLove.classList.add('active');
    btnModeSaloon.classList.remove('active');
  }

  currentSongIndex = 0;
  renderPlaylist('ALL');
  loadSong(currentSongIndex);
}

// Real-Time Clock Handler
function startLiveClock() {
  const updateClock = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12;
    if (liveClock) {
      liveClock.textContent = `${hours}:${minutes} ${ampm}`;
    }
  };
  updateClock();
  setInterval(updateClock, 1000);
}

// Load Song
function loadSong(index) {
  if (index < 0 || index >= activeSongsList.length) return;
  currentSongIndex = index;
  const song = activeSongsList[currentSongIndex];

  audioPlayer.src = song.file;
  playerTitle.textContent = song.title;
  playerArtist.textContent = song.artist;
  if (capsuleArtText) capsuleArtText.textContent = song.title.substring(0, 8);

  hideError();
  updatePlaylistHighlight();
}

// Play Song
function playSong() {
  audioPlayer.play().then(() => {
    isPlaying = true;
    playIcon.textContent = '⏸';
    if (capsuleVinyl) capsuleVinyl.classList.add('spinning');
  }).catch((err) => {
    console.warn('Playback notice:', err);
    showError("Unable to load this recording. Please check that the audio file exists inside the songs folder.");
    pauseSong();
  });
}

// Pause Song
function pauseSong() {
  isPlaying = false;
  audioPlayer.pause();
  playIcon.textContent = '▶';
  if (capsuleVinyl) capsuleVinyl.classList.remove('spinning');
}

// Next Song
function nextSong() {
  if (isShuffle) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * activeSongsList.length);
    } while (randomIndex === currentSongIndex && activeSongsList.length > 1);
    currentSongIndex = randomIndex;
  } else {
    currentSongIndex = (currentSongIndex + 1) % activeSongsList.length;
  }
  loadSong(currentSongIndex);
  playSong();
}

// Previous Song
function previousSong() {
  currentSongIndex = (currentSongIndex - 1 + activeSongsList.length) % activeSongsList.length;
  loadSong(currentSongIndex);
  playSong();
}

// Format Seconds to M:SS
function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${String(secs).padStart(2, '0')}`;
}

// Update Timeline Progress Bar
function updateProgress() {
  const { currentTime, duration } = audioPlayer;
  if (!duration) return;

  const percent = (currentTime / duration) * 100;
  progressBar.value = percent;
  progressFill.style.width = `${percent}%`;
  currentTimeEl.textContent = formatTime(currentTime);
  durationEl.textContent = formatTime(duration);
}

// Instant Seeking Function
function seekToSeconds(seconds) {
  if (isNaN(seconds)) return;
  audioPlayer.currentTime = seconds;
  updateProgress();
  if (!isPlaying) {
    playSong();
  }
}

// Handle Direct Click on Progress Bar Track
function handleTrackClick(e) {
  const rect = progressTrack.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const width = rect.width;
  if (width === 0 || !audioPlayer.duration) return;

  const percent = Math.max(0, Math.min(1, clickX / width));
  const targetTime = percent * audioPlayer.duration;
  seekToSeconds(targetTime);
}

// Render Playlist Rows
function renderPlaylist(filterCategory = 'ALL') {
  playlistContainer.innerHTML = '';

  activeSongsList.forEach((song, idx) => {
    if (filterCategory !== 'ALL') {
      if (filterCategory === 'ROMANTIC' && song.category !== 'ROMANTIC') return;
      if (filterCategory === 'CLASSICS' && song.category !== 'CLASSICS') return;
      if (filterCategory === '90s' && song.era !== '90s') return;
      if (filterCategory === '2000s' && song.era !== '2000s') return;
    }

    const row = document.createElement('div');
    row.className = `song-row ${idx === currentSongIndex ? 'active' : ''}`;
    row.dataset.index = idx;

    row.innerHTML = `
      <span class="row-num">${String(idx + 1).padStart(2, '0')}</span>
      <div class="row-title-box">
        <span class="row-title">${song.title}</span>
        <span class="row-artist">${song.artist}</span>
      </div>
      <button class="row-play-btn">${idx === currentSongIndex && isPlaying ? '⏸' : '▶'}</button>
    `;

    row.addEventListener('click', () => {
      if (currentSongIndex === idx && isPlaying) {
        pauseSong();
      } else {
        loadSong(idx);
        playSong();
      }
    });

    playlistContainer.appendChild(row);
  });
}

function updatePlaylistHighlight() {
  const rows = playlistContainer.querySelectorAll('.song-row');
  rows.forEach(row => {
    const idx = parseInt(row.dataset.index);
    const btn = row.querySelector('.row-play-btn');

    if (idx === currentSongIndex) {
      row.classList.add('active');
      if (btn) btn.textContent = isPlaying ? '⏸' : '▶';
    } else {
      row.classList.remove('active');
      if (btn) btn.textContent = '▶';
    }
  });
}

function showError(msg) {
  errorMessage.textContent = msg;
  errorBanner.classList.remove('hidden');
}

function hideError() {
  errorBanner.classList.add('hidden');
}

// Event Listeners
function setupEventListeners() {
  // Mode Switcher Buttons
  if (btnModeSaloon) {
    btnModeSaloon.addEventListener('click', () => setAppMode('saloon'));
  }
  if (btnModeLove) {
    btnModeLove.addEventListener('click', () => setAppMode('love'));
  }

  // Transport buttons
  playBtn.addEventListener('click', () => {
    if (isPlaying) pauseSong(); else playSong();
  });

  prevBtn.addEventListener('click', previousSong);
  nextBtn.addEventListener('click', nextSong);

  if (shuffleBtn) {
    shuffleBtn.addEventListener('click', () => {
      isShuffle = !isShuffle;
      shuffleBtn.classList.toggle('active', isShuffle);
    });
  }

  // Audio Events
  audioPlayer.addEventListener('timeupdate', updateProgress);
  audioPlayer.addEventListener('ended', nextSong);
  audioPlayer.addEventListener('error', () => {
    showError("Unable to load this recording. Please check that the audio file exists inside the songs folder.");
    pauseSong();
  });

  // Clickable Timeline Track Seeking
  if (progressTrack) {
    progressTrack.addEventListener('click', handleTrackClick);
  }

  // Range slider seeking
  if (progressBar) {
    progressBar.addEventListener('input', (e) => {
      const percent = parseFloat(e.target.value) / 100;
      if (audioPlayer.duration) {
        const targetTime = percent * audioPlayer.duration;
        seekToSeconds(targetTime);
      }
    });
  }

  // Quick Jump Timestamp Buttons
  document.querySelectorAll('.jump-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetSeconds = parseFloat(e.target.dataset.time);
      seekToSeconds(targetSeconds);
    });
  });

  // Archive Drawer Toggle
  if (toggleArchiveBtn && archiveDrawer) {
    toggleArchiveBtn.addEventListener('click', () => {
      archiveDrawer.classList.toggle('hidden');
    });
  }

  if (closeDrawerBtn && archiveDrawer) {
    closeDrawerBtn.addEventListener('click', () => {
      archiveDrawer.classList.add('hidden');
    });
  }

  if (closeErrorBtn) {
    closeErrorBtn.addEventListener('click', hideError);
  }

  // Category Filter Tabs
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      currentFilter = e.target.dataset.category;
      renderPlaylist(currentFilter);
    });
  });

  // Keyboard Shortcuts (Space, ArrowLeft, ArrowRight, M)
  document.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    if (e.code === 'Space') {
      e.preventDefault();
      if (isPlaying) pauseSong(); else playSong();
    } else if (e.code === 'ArrowRight') {
      e.preventDefault();
      nextSong();
    } else if (e.code === 'ArrowLeft') {
      e.preventDefault();
      previousSong();
    } else if (e.code === 'KeyM') {
      e.preventDefault();
      audioPlayer.muted = !audioPlayer.muted;
    }
  });
}
