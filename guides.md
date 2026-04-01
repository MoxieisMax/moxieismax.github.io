---
layout: support
title: Guides
last_updated: 2026-02-18
meta_description: "Guides and how-tos for choosing and using solar panels"
---
{% for g in site.guides %}
- [{{ g.title }}]({{ g.url | relative_url }})
{% endfor %}
