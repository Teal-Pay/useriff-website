---
title: "Cross-border creator payouts without the wire-fee bleed"
excerpt: "International splits used to mean a 6% haircut and a three-day wait. Here is how the modern stack handles it instead."
publishedAt: "2026-04-28"
author: "The Riff Team"
coverImage: "/blog/2026-04-28-cross-border-creator-payouts/cover.jpg"
coverAlt: "A world map with payment routes drawn between continents"
tags: ["Global", "Payouts"]
readingTime: "6 min read"
status: "published"
---

If you're an agency with creators in more than three countries, you've already discovered that international wires are death by a thousand cuts. SWIFT fees, intermediary bank fees, exchange-rate spreads, and a two-to-five day settlement window every single time. For a $400 creator payout, the friction is brutal.

The good news: in 2026, you don't have to use wires.

## The modern payout stack

The current standard is a combination of local payout rails (SEPA in the EU, Faster Payments in the UK, PIX in Brazil, UPI in India) routed through a single provider that abstracts the rail selection away from you.

Riff sits on top of this layer. You hit "pay" once. We pick the cheapest, fastest rail for that creator's country and currency.

## What it costs

A typical Riff cross-border payout costs the creator nothing and the agency a flat per-transaction fee, regardless of country. That replaces the old model where a $400 payout to the Philippines could lose $25 in fees and arrive three days later in pesos at a worse rate than the day you sent it.

## The takeaway

International isn't a tax you have to pay anymore. If your roster is going global, the payout layer should be invisible — your creators get paid in their currency, on their local rail, on the same day every domestic creator does.
