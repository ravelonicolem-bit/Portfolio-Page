@extends('layouts.app')

@section('title', 'Application Tracker')

@section('content')
<section class="page-header">
    <div class="container">
        <p class="kicker">Tracker</p>
        <h1 class="display-6 fw-bold">Job applications</h1>
        <p class="text-secondary col-lg-8 mb-0">A frontend preview of how applications can be monitored. Figures below are mock data only — not a record of real submissions.</p>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="row g-3 mb-4">
            <div class="col-6 col-lg">
                <div class="dash-card p-3">
                    <div class="icon-wrap mb-2"><i class="bi bi-send"></i></div>
                    <div class="text-secondary small">Applications</div>
                    <div class="fs-3 fw-bold">{{ $stats['applications'] }}</div>
                </div>
            </div>
            <div class="col-6 col-lg">
                <div class="dash-card p-3">
                    <div class="icon-wrap mb-2"><i class="bi bi-eye"></i></div>
                    <div class="text-secondary small">Under Review</div>
                    <div class="fs-3 fw-bold">{{ $stats['under_review'] }}</div>
                </div>
            </div>
            <div class="col-6 col-lg">
                <div class="dash-card p-3">
                    <div class="icon-wrap mb-2"><i class="bi bi-camera-video"></i></div>
                    <div class="text-secondary small">Interviews</div>
                    <div class="fs-3 fw-bold">{{ $stats['interviews'] }}</div>
                </div>
            </div>
            <div class="col-6 col-lg">
                <div class="dash-card p-3">
                    <div class="icon-wrap mb-2"><i class="bi bi-ui-checks"></i></div>
                    <div class="text-secondary small">Assessments</div>
                    <div class="fs-3 fw-bold">{{ $stats['assessments'] }}</div>
                </div>
            </div>
            <div class="col-6 col-lg">
                <div class="dash-card p-3">
                    <div class="icon-wrap mb-2"><i class="bi bi-award"></i></div>
                    <div class="text-secondary small">Offers</div>
                    <div class="fs-3 fw-bold">{{ $stats['offers'] }}</div>
                </div>
            </div>
        </div>

        <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-3">
            <h2 class="h5 fw-bold mb-0">Application list</h2>
            <div class="d-flex align-items-center gap-2">
                <label class="small text-secondary mb-0" for="status-filter">Status</label>
                <select id="status-filter" class="form-select form-select-sm" style="min-width: 180px;">
                    <option value="">All statuses</option>
                    <option>Applied</option>
                    <option>Under Review</option>
                    <option>Interview</option>
                    <option>Assessment</option>
                    <option>Final Interview</option>
                    <option>Offer</option>
                    <option>Rejected</option>
                </select>
            </div>
        </div>

        <div class="table-wrap table-responsive">
            <table class="table table-hover align-middle mb-0">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Position</th>
                        <th>Type</th>
                        <th>Location</th>
                        <th>Date Applied</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($applications as $application)
                        <tr data-application-row data-status="{{ $application['status'] }}">
                            <td class="fw-semibold">{{ $application['company'] }}</td>
                            <td>{{ $application['position'] }}</td>
                            <td>{{ $application['type'] }}</td>
                            <td>{{ $application['location'] }}</td>
                            <td>{{ \Illuminate\Support\Carbon::parse($application['date_applied'])->format('M j, Y') }}</td>
                            <td><x-status-badge :status="$application['status']" /></td>
                            <td>
                                <a class="btn btn-sm btn-outline-brand" href="{{ route('jobs.show', $application['slug']) }}">View</a>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</section>
@endsection
