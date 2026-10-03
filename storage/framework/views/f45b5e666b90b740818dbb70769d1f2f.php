

<?php $__env->startSection('title', 'Home'); ?>

<?php $__env->startSection('content'); ?>
<section class="hero">
    <div class="container">
        <div class="row align-items-center g-4 g-lg-5">
            <div class="col-lg-7">
                <span class="availability-badge mb-3">
                    <span class="dot"></span>
                    <?php echo e($profile['availability_badge']); ?>

                </span>
                <p class="kicker mt-3">Professional portfolio</p>
                <h1 class="display-5 mt-2"><?php echo e($profile['full_name']); ?></h1>
                <p class="lead mt-2 mb-2"><?php echo e($profile['headline']); ?></p>
                <p class="text-secondary col-xl-11 mb-0"><?php echo e($profile['short_description']); ?></p>
                <p class="text-secondary col-xl-11 mt-3 mb-0"><?php echo e($profile['objective']); ?></p>
                <div class="d-flex flex-wrap gap-2 mt-4">
                    <a href="mailto:<?php echo e($profile['email']); ?>" class="btn btn-brand">Email Me</a>
                    <a href="<?php echo e(asset($profile['resume_path'])); ?>" class="btn btn-outline-brand" target="_blank" rel="noopener">Download Resume</a>
                    <a href="<?php echo e(route('about')); ?>" class="btn btn-outline-brand">View Experience</a>
                </div>
            </div>
            <div class="col-lg-5">
                <div class="info-card p-4">
                    <h2 class="h6 fw-bold text-uppercase text-secondary mb-3">At a glance</h2>
                    <div class="d-grid gap-3 small">
                        <div>
                            <div class="text-secondary">Education</div>
                            <div class="fw-semibold"><?php echo e($profile['education_short']); ?></div>
                        </div>
                        <div>
                            <div class="text-secondary">Recent role</div>
                            <div class="fw-semibold">ERP Data Encoder | System Accounting Staff</div>
                            <div class="text-secondary">Tomodachi Global Resources Inc.</div>
                        </div>
                        <div>
                            <div class="text-secondary">Location</div>
                            <div class="fw-semibold"><?php echo e($profile['location']); ?></div>
                        </div>
                        <div>
                            <div class="text-secondary">Contact</div>
                            <div class="fw-semibold"><a href="mailto:<?php echo e($profile['email']); ?>"><?php echo e($profile['email']); ?></a></div>
                            <div class="text-secondary"><?php echo e($profile['phone']); ?></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row g-3 mt-4">
            <?php $__currentLoopData = [
                ['bi-keyboard', 'Data Encoding', 'ERP and spreadsheet encoding with careful verification'],
                ['bi-folder2-open', 'Records Management', 'Organized documentation and structured filing'],
                ['bi-people', 'HR / Recruitment Support', 'Applicant tracking and confidential file handling'],
                ['bi-laptop', 'Virtual Assistance', 'Remote admin support, scheduling, and task follow-through'],
            ]; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div class="col-md-6 col-xl-3">
                    <div class="stat-card d-flex gap-3 align-items-start">
                        <div class="icon-wrap"><i class="bi <?php echo e($item[0]); ?>"></i></div>
                        <div>
                            <div class="fw-bold"><?php echo e($item[1]); ?></div>
                            <div class="small text-secondary"><?php echo e($item[2]); ?></div>
                        </div>
                    </div>
                </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="row align-items-end mb-4">
            <div class="col-lg-8">
                <p class="kicker">Experience highlight</p>
                <h2 class="section-title mb-0">Recent professional experience</h2>
            </div>
            <div class="col-lg-4 text-lg-end">
                <a href="<?php echo e(route('about')); ?>#experience" class="btn btn-outline-brand">Full experience</a>
            </div>
        </div>
        <div class="row g-4">
            <?php $__currentLoopData = array_slice($experiences, 0, 2); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $experience): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div class="col-md-6">
                    <article class="info-card p-4 h-100">
                        <div class="fw-bold"><?php echo e($experience['title']); ?></div>
                        <div class="text-secondary"><?php echo e($experience['organization']); ?></div>
                        <div class="small text-secondary mb-3"><?php echo e($experience['dates']); ?></div>
                        <ul class="small text-secondary mb-0 ps-3">
                            <?php $__currentLoopData = array_slice($experience['highlights'], 0, 3); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $highlight): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <li class="mb-1"><?php echo e($highlight); ?></li>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </ul>
                    </article>
                </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
    </div>
