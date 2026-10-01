document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("copyright-year");
    if (year) {
        year.textContent = String(new Date().getFullYear());
    }

    setupApplicationForm();
    setupApplicationFilters();
    setupProjectLightbox();
});

function setupApplicationForm() {
    const form = document.getElementById("application-form");
    if (!form) {
        return;
    }

    const success = document.getElementById("application-success");
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!validateForm(form)) {
            form.classList.add("was-validated");
            return;
        }

        form.classList.add("was-validated");
        form.classList.add("d-none");
        if (success) {
            success.classList.remove("d-none");
            success.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        if (submitBtn) {
            submitBtn.disabled = true;
        }
    });
}

function validateForm(form) {
    const fields = form.querySelectorAll("input, select, textarea");
    let valid = true;

    fields.forEach((field) => {
        if (!field.checkValidity()) {
            valid = false;
        }
    });

    const resume = form.querySelector("#resume");
    if (resume && resume.files && resume.files[0]) {
        const file = resume.files[0];
        const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
        const maxSize = 5 * 1024 * 1024;
        if (!allowed.includes(file.type) && !/\.(pdf|doc|docx)$/i.test(file.name)) {
            resume.setCustomValidity("Please upload a PDF or Word document.");
            valid = false;
        } else if (file.size > maxSize) {
            resume.setCustomValidity("Resume must be 5 MB or smaller.");
            valid = false;
        } else {
            resume.setCustomValidity("");
        }
    }

    return valid && form.checkValidity();
}

function setupApplicationFilters() {
    const select = document.getElementById("status-filter");
    const rows = document.querySelectorAll("[data-application-row]");
    if (!select || !rows.length) {
        return;
    }

    select.addEventListener("change", () => {
        const value = select.value;
        rows.forEach((row) => {
            const status = row.getAttribute("data-status");
            row.classList.toggle("d-none", Boolean(value) && status !== value);
        });
    });
}

function setupProjectLightbox() {
    const lightbox = document.getElementById("project-lightbox");
    const image = document.getElementById("project-lightbox-image");
    const caption = document.getElementById("project-lightbox-caption");
    const triggers = document.querySelectorAll("[data-lightbox-src]");

    if (!lightbox || !image || !caption || !triggers.length) {
        return;
    }

    const openLightbox = (src, alt) => {
        image.src = src;
        image.alt = alt || "Project image";
        caption.textContent = alt || "";
        lightbox.hidden = false;
        document.body.classList.add("lightbox-open");
    };

    const closeLightbox = () => {
        lightbox.hidden = true;
        image.removeAttribute("src");
        image.alt = "";
        caption.textContent = "";
        document.body.classList.remove("lightbox-open");
    };

    triggers.forEach((trigger) => {
        trigger.addEventListener("click", () => {
            openLightbox(trigger.getAttribute("data-lightbox-src"), trigger.getAttribute("data-lightbox-alt"));
        });
    });

    lightbox.querySelectorAll("[data-lightbox-close]").forEach((el) => {
        el.addEventListener("click", closeLightbox);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !lightbox.hidden) {
            closeLightbox();
        }
    });
}
