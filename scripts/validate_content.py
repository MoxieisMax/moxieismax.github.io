#!/usr/bin/env python3
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
EXCLUDE_DIRS = {"archive", ".git"}

md_files = [p for p in ROOT.rglob('*.md') if not any(part in EXCLUDE_DIRS for part in p.parts)]

fm_re = re.compile(r'^---\s*$(.*?)^---\s*$', re.S | re.M)
link_re = re.compile(r'\[[^\]]+\]\(([^)]+)\)')
img_re = re.compile(r'<img\s+[^>]*>', re.I)
alt_re = re.compile(r'alt\s*=\s*"([^"]*)"', re.I)

errors = []

def check_frontmatter(path, text):
    m = fm_re.search(text)
    if not m:
        errors.append(f"MISSING FRONTMATTER: {path}")
        return
    fm = m.group(1)
    if 'title:' not in fm:
        errors.append(f"MISSING title in frontmatter: {path}")
    if 'meta_description:' not in fm and 'meta-description:' not in fm and 'metaDescription' not in fm:
        errors.append(f"MISSING meta_description in frontmatter: {path}")

def check_links(path, text):
    for link in link_re.findall(text):
        if link.startswith('/'):
            # strip leading slash and possible trailing slash
            target = link.lstrip('/').rstrip('/')
            # try common extensions
            possible = [ROOT / (target + '.md'), ROOT / target, ROOT / (target + '/index.md')]
            if not any(p.exists() for p in possible):
                errors.append(f"BROKEN INTERNAL LINK: {link} in {path}")

def check_images(path, text):
    for img in img_re.findall(text):
        if 'alt=' not in img.lower():
            errors.append(f"IMAGE MISSING alt: {path} -> {img}")

print(f"Scanning {len(md_files)} markdown files...")
for p in md_files:
    try:
        t = p.read_text(encoding='utf-8')
    except Exception as e:
        errors.append(f"READ ERROR: {p}: {e}")
        continue
    check_frontmatter(p, t)
    check_links(p, t)
    check_images(p, t)

if errors:
    print("\nIssues found:")
    for e in errors:
        print(' -', e)
    sys.exit(2)
else:
    print('\nNo issues found')
    sys.exit(0)
