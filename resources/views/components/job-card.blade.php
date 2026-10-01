@props(['job'])

<article class="job-card">
    <div class="d-flex justify-content-between align-items-start gap-3 mb-3">
        <div class="min-w-0">
            <p class="kicker mb-1">{{ $job['company'] }}</p>
            <h3 class="h5 fw-bold mb-0">{{ $job['title'] }}</h3>
        </div>
        <span class="skill-chip">{{ $job['type'] }}</span>
    </div>
    <p class="text-secondary small mb-3">{{ $job['summary'] }}</p>
    <div class="d-flex flex-wrap gap-3 small text-secondary mb-3">
        <span><i class="bi bi-geo-alt me-1"></i>{{ $job['location'] }}</span>
        <span><i class="bi bi-laptop me-1"></i>{{ $job['setup'] }}</span>
    </div>
    <a href="{{ route('jobs.show', $job['slug']) }}" class="btn btn-outline-brand btn-sm">View details</a>
</article>
