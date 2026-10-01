@extends('layouts.app')

@section('title', 'Capabilities')

@section('content')
<section class="page-header">
    <div class="container">
        <p class="kicker">Capabilities</p>
        <h1 class="display-6 fw-bold">How I can contribute</h1>
        <p class="text-secondary col-lg-8 mb-0">Practical support areas aligned with Data Encoder, Administrative Assistant, Office Staff, HR/Recruitment Assistant, and Virtual Assistant roles.</p>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="row g-4">
            @foreach ($services as $service)
                <div class="col-md-6 col-xl-4">
                    <x-service-card :icon="$service['icon']" :title="$service['title']" :items="$service['items']" />
                </div>
            @endforeach
        </div>
        <div class="cta-band mt-5">
            <div class="row align-items-center g-3">
                <div class="col-lg-8">
                    <h2 class="h4 fw-bold mb-2">Ready to support structured office and data workflows</h2>
                    <p class="mb-0">I focus on accurate encoding, organized documentation, clear communication, and completing assigned tasks on time.</p>
                </div>
                <div class="col-lg-4 text-lg-end">
                    <a href="{{ route('contact') }}" class="btn btn-light fw-semibold">Discuss a role</a>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection
