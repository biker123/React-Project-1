import React from 'react';
import '../Main/Main.css';

export default function Main() {
  return (
    <div class="content">
    <div class="section-title">
        <h2>Recently Added NFTs</h2>
        <div class="filters">
        <a class="pill" href="#">All</a>
        <a class="pill" href="#">Abstract</a>
        <a class="pill" href="#">Space</a>
        </div>
    </div>

    <section class="grid" aria-label="Card grid">
        {/* <!-- Card 1 --> */}
        <article class="card">
        <div class="card-img">
            <img src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop" alt="Abstract nebula"/>
        </div>
        <div class="card-body">
            <h3 class="card-title">Universe</h3>
            <div class="card-meta">Recommended • Multi-color</div>
            <a class="card-link" href="#">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 12l18-9-9 18-2-7-7-2z"/></svg>
            View Details
            </a>
        </div>
        </article>
        {/* <!-- Card 2 --> */}
        <article class="card">
        <div class="card-img">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop" alt="Purple galaxy"/>
        </div>
        <div class="card-body">
            <h3 class="card-title">Dying Star</h3>
            <div class="card-meta">New • Space</div>
            <a class="card-link" href="#">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 12l18-9-9 18-2-7-7-2z"/></svg>
            Explore
            </a>
        </div>
        </article>

        {/* <!-- Card 3 --> */}
        <article class="card">
        <div class="card-img">
            <img src="https://images.unsplash.com/photo-1520975693419-6349b3f69a2d?q=80&w=1200&auto=format&fit=crop" alt="Color clouds"/>
        </div>
        <div class="card-body">
            <h3 class="card-title">Far Far Away</h3>
            <div class="card-meta">Trending • Vibrant</div>
            <a class="card-link" href="#">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 12l18-9-9 18-2-7-7-2z"/></svg>
            Bid Now
            </a>
        </div>
        </article>
        {/* <!-- Card 4 --> */}
        <article class="card">
        <div class="card-img">
            <img src="https://images.unsplash.com/photo-1520975961574-e6f39a55f3c2?q=80&w=1200&auto=format&fit=crop" alt="Crimson abstract"/>
        </div>
        <div class="card-body">
            <h3 class="card-title">Photon Rush</h3>
            <div class="card-meta">Premium • Limited</div>
            <a class="card-link" href="#">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 12l18-9-9 18-2-7-7-2z"/></svg>
            Collect
            </a>
        </div>
        </article>
        {/* <!-- Card 5 --> */}
        <article class="card">
        <div class="card-img">
            <img src="https://images.unsplash.com/photo-1520975993440-637002bc1f4e?q=80&w=1200&auto=format&fit=crop" alt="Blue fractal"/>
        </div>
        <div class="card-body">
            <h3 class="card-title">Blue Drift</h3>
            <div class="card-meta">Editor's pick</div>
            <a class="card-link" href="#">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 12l18-9-9 18-2-7-7-2z"/></svg>
            Details
            </a>
        </div>
        </article>
        {/* <!-- Card 6 --> */}
        <article class="card">
        <div class="card-img">
            <img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop" alt="Aurora"/>
        </div>
        <div class="card-body">
            <h3 class="card-title">Aurora Gate</h3>
            <div class="card-meta">Featured</div>
            <a class="card-link" href="#">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 12l18-9-9 18-2-7-7-2z"/></svg>
            Visit
            </a>
        </div>
        </article>
        {/* <!-- Card 7 --> */}
        <article class="card">
        <div class="card-img">
            <img src="https://images.unsplash.com/photo-1520975732164-7f9b1f1bc3a3?q=80&w=1200&auto=format&fit=crop" alt="Magenta waves"/>
        </div>
        <div class="card-body">
            <h3 class="card-title">Magenta Waves</h3>
            <div class="card-meta">Hot • Trending</div>
            <a class="card-link" href="#">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 12l18-9-9 18-2-7-7-2z"/></svg>
            View
            </a>
        </div>
        </article>
        {/* <!-- Card 8 --> */}
        <article class="card">
        <div class="card-img">
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop" alt="Geometric shapes"/>
        </div>
        <div class="card-body">
            <h3 class="card-title">Geometry Set</h3>
            <div class="card-meta">Minimal • Clean</div>
            <a class="card-link" href="#">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 12l18-9-9 18-2-7-7-2z"/></svg>
            Open
            </a>
        </div>
        </article>
    </section>
    </div>
  )
}
