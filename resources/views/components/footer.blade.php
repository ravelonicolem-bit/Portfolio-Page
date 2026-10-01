<footer class="site-footer">
    <div class="container">
        <div class="row g-4 pb-4">
            <div class="col-lg-5">
                <h6 class="mb-2">{{ $profile['full_name'] }}</h6>
                <p class="mb-2 small">{{ $profile['headline'] }}</p>
                <p class="mb-0 small">{{ $profile['short_description'] }}</p>
            </div>
            <div class="col-6 col-lg-3">
                <h6 class="mb-3">Quick links</h6>
                <ul class="list-unstyled d-grid gap-2 small">
                    <li><a href="{{ route('about') }}">About & experience</a></li>
                    <li><a href="{{ route('skills') }}">Skills</a></li>
                    <li><a href="{{ route('projects') }}">Projects</a></li>
                    <li><a href="{{ asset($profile['resume_path']) }}" target="_blank" rel="noopener">Download resume</a></li>
                </ul>
            </div>
            <div class="col-lg-4">
                <h6 class="mb-3">Contact</h6>
                <ul class="list-unstyled d-grid gap-2 small">
                    <li><i class="bi bi-envelope me-2"></i><a href="mailto:{{ $profile['email'] }}">{{ $profile['email'] }}</a></li>
                    <li><i class="bi bi-telephone me-2"></i>{{ $profile['phone'] }}</li>
                    <li><i class="bi bi-geo-alt me-2"></i>{{ $profile['location'] }}</li>
                    <li><i class="bi bi-clock me-2"></i>{{ $profile['availability_status'] }}</li>
                </ul>
            </div>
        </div>
        <div class="border-top border-secondary pt-3 d-flex flex-column flex-md-row justify-content-between gap-2 small">
            <span>&copy; <span id="copyright-year">2026</span> {{ $profile['full_name'] }}. All rights reserved.</span>
            <span>Portfolio for employment applications</span>
        </div>
    </div>
</footer>
