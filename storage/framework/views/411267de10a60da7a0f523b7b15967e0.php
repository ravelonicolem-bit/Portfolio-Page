

<?php $__env->startSection('title', 'Skills'); ?>

<?php $__env->startSection('content'); ?>
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
            <?php $__currentLoopData = $profile['core_skills']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $skill): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <span class="skill-chip"><?php echo e($skill); ?></span>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
        <div class="row g-4">
            <?php $__currentLoopData = $skillGroups; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $group): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div class="col-md-6">
                    <?php if (isset($component)) { $__componentOriginalcebc4c60919626cbae8d88c589f7ba40 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalcebc4c60919626cbae8d88c589f7ba40 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.skill-card','data' => ['icon' => $group['icon'],'title' => $group['title'],'skills' => $group['skills']]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('skill-card'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['icon' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($group['icon']),'title' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($group['title']),'skills' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($group['skills'])]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalcebc4c60919626cbae8d88c589f7ba40)): ?>
<?php $attributes = $__attributesOriginalcebc4c60919626cbae8d88c589f7ba40; ?>
<?php unset($__attributesOriginalcebc4c60919626cbae8d88c589f7ba40); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalcebc4c60919626cbae8d88c589f7ba40)): ?>
<?php $component = $__componentOriginalcebc4c60919626cbae8d88c589f7ba40; ?>
<?php unset($__componentOriginalcebc4c60919626cbae8d88c589f7ba40); ?>
<?php endif; ?>
                </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
    </div>
</section>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH N:\Projects\va-portfolio\resources\views/pages/skills.blade.php ENDPATH**/ ?>