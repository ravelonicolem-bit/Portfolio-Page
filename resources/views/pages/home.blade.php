@extends('layouts.app')

@section('title', 'Home')

@section('content')
<section class="hero">
    <div class="container">
        <div class="row align-items-center g-4 g-lg-5">
            <div class="col-lg-7">
                <span class="availability-badge mb-3">
                    <span class="dot"></span>
                    {{ $profile['availability_badge'] }}
                </span>
                <p class="kicker mt-3">Professional portfolio</p>
                <h1 class="display-5 mt-2">{{ $profile['full_name'] }}</h1>
                <p class="lead mt-2 mb-2">{{ $profile['headline'] }}</p>
                <p class="text-secondary col-xl-11 mb-0">{{ $profile['short_description'] }}</p>
                <p class="text-secondary col-xl-11 mt-3 mb-0">{{ $profile['objective'] }}</p>
                <div class="d-flex flex-wrap gap-2 mt-4">
                    <a href="mailto:{{ $profile['email'] }}" class="btn btn-brand">Email Me</a>
                    <a href="{{ asset($profile['resume_path']) }}" class="btn btn-outline-brand" target="_blank" rel="noopener">Download Resume</a>
                    <a href="{{ route('about') }}" class="btn btn-outline-brand">View Experience</a>
                </div>
            </div>
            <div class="col-lg-5">
                <div class="info-card p-4">
                    <h2 class="h6 fw-bold text-uppercase text-secondary mb-3">At a glance</h2>
                    <div class="d-grid gap-3 small">
                        <div>
                            <div class="text-secondary">Education</div>
                            <div class="fw-semibold">{{ $profile['education_short'] }}</div>
                        </div>
                        <div>
                            <div class="text-secondary">Recent role</div>
                            <div class="fw-semibold">ERP Data Encoder | System Accounting Staff</div>
                            <div class="text-secondary">Tomodachi Global Resources Inc.</div>
                        </div>
                        <div>
                            <div class="text-secondary">Location</div>
                            <div class="fw-semibold">{{ $profile['location'] }}</div>
                        </div>
                        <div>
                            <div class="text-secondary">Contact</div>
                            <div class="fw-semibold"><a href="mailto:{{ $profile['email'] }}">{{ $profile['email'] }}</a></div>
                            <div class="text-secondary">{{ $profile['phone'] }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row g-3 mt-4">
            @foreach ([
                ['bi-keyboard', 'Data Encoding', 'ERP and spreadsheet encoding with careful verification'],
                ['bi-folder2-open', 'Records Management', 'Organized documentation and structured filing'],
                ['bi-people', 'HR / Recruitment Support', 'Applicant tracking and confidential file handling'],
                ['bi-laptop', 'Virtual Assistance', 'Remote admin support, scheduling, and task follow-through'],
            ] as $item)
                <div class="col-md-6 col-xl-3">
                    <div class="stat-card d-flex gap-3 align-items-start">
                        <div class="icon-wrap"><i class="bi {{ $item[0] }}"></i></div>
                        <div>
                            <div class="fw-bold">{{ $item[1] }}</div>
                            <div class="small text-secondary">{{ $item[2] }}</div>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="row align-items-end mb-4">
            <div class="col-lg-8">
                <p class="kicker">Experience highlight</p>
                <h2 class="section-title mb-0">Recent professional experience</h2>
            </div>
            <div class="col-lg-4 text-lg-end">
                <a href="{{ route('about') }}#experience" class="btn btn-outline-brand">Full experience</a>
            </div>
        </div>
        <div class="row g-4">
            @foreach (array_slice($experiences, 0, 2) as $experience)
                <div class="col-md-6">
                    <article class="info-card p-4 h-100">
                        <div class="fw-bold">{{ $experience['title'] }}</div>
                        <div class="text-secondary">{{ $experience['organization'] }}</div>
                        <div class="small text-secondary mb-3">{{ $experience['dates'] }}</div>
                        <ul class="small text-secondary mb-0 ps-3">
                            @foreach (array_slice($experience['highlights'], 0, 3) as $highlight)
                                <li class="mb-1">{{ $highlight }}</li>
                            @endforeach
                        </ul>
                    </article>
                </div>
            @endforeach
        </div>
    </div>
</section>

<section class="section section-muted" id="availability">
    <div class="container">
        <p class="kicker">Roles I’m targeting</p>
        <h2 class="section-title mb-2">{{ $profile['availability_status'] }}</h2>
        <p class="text-secondary mb-4">I am prepared to support structured office, data, and recruitment-admin workflows while learning your tools and processes.</p>
        <div class="mb-4">
            @foreach ($profile['target_roles'] as $role)
                <span class="skill-chip">{{ $role }}</span>
            @endforeach
        </div>
        <div class="row g-4">
            <div class="col-md-4">
                <div class="info-card p-4 h-100">
                    <h3 class="h6 fw-bold">Core skills</h3>
                    <div>
                        @foreach ($profile['core_skills'] as $skill)
                            <span class="skill-chip">{{ $skill }}</span>
                        @endforeach
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="info-card p-4 h-100">
                    <h3 class="h6 fw-bold">Work setup</h3>
                    <ul class="mb-0 text-secondary">
                        <li>On-site</li>
                        <li>Hybrid</li>
                        <li>Remote / virtual assistance</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-4">
                <div class="info-card p-4 h-100">
                    <h3 class="h6 fw-bold">Availability</h3>
                    <p class="mb-1 text-secondary">{{ $profile['start_date'] }}</p>
                    <p class="mb-1 text-secondary">{{ $profile['hours_per_week'] }}</p>
                    <p class="mb-0 text-secondary">Timezone: {{ $profile['timezone'] }}</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="d-flex justify-content-between align-items-end mb-4">
            <div>
                <p class="kicker">Capabilities</p>
                <h2 class="section-title mb-0">How I can support your team</h2>
            </div>
            <a href="{{ route('services') }}" class="btn btn-outline-brand d-none d-md-inline-flex">All capabilities</a>
        </div>
        <div class="row g-4">
            @foreach (array_slice($services, 0, 6) as $service)
                <div class="col-md-6 col-xl-4">
                    <x-service-card :icon="$service['icon']" :title="$service['title']" :items="$service['items']" />
                </div>
            @endforeach
        </div>
    </div>
</section>

<section class="section section-muted" id="projects">
    <div class="container">
        <div class="d-flex justify-content-between align-items-end mb-4">
            <div>
                <p class="kicker">Selected work</p>
                <h2 class="section-title mb-0">Projects and practice samples</h2>
            </div>
            <a href="{{ route('projects') }}" class="btn btn-outline-brand d-none d-md-inline-flex">All projects</a>
        </div>
        <p class="text-secondary col-lg-8 mb-4">Featured items from Excel/admin samples, website work, and design. Practice samples are clearly labeled on the Projects page.</p>
        <div class="row g-4">
            @foreach ($projects as $project)
                <div class="col-md-4">
                    <div class="small text-secondary mb-2 d-flex align-items-center gap-2">
                        <i class="bi {{ $project['section_icon'] }}"></i>
                        <span class="fw-semibold">{{ $project['section_title'] }}</span>
                    </div>
                    <x-project-card :project="$project" />
                </div>
            @endforeach
        </div>
    </div>
</section>

<section class="section pt-0">
    <div class="container">
        <div class="cta-band d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3">
            <div>
                <p class="mb-1 text-white-50 small">Next step</p>
                <h2 class="h3 fw-bold mb-2">Open to data encoding and administrative roles</h2>
                <p class="mb-0">If you need accurate encoding, organized records, and dependable office or virtual support, I would welcome the chance to discuss how I can contribute.</p>
            </div>
            <div class="d-flex flex-wrap gap-2">
                <a class="btn btn-light fw-semibold" href="mailto:{{ $profile['email'] }}">Email Me</a>
                <a class="btn btn-outline-light fw-semibold" href="{{ route('resume') }}">View Resume</a>
            </div>
        </div>
    </div>
</section>
@endsection
