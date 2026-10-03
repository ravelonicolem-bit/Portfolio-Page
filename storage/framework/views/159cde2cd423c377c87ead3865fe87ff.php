

<?php $__env->startSection('title', 'Capabilities'); ?>

<?php $__env->startSection('content'); ?>
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
            <?php $__currentLoopData = $services; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $service): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div class="col-md-6 col-xl-4">
                    <?php if (isset($component)) { $__componentOriginale804957ecdb153e8c822de5ed47a4ace = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginale804957ecdb153e8c822de5ed47a4ace = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.service-card','data' => ['icon' => $service['icon'],'title' => $service['title'],'items' => $service['items']]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('service-card'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['icon' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($service['icon']),'title' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($service['title']),'items' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($service['items'])]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginale804957ecdb153e8c822de5ed47a4ace)): ?>
<?php $attributes = $__attributesOriginale804957ecdb153e8c822de5ed47a4ace; ?>
<?php unset($__attributesOriginale804957ecdb153e8c822de5ed47a4ace); ?>
<?php endif; ?>
<?php if (isset($__componentOriginale804957ecdb153e8c822de5ed47a4ace)): ?>
<?php $component = $__componentOriginale804957ecdb153e8c822de5ed47a4ace; ?>
<?php unset($__componentOriginale804957ecdb153e8c822de5ed47a4ace); ?>
<?php endif; ?>
                </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
        <div class="cta-band mt-5">
            <div class="row align-items-center g-3">
                <div class="col-lg-8">
                    <h2 class="h4 fw-bold mb-2">Ready to support structured office and data workflows</h2>
                    <p class="mb-0">I focus on accurate encoding, organized documentation, clear communication, and completing assigned tasks on time.</p>
                </div>
                <div class="col-lg-4 text-lg-end">
                    <a href="<?php echo e(route('contact')); ?>" class="btn btn-light fw-semibold">Discuss a role</a>
                </div>
            </div>
        </div>
    </div>
</section>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH N:\Projects\va-portfolio\resources\views/pages/services.blade.php ENDPATH**/ ?>