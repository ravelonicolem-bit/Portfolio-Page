

<?php $__env->startSection('title', 'Resume'); ?>

<?php $__env->startSection('content'); ?>
<section class="page-header">
    <div class="container d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3">
        <div>
            <p class="kicker">Resume</p>
            <h1 class="display-6 fw-bold">Resume preview</h1>
            <p class="text-secondary mb-0">A professional snapshot for employers. Download the PDF for the full document.</p>
        </div>
        <a class="btn btn-brand" href="<?php echo e(asset($profile['resume_path'])); ?>" target="_blank" rel="noopener" download>Download Resume</a>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="preview-panel resume-preview col-lg-10 mx-auto">
            <div class="panel-bar d-flex align-items-center justify-content-between">
                <div class="dot-row">
                    <span></span><span></span><span></span>
                </div>
                <span>Resume overview</span>
            </div>
            <div class="p-4 p-md-5">
                <div class="d-flex flex-column flex-md-row justify-content-between gap-3 border-bottom pb-3 mb-4">
                    <div>
                        <h2 class="h3 fw-bold mb-1"><?php echo e($profile['full_name']); ?></h2>
                        <div class="text-secondary"><?php echo e($profile['headline']); ?></div>
                        <div class="small text-secondary mt-1"><?php echo e($profile['tagline']); ?></div>
                    </div>
                    <div class="small text-secondary">
                        <div><?php echo e($profile['email']); ?></div>
                        <div><?php echo e($profile['phone']); ?></div>
                        <div><?php echo e($profile['location']); ?></div>
                    </div>
                </div>

                <h3 class="h6 fw-bold text-uppercase text-secondary">Professional Summary</h3>
                <p class="text-secondary"><?php echo e($profile['short_description']); ?></p>
                <p class="text-secondary"><?php echo e($profile['objective']); ?></p>

                <h3 class="h6 fw-bold text-uppercase text-secondary mt-4">Professional Experience</h3>
                <?php $__currentLoopData = $experiences; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $experience): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <div class="mb-3">
                        <div class="fw-semibold"><?php echo e($experience['title']); ?></div>
                        <div class="text-secondary"><?php echo e($experience['organization']); ?></div>
                        <div class="small text-secondary mb-2">
                            <?php if(! empty($experience['assignment'])): ?>
                                <?php echo e($experience['assignment']); ?> ·
                            <?php endif; ?>
                            <?php echo e($experience['dates']); ?>

                        </div>
                        <ul class="text-secondary small mb-0">
                            <?php $__currentLoopData = $experience['highlights']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $highlight): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <li><?php echo e($highlight); ?></li>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </ul>
                    </div>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

                <h3 class="h6 fw-bold text-uppercase text-secondary mt-4">Target Roles</h3>
                <div class="mb-1">
                    <?php $__currentLoopData = $profile['target_roles']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $role): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <span class="skill-chip"><?php echo e($role); ?></span>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </div>

                <h3 class="h6 fw-bold text-uppercase text-secondary mt-4">Education</h3>
                <p class="mb-0 fw-semibold"><?php echo e($profile['education']); ?></p>

                <h3 class="h6 fw-bold text-uppercase text-secondary mt-4">Core Skills</h3>
                <div>
                    <?php $__currentLoopData = $profile['core_skills']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $skill): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <span class="skill-chip"><?php echo e($skill); ?></span>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </div>
            </div>
        </div>
    </div>
</section>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH N:\Projects\va-portfolio\resources\views/pages/resume.blade.php ENDPATH**/ ?>