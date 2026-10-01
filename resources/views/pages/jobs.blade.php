@extends('layouts.app')

@section('title', 'Sample Opportunities')

@section('content')
<section class="page-header">
    <div class="container">
        <p class="kicker">Opportunities</p>
        <h1 class="display-6 fw-bold">Sample part-time roles</h1>
        <p class="text-secondary col-lg-8 mb-0">These listings are mock data for demonstration. They show the types of part-time administrative and virtual assistance roles I am prepared to apply for.</p>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="row g-4">
            @foreach ($jobs as $job)
                <div class="col-md-6 col-xl-4">
                    <x-job-card :job="$job" />
                </div>
            @endforeach
        </div>
        <p class="placeholder-note mt-4 mb-0">Later, this page can load live job posts from a database without changing the Blade components.</p>
    </div>
</section>
@endsection
