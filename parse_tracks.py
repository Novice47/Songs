import json

with open('spotify_script_0.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Extract track list from Spotify entity state
entity = data.get('props', {}).get('pageProps', {}).get('state', {}).get('data', {}).get('entity', {})

trackList = []
track_items = entity.get('trackList', [])
if not track_items:
    # Try finding in tracks or items
    track_items = entity.get('tracks', {}).get('items', [])

print(f"Playlist Name: {entity.get('name')}")
print(f"Total trackList items: {len(track_items)}")

spotify_songs = []
for item in track_items:
    title = item.get('title') or item.get('name') or ''
    subtitle = item.get('subtitle') or item.get('artists', [{}])[0].get('name') or ''
    audio_file = item.get('audio', {}).get('url') or item.get('preview_url') or ''
    uri = item.get('uri') or ''
    duration = item.get('duration') or 0
    
    if title:
        spotify_songs.append({
            'title': title,
            'artist': subtitle,
            'file': audio_file,
            'uri': uri,
            'duration': duration,
            'category': 'SALOON',
            'era': '2010s'
        })

print(f"Extracted {len(spotify_songs)} tracks:")
for s in spotify_songs[:10]:
    print("-", s['title'], "by", s['artist'], "| Preview:", s['file'][:50] if s['file'] else "None")

with open('saloon_spotify_songs.json', 'w', encoding='utf-8') as sf:
    json.dump(spotify_songs, sf, indent=2)

print("Saved saloon_spotify_songs.json successfully!")
