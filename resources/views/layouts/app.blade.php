<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="{{ $profile['short_description'] }}">
    <title>@yield('title', $profile['headline']) — {{ $profile['display_name'] }}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&family=Source+Serif+4:wght@500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <x-navbar />

    <main>
        @yield('content')
    </main>

    <x-footer />

    <div class="project-lightbox" id="project-lightbox" hidden>
        <div class="project-lightbox-backdrop" data-lightbox-close></div>
        <div class="project-lightbox-dialog" role="dialog" aria-modal="true" aria-label="Project image preview">
            <button type="button" class="project-lightbox-close" data-lightbox-close aria-label="Close image preview">
                <i class="bi bi-x-lg"></i>
            </button>
            <img src="" alt="" id="project-lightbox-image">
            <p class="project-lightbox-caption" id="project-lightbox-caption"></p>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="{{ asset('js/app.js') }}"></script>
    @stack('scripts')
</body>
</html>
