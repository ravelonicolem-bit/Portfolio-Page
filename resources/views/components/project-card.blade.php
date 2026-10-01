@props(['project'])

@php
    $isPractice = ($project['type'] ?? null) === 'practice'
        || str_contains(strtolower($project['category'] ?? ''), 'practice')
        || str_contains(strtolower($project['summary'] ?? ''), 'practice sample');
@endphp

<article class="project-card project-card-media">
    @if (! empty($project['image']))
        <button
            type="button"
            class="project-card-image"
            data-lightbox-src="{{ asset($project['image']) }}"
            data-lightbox-alt="{{ $project['title'] }}"
            aria-label="View larger image: {{ $project['title'] }}"
        >
            <img
                src="{{ asset($project['image']) }}"
                alt="{{ $project['title'] }}"
                loading="lazy"
                decoding="async"
            >
            <span class="project-card-zoom" aria-hidden="true">
                <i class="bi bi-zoom-in"></i>
            </span>
        </button>
    @endif
    <div class="project-card-body">
        <div class="d-flex justify-content-between align-items-start gap-3 mb-3">
            <div class="icon-wrap"><i class="bi {{ $project['icon'] }}"></i></div>
            <div class="d-flex flex-wrap justify-content-end gap-1">
                @if ($isPractice)
                    <span class="skill-chip skill-chip-sample">Practice Sample</span>
                @endif
                <span class="skill-chip">{{ $project['category'] }}</span>
                @if (! empty($project['status']))
                    <span class="skill-chip">{{ $project['status'] }}</span>
                @endif
            </div>
        </div>
        <h3 class="h5 fw-bold mb-2">{{ $project['title'] }}</h3>
        <p class="text-secondary small mb-2">{{ $project['summary'] }}</p>
        <p class="project-meta mb-3"><strong>Outcome:</strong> {{ $project['outcome'] }}</p>
        <div class="mb-3">
            @foreach ($project['skills'] as $skill)
                <span class="skill-chip">{{ $skill }}</span>
            @endforeach
        </div>
        @if (! empty($project['url']))
            <a
                href="{{ $project['url'] }}"
                class="btn btn-outline-brand btn-sm"
                target="_blank"
                rel="noopener noreferrer"
            >
                View Project <i class="bi bi-box-arrow-up-right ms-1"></i>
            </a>
        @endif
    </div>
</article>
