import json

with open('saloon_spotify_songs.json', 'r', encoding='utf-8') as f:
    spotify_data = json.load(f)

# Clean string encoding issues in titles & artists
for s in spotify_data:
    s['title'] = s['title'].replace('', ' & ').strip()
    s['artist'] = s['artist'].replace('', ' & ').strip()

# Format as JavaScript array string
spotify_json_str = json.dumps(spotify_data, indent=4, ensure_ascii=False)

print("Cleaned spotify data. Total items:", len(spotify_data))
