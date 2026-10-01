@extends('layouts.app')

@section('title', 'Skills')

@section('content')
<section class="page-header">
    <div class="container">
        <p class="kicker">Skills</p>
        <h1 class="display-6 fw-bold">Skills for data, office, and support roles</h1>
        <p class="text-secondary col-lg-8 mb-0">Grouped for quick scanning by recruiters hiring for encoding, administrative, HR support, and virtual assistance positions.</p>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="info-card p-4 mb-4">
            <div class="small text-secondary mb-2">Core competencies</div>
            @foreach ($profile['core_skills'] as $skill)
                <span class="skill-chip">{{ $skill }}</span>
            @endforeach
        </div>
        <div class="row g-4">
            @foreach ($skillGroups as $group)
                <div class="col-md-6">
                    <x-skill-card :icon="$group['icon']" :title="$group['title']" :skills="$group['skills']" />
                </div>
            @endforeach
        </div>
    </div>
</section>
@endsection
