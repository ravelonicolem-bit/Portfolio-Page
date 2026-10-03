

<?php $__env->startSection('title', 'Contact'); ?>

<?php $__env->startSection('content'); ?>
<section class="page-header">
    <div class="container">
        <p class="kicker">Contact</p>
        <h1 class="display-6 fw-bold">Let’s discuss a role</h1>
        <p class="text-secondary col-lg-8 mb-0">I am available for entry-level, part-time, and full-time opportunities in data encoding, administrative support, office operations, HR/recruitment assistance, and virtual assistance.</p>
        <div class="d-flex flex-wrap gap-2 mt-4">
            <a class="btn btn-brand" href="mailto:<?php echo e($profile['email']); ?>">Email Me</a>
            <a class="btn btn-outline-brand" href="<?php echo e(asset($profile['resume_path'])); ?>" target="_blank" rel="noopener">Download Resume</a>
            <a class="btn btn-outline-brand" href="<?php echo e(route('projects')); ?>">View Projects</a>
        </div>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="row g-4">
            <div class="col-lg-7">
                <div class="info-card p-4 h-100">
                    <h2 class="h5 fw-bold mb-3">Contact details</h2>
                    <div class="row g-3">
                        <div class="col-md-6">
                            <p class="mb-2"><i class="bi bi-person me-2 text-primary"></i><?php echo e($profile['full_name']); ?></p>
                            <p class="mb-2"><i class="bi bi-envelope me-2 text-primary"></i><a href="mailto:<?php echo e($profile['email']); ?>"><?php echo e($profile['email']); ?></a></p>
                            <p class="mb-2"><i class="bi bi-telephone me-2 text-primary"></i><?php echo e($profile['phone']); ?></p>
                            <p class="mb-0"><i class="bi bi-geo-alt me-2 text-primary"></i><?php echo e($profile['location']); ?></p>
                        </div>
                        <div class="col-md-6">
                            <p class="mb-2"><i class="bi bi-briefcase me-2 text-primary"></i><?php echo e($profile['headline']); ?></p>
                            <p class="mb-2"><i class="bi bi-clock me-2 text-primary"></i><?php echo e($profile['availability_status']); ?></p>
                            <p class="mb-0"><i class="bi bi-calendar-check me-2 text-primary"></i><?php echo e($profile['start_date']); ?></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-5">
                <div class="info-card p-4 h-100">
                    <h2 class="h5 fw-bold mb-3">Roles of interest</h2>
                    <div class="mb-3">
                        <?php $__currentLoopData = $profile['target_roles']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $role): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <span class="skill-chip"><?php echo e($role); ?></span>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </div>
                    <p class="text-secondary small mb-0">Please email me with the role details, schedule expectations, and any required tools or systems. I am ready to share my resume and discuss fit.</p>
                </div>
            </div>
        </div>
    </div>
</section>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH N:\Projects\va-portfolio\resources\views/pages/contact.blade.php ENDPATH**/ ?>