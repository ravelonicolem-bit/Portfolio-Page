

<?php $__env->startSection('title', 'Sample Opportunities'); ?>

<?php $__env->startSection('content'); ?>
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
            <?php $__currentLoopData = $jobs; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $job): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div class="col-md-6 col-xl-4">
                    <?php if (isset($component)) { $__componentOriginalbb7abfc421304865208a8164802344c3 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalbb7abfc421304865208a8164802344c3 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.job-card','data' => ['job' => $job]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('job-card'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['job' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($job)]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalbb7abfc421304865208a8164802344c3)): ?>
<?php $attributes = $__attributesOriginalbb7abfc421304865208a8164802344c3; ?>
<?php unset($__attributesOriginalbb7abfc421304865208a8164802344c3); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalbb7abfc421304865208a8164802344c3)): ?>
<?php $component = $__componentOriginalbb7abfc421304865208a8164802344c3; ?>
<?php unset($__componentOriginalbb7abfc421304865208a8164802344c3); ?>
<?php endif; ?>
                </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
        <p class="placeholder-note mt-4 mb-0">Later, this page can load live job posts from a database without changing the Blade components.</p>
    </div>
</section>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH N:\Projects\va-portfolio\resources\views/pages/jobs.blade.php ENDPATH**/ ?>