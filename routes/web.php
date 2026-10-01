<?php

use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/about', [PageController::class, 'about'])->name('about');
Route::get('/services', [PageController::class, 'services'])->name('services');
Route::get('/skills', [PageController::class, 'skills'])->name('skills');
Route::get('/projects', [PageController::class, 'projects'])->name('projects');
Route::get('/jobs', [PageController::class, 'jobs'])->name('jobs.index');
Route::get('/jobs/{slug}', [PageController::class, 'jobDetails'])->name('jobs.show');
Route::get('/applications', [PageController::class, 'applications'])->name('applications.index');
Route::get('/resume', [PageController::class, 'resume'])->name('resume');
Route::get('/contact', [PageController::class, 'contact'])->name('contact');
