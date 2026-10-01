<?php

namespace App\Http\Controllers;

use App\Support\PortfolioCatalog;
use Illuminate\View\View;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class PageController extends Controller
{
    public function home(): View
    {
        return view('pages.home', [
            'services' => PortfolioCatalog::services(),
            'skillGroups' => PortfolioCatalog::skillGroups(),
            'projects' => PortfolioCatalog::featuredProjects(),
            'experiences' => PortfolioCatalog::experiences(),
        ]);
    }

    public function about(): View
    {
        return view('pages.about', [
            'experiences' => PortfolioCatalog::experiences(),
        ]);
    }

    public function services(): View
    {
        return view('pages.services', [
            'services' => PortfolioCatalog::services(),
        ]);
    }

    public function skills(): View
    {
        return view('pages.skills', [
            'skillGroups' => PortfolioCatalog::skillGroups(),
        ]);
    }

    public function projects(): View
    {
        return view('pages.projects', [
            'sections' => PortfolioCatalog::projectSections(),
            'sampleIdeas' => PortfolioCatalog::sampleProjectIdeas(),
        ]);
    }

    public function jobs(): View
    {
        return view('pages.jobs', [
            'jobs' => PortfolioCatalog::jobs(),
        ]);
    }

    public function jobDetails(string $slug): View
    {
        $job = PortfolioCatalog::job($slug);

        if (! $job) {
            throw new NotFoundHttpException('The requested opportunity was not found.');
        }

        return view('pages.job-details', [
            'job' => $job,
        ]);
    }

    public function applications(): View
    {
        return view('pages.applications', [
            'applications' => PortfolioCatalog::applications(),
            'stats' => PortfolioCatalog::applicationStats(),
        ]);
    }

    public function resume(): View
    {
        return view('pages.resume', [
            'skillGroups' => PortfolioCatalog::skillGroups(),
            'experiences' => PortfolioCatalog::experiences(),
        ]);
    }

    public function contact(): View
    {
        return view('pages.contact');
    }
}
