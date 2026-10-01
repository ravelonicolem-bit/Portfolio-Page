@extends('layouts.app')

@section('title', 'Resume')

@section('content')
<section class="page-header">
    <div class="container d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3">
        <div>
            <p class="kicker">Resume</p>
            <h1 class="display-6 fw-bold">Resume preview</h1>
            <p class="text-secondary mb-0">A professional snapshot for employers. Download the PDF for the full document.</p>
        </div>
        <a class="btn btn-brand" href="{{ asset($profile['resume_path']) }}" target="_blank" rel="noopener" download>Download Resume</a>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="preview-panel resume-preview col-lg-10 mx-auto">
            <div class="panel-bar d-flex align-items-center justify-content-between">
                <div class="dot-row">
                    <span></span><span></span><span></span>
                </div>
                <span>Resume overview</span>
            </div>
            <div class="p-4 p-md-5">
                <div class="d-flex flex-column flex-md-row justify-content-between gap-3 border-bottom pb-3 mb-4">
                    <div>
                        <h2 class="h3 fw-bold mb-1">{{ $profile['full_name'] }}</h2>
                        <div class="text-secondary">{{ $profile['headline'] }}</div>
                        <div class="small text-secondary mt-1">{{ $profile['tagline'] }}</div>
                    </div>
                    <div class="small text-secondary">
                        <div>{{ $profile['email'] }}</div>
                        <div>{{ $profile['phone'] }}</div>
                        <div>{{ $profile['location'] }}</div>
                    </div>
                </div>

                <h3 class="h6 fw-bold text-uppercase text-secondary">Professional Summary</h3>
                <p class="text-secondary">{{ $profile['short_description'] }}</p>
                <p class="text-secondary">{{ $profile['objective'] }}</p>

                <h3 class="h6 fw-bold text-uppercase text-secondary mt-4">Professional Experience</h3>
                @foreach ($experiences as $experience)
                    <div class="mb-3">
                        <div class="fw-semibold">{{ $experience['title'] }}</div>
                        <div class="text-secondary">{{ $experience['organization'] }}</div>
                        <div class="small text-secondary mb-2">
                            @if (! empty($experience['assignment']))
                                {{ $experience['assignment'] }} ·
                            @endif
                            {{ $experience['dates'] }}
                        </div>
                        <ul class="text-secondary small mb-0">
                            @foreach ($experience['highlights'] as $highlight)
                                <li>{{ $highlight }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endforeach

                <h3 class="h6 fw-bold text-uppercase text-secondary mt-4">Target Roles</h3>
                <div class="mb-1">
                    @foreach ($profile['target_roles'] as $role)
                        <span class="skill-chip">{{ $role }}</span>
                    @endforeach
                </div>

                <h3 class="h6 fw-bold text-uppercase text-secondary mt-4">Education</h3>
                <p class="mb-0 fw-semibold">{{ $profile['education'] }}</p>

                <h3 class="h6 fw-bold text-uppercase text-secondary mt-4">Core Skills</h3>
                <div>
                    @foreach ($profile['core_skills'] as $skill)
                        <span class="skill-chip">{{ $skill }}</span>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</section>
@endsection
