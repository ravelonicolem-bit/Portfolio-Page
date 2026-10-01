@props(['status'])

@php
    $map = [
        'Applied' => 'status-applied',
        'Under Review' => 'status-under-review',
        'Interview' => 'status-interview',
        'Assessment' => 'status-assessment',
        'Final Interview' => 'status-final-interview',
        'Offer' => 'status-offer',
        'Rejected' => 'status-rejected',
    ];
    $class = $map[$status] ?? 'status-applied';
@endphp

<span {{ $attributes->merge(['class' => "status-badge {$class}"]) }}>{{ $status }}</span>
