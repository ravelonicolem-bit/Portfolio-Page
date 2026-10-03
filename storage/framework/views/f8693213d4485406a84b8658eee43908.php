<?php $attributes ??= new \Illuminate\View\ComponentAttributeBag;

$__newAttributes = [];
$__propNames = \Illuminate\View\ComponentAttributeBag::extractPropNames((['project']));

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

foreach (array_filter((['project']), 'is_string', ARRAY_FILTER_USE_KEY) as $__key => $__value) {
    $$__key = $$__key ?? $__value;
}

$__defined_vars = get_defined_vars();

foreach ($attributes->all() as $__key => $__value) {
    if (array_key_exists($__key, $__defined_vars)) unset($$__key);
}

unset($__defined_vars, $__key, $__value); ?>

<?php
    $isPractice = ($project['type'] ?? null) === 'practice'
        || str_contains(strtolower($project['category'] ?? ''), 'practice')
        || str_contains(strtolower($project['summary'] ?? ''), 'practice sample');
?>

<article class="project-card project-card-media">
    <?php if(! empty($project['image'])): ?>
        <button
            type="button"
            class="project-card-image"
            data-lightbox-src="<?php echo e(asset($project['image'])); ?>"
            data-lightbox-alt="<?php echo e($project['title']); ?>"
            aria-label="View larger image: <?php echo e($project['title']); ?>"
        >
            <img
                src="<?php echo e(asset($project['image'])); ?>"
                alt="<?php echo e($project['title']); ?>"
                loading="lazy"
                decoding="async"
            >
            <span class="project-card-zoom" aria-hidden="true">
                <i class="bi bi-zoom-in"></i>
            </span>
        </button>
    <?php endif; ?>
    <div class="project-card-body">
        <div class="d-flex justify-content-between align-items-start gap-3 mb-3">
            <div class="icon-wrap"><i class="bi <?php echo e($project['icon']); ?>"></i></div>
            <div class="d-flex flex-wrap justify-content-end gap-1">
                <?php if($isPractice): ?>
                    <span class="skill-chip skill-chip-sample">Practice Sample</span>
                <?php endif; ?>
                <span class="skill-chip"><?php echo e($project['category']); ?></span>
                <?php if(! empty($project['status'])): ?>
                    <span class="skill-chip"><?php echo e($project['status']); ?></span>
                <?php endif; ?>
            </div>
        </div>
        <h3 class="h5 fw-bold mb-2"><?php echo e($project['title']); ?></h3>
        <p class="text-secondary small mb-2"><?php echo e($project['summary']); ?></p>
        <p class="project-meta mb-3"><strong>Outcome:</strong> <?php echo e($project['outcome']); ?></p>
        <div class="mb-3">
            <?php $__currentLoopData = $project['skills']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $skill): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <span class="skill-chip"><?php echo e($skill); ?></span>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
        <?php if(! empty($project['url'])): ?>
            <a
                href="<?php echo e($project['url']); ?>"
                class="btn btn-outline-brand btn-sm"
                target="_blank"
                rel="noopener noreferrer"
            >
                View Project <i class="bi bi-box-arrow-up-right ms-1"></i>
            </a>
        <?php endif; ?>
    </div>
</article>
<?php /**PATH N:\Projects\va-portfolio\resources\views/components/project-card.blade.php ENDPATH**/ ?>