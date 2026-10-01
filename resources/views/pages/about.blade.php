@extends('layouts.app')

@section('title', 'About')

@section('content')
<section class="page-header">
    <div class="container">
        <p class="kicker">About Me</p>
        <h1 class="display-6 fw-bold">{{ $profile['full_name'] }}</h1>
        <p class="text-secondary col-lg-8 mb-2">{{ $profile['headline'] }}</p>
        <p class="col-lg-8 mb-0 fw-semibold">{{ $profile['tagline'] }}</p>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="row g-4 g-xl-5">
            <div class="col-lg-7">
                <h2 class="h4 fw-bold">Who I am</h2>
                <p class="text-secondary">I am an IT graduate from Cavite State University – Silang Campus with practical experience in ERP data encoding, administrative support, and records verification. I work carefully with large volumes of information, follow established procedures, and prioritize accuracy before submission.</p>
                <p class="text-secondary">Through my ERP encoding role and school internship, I developed transferable strengths in documentation, systems use, clear communication, and detail-oriented task completion — skills that apply well to data encoder, administrative assistant, office staff, HR/recruitment support, and virtual assistant roles.</p>
                <p class="text-secondary mb-0">{{ $profile['objective'] }}</p>

                <h2 class="h4 fw-bold mt-5" id="experience">Professional experience</h2>
                <div class="d-grid gap-3">
                    @foreach ($experiences as $experience)
                        <article class="info-card p-4">
                            <div class="d-flex flex-column flex-sm-row justify-content-between gap-2 mb-2">
                                <div>
                                    <div class="fw-bold">{{ $experience['title'] }}</div>
                                    <div class="text-secondary">{{ $experience['organization'] }}</div>
                                    @if (! empty($experience['assignment']))
                                        <div class="small text-secondary">{{ $experience['assignment'] }}</div>
                                    @endif
                                </div>
                                <div class="small text-secondary text-sm-end">{{ $experience['dates'] }}</div>
                            </div>
                            <ul class="small text-secondary mb-0 ps-3">
                                @foreach ($experience['highlights'] as $highlight)
                                    <li class="mb-1">{{ $highlight }}</li>
                                @endforeach
                            </ul>
                        </article>
                    @endforeach
                </div>

                <h2 class="h4 fw-bold mt-5">My IT background</h2>
                <p class="text-secondary">My Information Technology background is an advantage in administrative and data-related work. Modern offices rely on computers, spreadsheets, databases, digital documents, and online systems. My education and internship experience help me work comfortably with those tools while handling administrative responsibilities.</p>
                <p class="text-secondary mb-0">I can support work involving data, documents, spreadsheets, digital records, office systems, and basic technical support — where administrative and technical responsibilities often overlap.</p>

                <h2 class="h4 fw-bold mt-5">My work process</h2>
                <div class="row g-3">
                    @foreach ([
                        ['01', 'Understand', 'Review the task, instructions, required information, and expected output.'],
                        ['02', 'Organize', 'Arrange the information and prepare the appropriate files, spreadsheets, or documents.'],
                        ['03', 'Process', 'Complete the assigned data entry, documentation, or administrative task.'],
                        ['04', 'Verify', 'Check for missing information, inconsistencies, duplicates, or errors.'],
                        ['05', 'Finalize', 'Organize completed files for submission, reporting, or future retrieval.'],
                    ] as $item)
                        <div class="col-md-6 col-xl-4">
                            <div class="info-card p-3 h-100">
                                <div class="small text-secondary mb-1">{{ $item[0] }}</div>
                                <div class="fw-semibold mb-1">{{ $item[1] }}</div>
                                <div class="small text-secondary">{{ $item[2] }}</div>
                            </div>
                        </div>
                    @endforeach
                </div>
                <p class="text-secondary small mt-3 mb-0">Goal: keep information accurate, organized, and easy to manage.</p>
            </div>

            <div class="col-lg-5">
                <div class="about-sidebar d-grid gap-4">
                <aside class="info-card p-4">
                    <h2 class="h5 fw-bold mb-3">Profile details</h2>
                    <div class="d-grid gap-3 small">
                        <div>
                            <div class="text-secondary">Name</div>
                            <div class="fw-semibold">{{ $profile['full_name'] }}</div>
                        </div>
                        <div>
                            <div class="text-secondary">Education</div>
                            <div class="fw-semibold">{{ $profile['education'] }}</div>
                        </div>
                        <div>
                            <div class="text-secondary">Recent experience</div>
                            <div class="fw-semibold">ERP Data Encoder | System Accounting Staff</div>
                            <div class="text-secondary">Tomodachi Global Resources Inc.</div>
                        </div>
                        <div>
                            <div class="text-secondary">Availability</div>
                            <div class="fw-semibold">{{ $profile['availability_status'] }}</div>
                        </div>
                        <div>
                            <div class="text-secondary">Start date</div>
                            <div class="fw-semibold">{{ $profile['start_date'] }}</div>
                        </div>
                        <div>
                            <div class="text-secondary">Location</div>
                            <div class="fw-semibold">{{ $profile['location'] }}</div>
                        </div>
                    </div>
                </aside>

                <aside class="info-card p-4">
                    <h2 class="h5 fw-bold mb-3">Roles I’m targeting</h2>
                    <div class="mb-3">
                        @foreach ($profile['target_roles'] as $role)
                            <span class="skill-chip">{{ $role }}</span>
                        @endforeach
                    </div>
                    <p class="text-secondary small mb-3">I bring ERP encoding experience, administrative support skills, and an IT foundation — and I am ready to learn your systems and procedures.</p>
                    <div class="d-flex flex-wrap gap-2">
                        <a href="mailto:{{ $profile['email'] }}" class="btn btn-brand">Email Me</a>
                        <a href="{{ route('projects') }}" class="btn btn-outline-brand">View Projects</a>
                    </div>
                </aside>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection
