---
layout: support
title: Best Picks
last_updated: 2026-02-18
meta_description: "Best product picks and money guides for panels and solar"
---
{% for p in site.money %}
- [{{ p.title }}]({{ p.url | relative_url }})
{% endfor %}
