@props(['icon', 'title', 'skills' => []])

<article class="skill-card">
    <div class="d-flex align-items-center gap-3 mb-3">
        <div class="icon-wrap"><i class="bi {{ $icon }}"></i></div>
        <h3 class="h5 fw-bold mb-0">{{ $title }}</h3>
    </div>
    <div>
        @foreach ($skills as $skill)
            <span class="skill-chip">{{ $skill }}</span>
        @endforeach
    </div>
</article>