</section>

<section class="section section-muted" id="availability">
    <div class="container">
        <p class="kicker">Roles I’m targeting</p>
        <h2 class="section-title mb-2"><?php echo e($profile['availability_status']); ?></h2>
        <p class="text-secondary mb-4">I am prepared to support structured office, data, and recruitment-admin workflows while learning your tools and processes.</p>
        <div class="mb-4">
            <?php $__currentLoopData = $profile['target_roles']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $role): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <span class="skill-chip"><?php echo e($role); ?></span>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
        <div class="row g-4">
            <div class="col-md-4">
                <div class="info-card p-4 h-100">
                    <h3 class="h6 fw-bold">Core skills</h3>
                    <div>
                        <?php $__currentLoopData = $profile['core_skills']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $skill): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <span class="skill-chip"><?php echo e($skill); ?></span>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="info-card p-4 h-100">
                    <h3 class="h6 fw-bold">Work setup</h3>
                    <ul class="mb-0 text-secondary">
                        <li>On-site</li>
                        <li>Hybrid</li>
                        <li>Remote / virtual assistance</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-4">
                <div class="info-card p-4 h-100">
                    <h3 class="h6 fw-bold">Availability</h3>
                    <p class="mb-1 text-secondary"><?php echo e($profile['start_date']); ?></p>
                    <p class="mb-1 text-secondary"><?php echo e($profile['hours_per_week']); ?></p>
                    <p class="mb-0 text-secondary">Timezone: <?php echo e($profile['timezone']); ?></p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="d-flex justify-content-between align-items-end mb-4">
            <div>
                <p class="kicker">Capabilities</p>
                <h2 class="section-title mb-0">How I can support your team</h2>
            </div>
            <a href="<?php echo e(route('services')); ?>" class="btn btn-outline-brand d-none d-md-inline-flex">All capabilities</a>
        </div>
        <div class="row g-4">
            <?php $__currentLoopData = array_slice($services, 0, 6); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $service): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
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
    </div>
</section>

<section class="section section-muted" id="projects">
    <div class="container">
        <div class="d-flex justify-content-between align-items-end mb-4">
            <div>
                <p class="kicker">Selected work</p>
                <h2 class="section-title mb-0">Projects and practice samples</h2>
            </div>
            <a href="<?php echo e(route('projects')); ?>" class="btn btn-outline-brand d-none d-md-inline-flex">All projects</a>
        </div>
        <p class="text-secondary col-lg-8 mb-4">Featured items from Excel/admin samples, website work, and design. Practice samples are clearly labeled on the Projects page.</p>
        <div class="row g-4">
            <?php $__currentLoopData = $projects; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $project): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div class="col-md-4">
                    <div class="small text-secondary mb-2 d-flex align-items-center gap-2">
                        <i class="bi <?php echo e($project['section_icon']); ?>"></i>
                        <span class="fw-semibold"><?php echo e($project['section_title']); ?></span>
                    </div>
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
</section>

<section class="section pt-0">
    <div class="container">
        <div class="cta-band d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3">
            <div>
                <p class="mb-1 text-white-50 small">Next step</p>
                <h2 class="h3 fw-bold mb-2">Open to data encoding and administrative roles</h2>
                <p class="mb-0">If you need accurate encoding, organized records, and dependable office or virtual support, I would welcome the chance to discuss how I can contribute.</p>
            </div>
            <div class="d-flex flex-wrap gap-2">
                <a class="btn btn-light fw-semibold" href="mailto:<?php echo e($profile['email']); ?>">Email Me</a>
                <a class="btn btn-outline-light fw-semibold" href="<?php echo e(route('resume')); ?>">View Resume</a>
            </div>
        </div>
    </div>
</section>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH N:\Projects\va-portfolio\resources\views/pages/home.blade.php ENDPATH**/ ?>