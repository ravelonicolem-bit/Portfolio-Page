@extends('layouts.app')

@section('title', 'Projects')

@section('content')
<section class="page-header">
    <div class="container">
        <p class="kicker">Projects</p>
        <h1 class="display-6 fw-bold">Work samples and practice projects</h1>
        <p class="text-secondary col-lg-8 mb-0">This page separates real project work from clearly labeled practice samples so employers can quickly review relevant skills for data, admin, HR support, and virtual assistance roles.</p>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="d-flex flex-wrap gap-2 mb-5">
            <span class="text-secondary small align-self-center me-1">Jump to:</span>
            <a href="#practice-samples" class="btn btn-outline-brand btn-sm">Practice samples</a>
            @foreach ($sections as $section)
                <a href="#{{ $section['key'] }}" class="btn btn-outline-brand btn-sm">{{ $section['title'] }}</a>
            @endforeach
        </div>

        @foreach ($sections as $section)
            <div class="mb-5" id="{{ $section['key'] }}">
                <div class="d-flex align-items-center gap-3 mb-2">
                    <div class="icon-wrap"><i class="bi {{ $section['icon'] }}"></i></div>
                    <div>
                        <h2 class="h4 fw-bold mb-0">{{ $section['title'] }}</h2>
                        <p class="text-secondary small mb-0">{{ $section['description'] }}</p>
                    </div>
                </div>
                <div class="project-image-grid row g-4 mt-1">
                    @foreach ($section['projects'] as $project)
                        <div class="col-md-6 col-xl-4">
                            <x-project-card :project="$project" />
                        </div>
                    @endforeach
                </div>
            </div>
        @endforeach

        <div class="mb-2" id="practice-samples">
            <div class="d-flex align-items-center gap-3 mb-2">
                <div class="icon-wrap"><i class="bi bi-lightbulb"></i></div>
                <div>
                    <h2 class="h4 fw-bold mb-0">Practice samples</h2>
                    <p class="text-secondary small mb-0">These are practice/demo samples created to illustrate workflow skills. They are not client deliverables or employer projects.</p>
                </div>
            </div>
            <div class="project-image-grid row g-4 mt-1">
                @foreach ($sampleIdeas as $idea)
                    <div class="col-md-6 col-xl-4">
                        <x-project-card :project="$idea" />
                    </div>
                @endforeach
            </div>
        </div>

        <div class="cta-band mt-5">
            <div class="row align-items-center g-3">
                <div class="col-lg-8">
                    <h2 class="h4 fw-bold mb-2">Looking for accurate data and admin support?</h2>
                    <p class="mb-0">I can contribute to encoding, verification, records organization, recruitment tracking, and day-to-day office or virtual assistance tasks.</p>
                </div>
                <div class="col-lg-4 text-lg-end">
                    <a href="{{ route('contact') }}" class="btn btn-light">Contact Me</a>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection
