@props(['icon', 'title', 'items' => []])

<article class="service-card">
    <div class="icon-wrap mb-3"><i class="bi {{ $icon }}"></i></div>
    <h3 class="h5 fw-bold mb-3">{{ $title }}</h3>
    <ul class="list-unstyled mb-0 text-secondary">
        @foreach ($items as $item)
            <li class="d-flex gap-2 mb-2">
                <i class="bi bi-check2 text-primary"></i>
                <span>{{ $item }}</span>
            </li>
        @endforeach
    </ul>
</article>
