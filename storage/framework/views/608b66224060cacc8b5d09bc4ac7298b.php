<?php $attributes ??= new \Illuminate\View\ComponentAttributeBag;

$__newAttributes = [];
$__propNames = \Illuminate\View\ComponentAttributeBag::extractPropNames((['job']));

foreach ($attributes->all() as $__key => $__value) {
    if (in_array($__key, $__propNames)) {
        $$__key = $$__key ?? $__value;
    } else {
        $__newAttributes[$__key] = $__value;
    }
}

$attributes = new \Illuminate\View\ComponentAttributeBag($__newAttributes);

unset($__propNames);
unset($__newAttributes);

foreach (array_filter((['job']), 'is_string', ARRAY_FILTER_USE_KEY) as $__key => $__value) {
    $$__key = $$__key ?? $__value;
}

$__defined_vars = get_defined_vars();

foreach ($attributes->all() as $__key => $__value) {
    if (array_key_exists($__key, $__defined_vars)) unset($$__key);
}

unset($__defined_vars, $__key, $__value); ?>

<article class="job-card">
    <div class="d-flex justify-content-between align-items-start gap-3 mb-3">
        <div class="min-w-0">
            <p class="kicker mb-1"><?php echo e($job['company']); ?></p>
            <h3 class="h5 fw-bold mb-0"><?php echo e($job['title']); ?></h3>
        </div>
        <span class="skill-chip"><?php echo e($job['type']); ?></span>
    </div>
    <p class="text-secondary small mb-3"><?php echo e($job['summary']); ?></p>
    <div class="d-flex flex-wrap gap-3 small text-secondary mb-3">
        <span><i class="bi bi-geo-alt me-1"></i><?php echo e($job['location']); ?></span>
        <span><i class="bi bi-laptop me-1"></i><?php echo e($job['setup']); ?></span>
    </div>
    <a href="<?php echo e(route('jobs.show', $job['slug'])); ?>" class="btn btn-outline-brand btn-sm">View details</a>
</article>
<?php /**PATH N:\Projects\va-portfolio\resources\views/components/job-card.blade.php ENDPATH**/ ?>