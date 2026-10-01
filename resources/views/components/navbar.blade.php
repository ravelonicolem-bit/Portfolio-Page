@php
    $initials = 'NR';
@endphp

<nav class="navbar navbar-expand-lg sticky-top site-navbar">
    <div class="container">
        <a class="navbar-brand d-flex align-items-center gap-2 fw-bold text-dark" href="{{ route('home') }}">
            <span class="brand-mark">{{ $initials }}</span>
            <span>{{ $profile['display_name'] }}</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#primaryNav" aria-controls="primaryNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="primaryNav">
            <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-1">
                <li class="nav-item">
                    <a class="nav-link {{ request()->routeIs('home') ? 'active' : '' }}" href="{{ route('home') }}">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link {{ request()->routeIs('about') ? 'active' : '' }}" href="{{ route('about') }}">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link {{ request()->routeIs('skills') ? 'active' : '' }}" href="{{ route('skills') }}">Skills</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link {{ request()->routeIs('services') ? 'active' : '' }}" href="{{ route('services') }}">Capabilities</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link {{ request()->routeIs('projects') ? 'active' : '' }}" href="{{ route('projects') }}">Projects</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link {{ request()->routeIs('resume') ? 'active' : '' }}" href="{{ route('resume') }}">Resume</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link {{ request()->routeIs('contact') ? 'active' : '' }}" href="{{ route('contact') }}">Contact</a>
                </li>
                <li class="nav-item ms-lg-2 mt-2 mt-lg-0">
                    <a class="btn btn-brand" href="mailto:{{ $profile['email'] }}">Email Me</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
