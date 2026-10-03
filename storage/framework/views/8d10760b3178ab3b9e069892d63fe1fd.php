<?php $__env->startSection('title', 'Projects'); ?>

<?php $__env->startSection('content'); ?>
<section class="page-header">
    <div class="container">
        <p class="kicker">Projects</p>
        <h1 class="display-6 fw-bold">Work samples and practice projects</h1>
        <p class="text-secondary col-lg-8 mb-0">This page separates real project work from clearly labeled practice samples so employers can quickly review relevant skills for data, admin, HR support, and virtual assistance roles.</p>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="d-flex flex-wrap gap-2 mb-5">
            <span class="text-secondary small align-self-center me-1">Jump to:</span>
            <a href="#practice-samples" class="btn btn-outline-brand btn-sm">Practice samples</a>
            <?php $__currentLoopData = $sections; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $section): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <a href="#<?php echo e($section['key']); ?>" class="btn btn-outline-brand btn-sm"><?php echo e($section['title']); ?></a>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>

        <?php $__currentLoopData = $sections; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $section): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <div class="mb-5" id="<?php echo e($section['key']); ?>">
                <div class="d-flex align-items-center gap-3 mb-2">
                    <div class="icon-wrap"><i class="bi <?php echo e($section['icon']); ?>"></i></div>
                    <div>
                        <h2 class="h4 fw-bold mb-0"><?php echo e($section['title']); ?></h2>
                        <p class="text-secondary small mb-0"><?php echo e($section['description']); ?></p>
                    </div>
                </div>
                <div class="project-image-grid row g-4 mt-1">
                    <?php $__currentLoopData = $section['projects']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $project): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <div class="col-md-6 col-xl-4">
                            <?php if (isset($component)) { $__componentOriginaldbcceabf4a99a34f9999233ae1fef693 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginaldbcceabf4a99a34f9999233ae1fef693 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.project-card','data' => ['project' => $project]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('project-card'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['project' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($project)]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginaldbcceabf4a99a34f9999233ae1fef693)): ?>
<?php $attributes = $__attributesOriginaldbcceabf4a99a34f9999233ae1fef693; ?>
<?php unset($__attributesOriginaldbcceabf4a99a34f9999233ae1fef693); ?>
<?php endif; ?>
<?php if (isset($__componentOriginaldbcceabf4a99a34f9999233ae1fef693)): ?>
<?php $component = $__componentOriginaldbcceabf4a99a34f9999233ae1fef693; ?>
<?php unset($__componentOriginaldbcceabf4a99a34f9999233ae1fef693); ?>
<?php endif; ?>
                        </div>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </div>
            </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

        <div class="mb-2" id="practice-samples">
            <div class="d-flex align-items-center gap-3 mb-2">
                <div class="icon-wrap"><i class="bi bi-lightbulb"></i></div>
                <div>
                    <h2 class="h4 fw-bold mb-0">Practice samples</h2>
                    <p class="text-secondary small mb-0">These are practice/demo samples created to illustrate workflow skills. They are not client deliverables or employer projects.</p>
                </div>
            </div>
            <div class="project-image-grid row g-4 mt-1">
                <?php $__currentLoopData = $sampleIdeas; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $idea): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <div class="col-md-6 col-xl-4">
                        <?php if (isset($component)) { $__componentOriginaldbcceabf4a99a34f9999233ae1fef693 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginaldbcceabf4a99a34f9999233ae1fef693 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.project-card','data' => ['project' => $idea]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('project-card'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['project' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($idea)]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginaldbcceabf4a99a34f9999233ae1fef693)): ?>
<?php $attributes = $__attributesOriginaldbcceabf4a99a34f9999233ae1fef693; ?>
<?php unset($__attributesOriginaldbcceabf4a99a34f9999233ae1fef693); ?>
<?php endif; ?>
<?php if (isset($__componentOriginaldbcceabf4a99a34f9999233ae1fef693)): ?>
<?php $component = $__componentOriginaldbcceabf4a99a34f9999233ae1fef693; ?>
<?php unset($__componentOriginaldbcceabf4a99a34f9999233ae1fef693); ?>
<?php endif; ?>
                    </div>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </div>
        </div>

        <div class="cta-band mt-5">
            <div class="row align-items-center g-3">
                <div class="col-lg-8">
                    <h2 class="h4 fw-bold mb-2">Looking for accurate data and admin support?</h2>
                    <p class="mb-0">I can contribute to encoding, verification, records organization, recruitment tracking, and day-to-day office or virtual assistance tasks.</p>
                </div>
                <div class="col-lg-4 text-lg-end">
                    <a href="<?php echo e(route('contact')); ?>" class="btn btn-light">Contact Me</a>
                </div>
            </div>
        </div>
    </div>
</section>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH N:\Projects\va-portfolio\resources\views/pages/projects.blade.php ENDPATH**/ ?>