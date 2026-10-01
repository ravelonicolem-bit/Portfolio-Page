@extends('layouts.app')

@section('title', $job['title'])

@section('content')
<section class="page-header">
    <div class="container">
        <a href="{{ route('jobs.index') }}" class="small text-decoration-none"><i class="bi bi-arrow-left me-1"></i>All sample roles</a>
        <p class="kicker mt-3">{{ $job['company'] }}</p>
        <h1 class="display-6 fw-bold">{{ $job['title'] }}</h1>
        <div class="d-flex flex-wrap gap-3 text-secondary">
            <span><i class="bi bi-geo-alt me-1"></i>{{ $job['location'] }}</span>
            <span><i class="bi bi-laptop me-1"></i>{{ $job['setup'] }}</span>
            <span><i class="bi bi-briefcase me-1"></i>{{ $job['type'] }}</span>
        </div>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="row g-4">
            <div class="col-lg-8">
                <div class="info-card p-4 mb-4">
                    <h2 class="h5 fw-bold">Description</h2>
                    <p class="text-secondary mb-0">{{ $job['description'] }}</p>
                </div>
                <div class="info-card p-4 mb-4">
                    <h2 class="h5 fw-bold">Responsibilities</h2>
                    <ul class="text-secondary mb-0">
                        @foreach ($job['responsibilities'] as $item)
                            <li>{{ $item }}</li>
                        @endforeach
                    </ul>
                </div>
                <div class="info-card p-4 mb-4">
                    <h2 class="h5 fw-bold">Qualifications</h2>
                    <ul class="text-secondary mb-0">
                        @foreach ($job['qualifications'] as $item)
                            <li>{{ $item }}</li>
                        @endforeach
                    </ul>
                </div>
                <div class="info-card p-4">
                    <h2 class="h5 fw-bold">Required skills</h2>
                    <div>
                        @foreach ($job['skills'] as $skill)
                            <span class="skill-chip">{{ $skill }}</span>
                        @endforeach
                    </div>
                </div>

                <div class="info-card p-4 mt-4" id="apply">
                    <h2 class="h5 fw-bold mb-1">Apply for this Position</h2>
                    <p class="text-secondary small">This form is frontend-only. Submission is simulated in the browser and is not sent to a server.</p>

                    <div id="application-success" class="alert alert-success d-none" role="alert">
                        <div class="fw-bold">Application submitted successfully.</div>
                        <div class="small mb-0">No data was stored. Connect this form to Laravel later for real applications, file uploads, and email notifications.</div>
                    </div>

                    <form id="application-form" class="needs-validation" novalidate>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label class="form-label" for="full_name">Full Name</label>
                                <input class="form-control" id="full_name" name="full_name" type="text" value="{{ $profile['full_name'] }}" required minlength="3">
                                <div class="invalid-feedback">Please enter your full name.</div>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label" for="email">Email Address</label>
                                <input class="form-control" id="email" name="email" type="email" value="{{ $profile['email'] }}" required>
                                <div class="invalid-feedback">Please enter a valid email address.</div>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label" for="phone">Phone Number</label>
                                <input class="form-control" id="phone" name="phone" type="tel" value="{{ $profile['phone'] }}" required minlength="7">
                                <div class="invalid-feedback">Please enter a phone number.</div>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label" for="position">Position</label>
                                <input class="form-control" id="position" name="position" type="text" value="{{ $job['title'] }}" required>
                                <div class="invalid-feedback">Please specify the position.</div>
                            </div>
                            <div class="col-12">
                                <label class="form-label" for="resume">Resume</label>
                                <input class="form-control" id="resume" name="resume" type="file" accept=".pdf,.doc,.docx,application/pdf" required>
                                <div class="form-text">PDF or Word document, up to 5 MB. Placeholder path for stored resume: <code>{{ $profile['resume_path'] }}</code></div>
                                <div class="invalid-feedback">Please attach your resume.</div>
                            </div>
                            <div class="col-12">
                                <label class="form-label" for="cover_letter">Cover Letter</label>
                                <textarea class="form-control" id="cover_letter" name="cover_letter" rows="4" required minlength="40">I am applying for the {{ $job['title'] }} role at {{ $job['company'] }}. I can support part-time administrative, data entry, and coordination tasks with attention to detail, confidentiality, and clear communication.</textarea>
                                <div class="invalid-feedback">Please include a short cover letter (at least 40 characters).</div>
                            </div>
                            <div class="col-12">
                                <label class="form-label" for="experience">Relevant Experience</label>
                                <textarea class="form-control" id="experience" name="experience" rows="3" required minlength="20">{{ $profile['experience'] }}</textarea>
                                <div class="invalid-feedback">Please describe relevant experience.</div>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label" for="skills">Skills</label>
                                <input class="form-control" id="skills" name="skills" type="text" required value="Data entry, document management, Microsoft Office, Google Workspace, scheduling">
                                <div class="invalid-feedback">Please list relevant skills.</div>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label" for="availability">Availability</label>
                                <input class="form-control" id="availability" name="availability" type="text" required value="{{ $profile['hours_per_week'] }}">
                                <div class="invalid-feedback">Please share your availability.</div>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label" for="work_setup">Preferred Work Setup</label>
                                <select class="form-select" id="work_setup" name="work_setup" required>
                                    <option value="">Select one</option>
                                    <option value="remote" @selected($job['setup'] === 'Remote')>Remote</option>
                                    <option value="hybrid">Hybrid</option>
                                    <option value="onsite">On-site when required</option>
                                </select>
                                <div class="invalid-feedback">Please choose a preferred work setup.</div>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label" for="expected_rate">Expected Rate</label>
                                <input class="form-control" id="expected_rate" name="expected_rate" type="text" required value="{{ $profile['expected_rate'] }}">
                                <div class="invalid-feedback">Please enter an expected rate or “negotiable”.</div>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-brand" type="submit">Apply for this Position</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="info-card p-4 mb-4">
                    <h2 class="h6 fw-bold text-uppercase text-secondary">Role snapshot</h2>
                    <dl class="mb-0">
                        <dt class="small text-secondary">Job title</dt>
                        <dd>{{ $job['title'] }}</dd>
                        <dt class="small text-secondary">Company</dt>
                        <dd>{{ $job['company'] }}</dd>
                        <dt class="small text-secondary">Location</dt>
                        <dd>{{ $job['location'] }}</dd>
                        <dt class="small text-secondary">Work setup</dt>
                        <dd>{{ $job['setup'] }}</dd>
                        <dt class="small text-secondary">Employment type</dt>
                        <dd>{{ $job['type'] }}</dd>
                        <dt class="small text-secondary">Salary / rate</dt>
                        <dd>{{ $job['salary'] }}</dd>
                        <dt class="small text-secondary">Schedule</dt>
                        <dd>{{ $job['schedule'] }}</dd>
                        <dt class="small text-secondary">Application deadline</dt>
                        <dd class="mb-0">{{ \Illuminate\Support\Carbon::parse($job['deadline'])->format('F j, Y') }}</dd>
                    </dl>
                </div>
                <a href="#apply" class="btn btn-brand w-100 mb-3">Apply for this Position</a>
                <a href="{{ route('resume') }}" class="btn btn-outline-brand w-100">Review resume first</a>
            </div>
        </div>
    </div>
</section>
@endsection
