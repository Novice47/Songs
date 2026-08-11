import urllib.request
import json
import ssl
import re

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = 'https://open.spotify.com/embed/playlist/2AVjI8Z57bqMJVtU3V9X1Q'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})

try:
    with urllib.request.urlopen(req, context=ctx) as resp:
        html = resp.read().decode('utf-8')
        with open('spotify_page.html', 'w', encoding='utf-8') as f:
            f.write(html)
        print("Downloaded spotify_page.html, size:", len(html))

        # Look for JSON scripts
        scripts = re.findall(r'<script[^>]*type="application/json"[^>]*>(.*?)</script>', html, re.DOTALL)
        print("Found json scripts count:", len(scripts))
        for i, s in enumerate(scripts):
            if "track" in s.lower() or "entity" in s.lower():
                print(f"Script {i} sample:", s[:200])
                try:
                    data = json.loads(s)
                    with open(f'spotify_script_{i}.json', 'w', encoding='utf-8') as sf:
                        json.dump(data, sf, indent=2)
                except Exception as ex:
                    print("JSON parse error:", ex)
except Exception as e:
    print('Error:', e)
