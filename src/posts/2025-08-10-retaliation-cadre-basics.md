---
title: Retaliation Cadre Basics
date: 2025-08-10
tags: tau, tactics, 10th
excerpt: Core sequencing and pitfalls for the Retaliation Cadre.
cover: images/retaliation.jpg
---

# Opening salvo

> _“A perfect strike is one you planned three turns ago.”_ — Shas’el Sa’cea

This post is intentionally loaded with different **Markdown** features to show what your blog can render. It’s not a deep meta breakdown, just a playground to prove the pipeline works: images, tables, code, checklists, callouts, and even collapsible sections.

---

## At a glance

- **What:** T’au _Retaliation Cadre_ concepts
- **Why:** Demonstrate Markdown features in one place
- **You’ll see:**  
  **headings**, **bold/italic**, lists, images, tables, code blocks, quotes, task lists, horizontal rules, and `<details>` sections

---

## Formation diagram (image)

![Retaliation Cadre diagram](/images/tau-cadre-diagram.png)

_Pro tip: keep post assets under `/static/images/…` and reference them with absolute paths like `/images/…` so they work on every route._

---

## Key elements (table)

| Element                | Role                                  | Notes                                           |
|------------------------|---------------------------------------|-------------------------------------------------|
| Commander (Coldstar)   | Mobile rerolls & precision strikes    | Late-game objective flips                       |
| Crisis Team            | Primary damage platform                | Target locks & coordinated fire                 |
| Stealth/Pathfinders    | Setup + marker utility                 | Screens, early angles                           |
| Breachers/Strike Team  | Mid-board scoring & trades            | Devilfish taxi optional                         |
| Drones                 | Wounds you keep not losing            | Don’t feed them for free                        |

---

## Quickstart checklist (task list)

- [x] Pick a **primary target** for Turn 2 power spike
- [x] Deploy with **lanes** for Crisis jumps
- [ ] Keep **CP** for _Strike and Fade_
- [ ] Preserve a unit for **late scoring**
- [ ] Confirm **Overwatch** plans (reactive picks)

---

## Loadout “cheatsheet” (YAML code)

```yaml
retaliation_cadre:
  commander:
    suit: coldstar
    roles: [reroll_aura, objective_flip, cleanup]
  crisis_team:
    size: 3-5
    mix:
      - cyclic_ion_blaster: 2
      - plasma_rifle: 2
      - missile_pod: 1
    support_systems:
      - target_lock
      - velocity_tracker
  screens:
    - pathfinders
    - stealth_suits
  scoring:
    - strike_team
    - breachers
