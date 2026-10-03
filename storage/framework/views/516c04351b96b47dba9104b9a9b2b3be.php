<?php $__env->startSection('title', 'Application Tracker'); ?>

<?php $__env->startSection('content'); ?>
<section class="page-header">
    <div class="container">
        <p class="kicker">Tracker</p>
        <h1 class="display-6 fw-bold">Job applications</h1>
        <p class="text-secondary col-lg-8 mb-0">A frontend preview of how applications can be monitored. Figures below are mock data only — not a record of real submissions.</p>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="row g-3 mb-4">
            <div class="col-6 col-lg">
                <div class="dash-card p-3">
                    <div class="icon-wrap mb-2"><i class="bi bi-send"></i></div>
                    <div class="text-secondary small">Applications</div>
                    <div class="fs-3 fw-bold"><?php echo e($stats['applications']); ?></div>
                </div>
            </div>
            <div class="col-6 col-lg">
                <div class="dash-card p-3">
                    <div class="icon-wrap mb-2"><i class="bi bi-eye"></i></div>
                    <div class="text-secondary small">Under Review</div>
                    <div class="fs-3 fw-bold"><?php echo e($stats['under_review']); ?></div>
                </div>
            </div>
            <div class="col-6 col-lg">
                <div class="dash-card p-3">
                    <div class="icon-wrap mb-2"><i class="bi bi-camera-video"></i></div>
                    <div class="text-secondary small">Interviews</div>
                    <div class="fs-3 fw-bold"><?php echo e($stats['interviews']); ?></div>
                </div>
            </div>
            <div class="col-6 col-lg">
                <div class="dash-card p-3">
                    <div class="icon-wrap mb-2"><i class="bi bi-ui-checks"></i></div>
                    <div class="text-secondary small">Assessments</div>
                    <div class="fs-3 fw-bold"><?php echo e($stats['assessments']); ?></div>
                </div>
            </div>
            <div class="col-6 col-lg">
                <div class="dash-card p-3">
                    <div class="icon-wrap mb-2"><i class="bi bi-award"></i></div>
                    <div class="text-secondary small">Offers</div>
                    <div class="fs-3 fw-bold"><?php echo e($stats['offers']); ?></div>
                </div>
            </div>
        </div>

        <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-3">
            <h2 class="h5 fw-bold mb-0">Application list</h2>
            <div class="d-flex align-items-center gap-2">
                <label class="small text-secondary mb-0" for="status-filter">Status</label>
                <select id="status-filter" class="form-select form-select-sm" style="min-width: 180px;">
                    <option value="">All statuses</option>
                    <option>Applied</option>
                    <option>Under Review</option>
                    <option>Interview</option>
                    <option>Assessment</option>
                    <option>Final Interview</option>
                    <option>Offer</option>
                    <option>Rejected</option>
                </select>
            </div>
        </div>

        <div class="table-wrap table-responsive">
            <table class="table table-hover align-middle mb-0">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Position</th>
                        <th>Type</th>
                        <th>Location</th>
                        <th>Date Applied</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <?php $__currentLoopData = $applications; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $application): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <tr data-application-row data-status="<?php echo e($application['status']); ?>">
                            <td class="fw-semibold"><?php echo e($application['company']); ?></td>
                            <td><?php echo e($application['position']); ?></td>
                            <td><?php echo e($application['type']); ?></td>
                            <td><?php echo e($application['location']); ?></td>
                            <td><?php echo e(\Illuminate\Support\Carbon::parse($application['date_applied'])->format('M j, Y')); ?></td>
                            <td><?php if (isset($component)) { $__componentOriginal8c81617a70e11bcf247c4db924ab1b62 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal8c81617a70e11bcf247c4db924ab1b62 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.status-badge','data' => ['status' => $application['status']]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('status-badge'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['status' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($application['status'])]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal8c81617a70e11bcf247c4db924ab1b62)): ?>
<?php $attributes = $__attributesOriginal8c81617a70e11bcf247c4db924ab1b62; ?>
<?php unset($__attributesOriginal8c81617a70e11bcf247c4db924ab1b62); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal8c81617a70e11bcf247c4db924ab1b62)): ?>
<?php $component = $__componentOriginal8c81617a70e11bcf247c4db924ab1b62; ?>
<?php unset($__componentOriginal8c81617a70e11bcf247c4db924ab1b62); ?>
<?php endif; ?></td>
                            <td>
                                <a class="btn btn-sm btn-outline-brand" href="<?php echo e(route('jobs.show', $application['slug'])); ?>">View</a>
                            </td>
                        </tr>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </tbody>
            </table>
        </div>
    </div>
</section>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH N:\Projects\va-portfolio\resources\views/pages/applications.blade.php ENDPATH**/ ?>