# 📻 MEHFIL FM — Project Overview & Architecture Guide

Welcome to **MEHFIL FM**, a vintage 1990s-2000s Indian archival radio web application inspired by vintage Obscura radio broadcasts, traditional barbershop nostalgia, and classic Bollywood romance.

---

## 📌 1. Project Concept & Summary

**MEHFIL FM** is a full-featured, zero-dependency, pure frontend web application designed to deliver an authentic retro Indian listening room experience. The app features a **Dual Audio Engine Switcher**:

1. **💈 SALOON SONGS Mode (`डीलक्स सैलून`)**:
   - **Theme & Artwork:** Traditional 90s Indian Haircutters Saloon background (`background-saloon.jpg`).
   - **Music Source:** Tracklist imported directly from the viral Spotify Barber Shop Playlist ([`2AVjI8Z57bqMJVtU3V9X1Q`](https://open.spotify.com/playlist/2AVjI8Z57bqMJVtU3V9X1Q)).
   - **Aesthetic:** Warm golden terracotta red glassmorphism player capsule.

2. **💖 LOVE SONGS Mode (`महफ़िल-ए-इश्क़`)**:
   - **Theme & Artwork:** Nostalgic 90s Romantic Terrace Sunset artwork (`background-love.jpg`).
   - **Music Source:** **101 High-Quality `.ogg` Local Storage Songs** stored locally in `./songs/`.
   - **Features:** Native HTML5 Audio API, Instant Timestamp Seeking (`1:10`, `2:15`, `3:30`), Quick-Jump buttons, spinning vinyl animation, and interactive timeline.
   - **Aesthetic:** Deep rose burgundy & blush pink glassmorphism player capsule.

---

## 📁 2. File & Folder Structure

```text
mehfil-fm/
│
├── index.html                  # Main HTML5 Semantic Markup (Devanagari Hero, Top Nav, Glass Capsule Player, Drawer)
├── style.css                   # Custom CSS3 Design System (Glassmorphism, Devanagari Typography, Keyframe Animations)
├── script.js                   # Vanilla JS Audio Engine (State Management, Seek Math, Real-Time Clock, Event Listeners)
│
├── background-saloon.jpg       # Saloon Songs Background Artwork (Vintage Barbershop Scenery)
├── background-love.jpg         # Love Songs Background Artwork (Romantic 90s Sunset Scenery)
├── background.jpg              # Original Backup Artwork
│
├── songs/                      # 101 Local Storage (.ogg) Audio Files
│   ├── Aa Bhi Ja Sanam  - [Bangmp3.blogspot.com].ogg
│   ├── Aa Bhi Jaa.ogg
│   ├── Aa Ke Teri Baahon Mein.ogg
│   ├── Aadat (Movie Version)  - [Bangmp3.blogspot.com].ogg
│   ├── Aaj Dil Gustakh Hai @ SongsDL.com.ogg
│   ├── baahon ke darmiyaan.ogg
│   └── ... (101 exact .ogg files)
│
├── fetch_spotify.py            # Python Script: Downloads Spotify Embed HTML metadata for playlist 2AVjI8Z57bqMJVtU3V9X1Q
├── parse_tracks.py             # Python Script: Extracts track titles & artists into JSON
├── saloon_spotify_songs.json   # Extracted JSON Dataset of Spotify Barber Shop songs
│
├── PROJECT_EXPLANATION.md      # Full Project Documentation & ChatGPT Guide (This File)
└── README.md                   # Repository README
```

---

## 🛠️ 3. Technologies Used & Architecture

| Technology Layer | Tools / Libraries | Technical Purpose |
| :--- | :--- | :--- |
| **Markup** | **HTML5** | Semantic tags (`<header>`, `<main>`, `<section>`, `<aside>`, `<audio>`, `<input type="range">`), Accessibility labels. |
| **Styling & FX** | **Vanilla CSS3** | Glassmorphism (`backdrop-filter: blur(20px)`), CSS Grid/Flexbox layouts, `@keyframes rotateVinyl`, CSS Custom Variables (`:root`), Responsive `@media` queries. |
| **Logic & Engine** | **Vanilla JavaScript (ES6+)** | State management, HTML5 Audio API integration, Custom Seeking Math (`(clickX / width) * duration`), Event Delegation, Real-Time Clock (`setInterval`). |
| **Typography** | **Google Fonts** | `Yatra One` & `Rozha One` (Devanagari Hindi Hero Titles), `Playfair Display` (Serif Headings), `Outfit` (Sans Body), `Courier Prime` (Monospace Labels). |
| **Data Scraping** | **Python 3** | Standard libraries (`urllib.request`, `ssl`, `json`, `re`) for Spotify playlist oEmbed metadata parsing. |
| **Version Control** | **Git & GitHub** | Hosted at [`https://github.com/Novice47/Songs.git`](https://github.com/Novice47/Songs.git). |
| **Dev Server** | **Python HTTP Server** | Local server execution (`python -m http.server 5500`). |

---

## ⚡ 4. Key Technical Features & Highlights

1. **Instant Timestamp Seeking Math (`script.js`)**:
   - Allows users to click anywhere on the progress bar track to jump immediately to timestamps like `1:10`, `2:15`, or `3:30`.
   - Math calculation: `targetTime = (clickX / trackWidth) * audioPlayer.duration;`
   - Dedicated Quick-Jump buttons (`0:30`, `1:10`, `2:15`, `3:30`) call `seekToSeconds()`.

2. **Dynamic UI/UX Theme Switching (`setAppMode`)**:
   - Seamlessly toggles body class between `.mode-saloon` and `.mode-love`.
   - Transitions background images (`background-saloon.jpg` ⟷ `background-love.jpg`) with CSS `transition: background-image 0.6s ease`.
   - Updates Devanagari Hero typography (`डीलक्स सैलून` ⟷ `महफ़िल-ए-इश्क़`).
   - Switches tracklists and updates badge counts automatically.

3. **Spinning Vinyl Disc Animation**:
   - Synchronized CSS `@keyframes rotateVinyl` rotation that spins when audio plays (`audioPlayer.play()`) and stops when paused (`audioPlayer.pause()`).

4. **Live Real-Time Clock**:
   - Native JavaScript clock running via `startLiveClock()` updating top navbar time (e.g. `3:38 pm`) in 12-hour format with AM/PM indicators.

---

## 🤖 5. Ready-to-Use ChatGPT Prompt (Copy & Paste to Learn / Practice)

> **Copy the prompt below and paste it into ChatGPT if you want ChatGPT to explain any part of the project or conduct a mock interview with you!**

```text
PROMPT FOR CHATGPT:

"Hi ChatGPT! I have built a web application called MEHFIL FM (an archival 90s Indian music website inspired by vintage radio and barbershop nostalgia). Here are the technical details of my project:

- Tech Stack: HTML5, Vanilla CSS3 (Glassmorphism, Flexbox/Grid, CSS Keyframes), Vanilla JavaScript (ES6+, HTML5 Audio API, State Management, Custom Timeline Scrubbing Math), Python 3 (Spotify oEmbed Scraper).
- Key Features: 
  1. Dual Mode Switcher: 'Saloon Songs' (Spotify API import + Barber Shop theme) vs 'Love Songs' (101 Local Storage .ogg files + Romantic Terrace theme).
  2. Instant Timestamp Seeking: Clicking anywhere on the progress bar track jumps to precise times (e.g., 1:10 or 2:15).
  3. Devanagari Typography: 'डीलक्स सैलून' and 'महफ़िल-ए-इश्क़'.
  4. Real-Time Clock & Spinning Vinyl Disc Animations.
  5. Slide-Out Tracklist Drawer.

Please act as a Senior Frontend Engineering Interviewer. Ask me 5 technical questions about how my code works (e.g., how the HTML5 Audio API seeking math works, state management in Vanilla JS, glassmorphism performance, or responsive layout design) and guide me on how to answer them eloquently!"
```
