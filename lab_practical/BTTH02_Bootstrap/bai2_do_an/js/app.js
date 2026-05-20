(function () {
    const STORAGE_KEY = "btth02_projects";
    let lang = localStorage.getItem("btth02_lang_projects") || "vi";
    let projects = [];
    let editingId = null;
    let projectModal = null;

    const i18n = {
        vi: {
            brand: "Quan ly Do An Sinh Vien",
            hero: "Chao mung den voi Do an tot nghiep",
            statTotal: "Tong so Do an",
            statDone: "Hoan thanh",
            statProgress: "Dang lam",
            filter: "Loc",
            addProject: "Them Do an",
            colTitle: "Tieu de",
            colStudent: "Sinh vien",
            colEmail: "Email",
            colPhone: "Dien thoai",
            colSupervisor: "Giang vien HD",
            colActions: "Thao tac",
            emptyTable: "Khong co do an phu hop.",
            modalTitle: "Them/Sua Do an",
            fTitle: "Tieu de Do an",
            fStudent: "Ten Sinh vien",
            fPhone: "Dien thoai",
            fPassword: "Mat khau",
            fSupervisor: "Giang vien HD",
            fStatus: "Trang thai",
            cancel: "Huy",
            save: "Luu",
            edit: "Sua",
            delete: "Xoa",
            confirmDelete: "Ban co chac muon xoa do an nay?",
            filterPlaceholder: "Tim theo sinh vien hoac tieu de...",
            statusDone: "Hoan thanh",
            statusProgress: "Dang lam"
        },
        en: {
            brand: "Student Project Management",
            hero: "Welcome to Graduation Projects",
            statTotal: "Total Projects",
            statDone: "Completed",
            statProgress: "In Progress",
            filter: "Filter",
            addProject: "Add Project",
            colTitle: "Title",
            colStudent: "Student",
            colEmail: "Email",
            colPhone: "Phone",
            colSupervisor: "Supervisor",
            colActions: "Actions",
            emptyTable: "No matching projects.",
            modalTitle: "Add/Edit Project",
            fTitle: "Project Title",
            fStudent: "Student Name",
            fPhone: "Phone",
            fPassword: "Password",
            fSupervisor: "Supervisor",
            fStatus: "Status",
            cancel: "Cancel",
            save: "Save",
            edit: "Edit",
            delete: "Delete",
            confirmDelete: "Delete this project?",
            filterPlaceholder: "Filter by student or title...",
            statusDone: "Completed",
            statusProgress: "In Progress"
        }
    };

    const defaultProjects = [
        { id: "1", title: "AI Chatbot", student: "Nguyen Van A", email: "nguyenvana@email.com", phone: "0901234567", password: "", supervisor: "TS. Tran B", status: "done" },
        { id: "2", title: "Web E-commerce", student: "Tran Thi B", email: "tranthib@email.com", phone: "0912345678", password: "", supervisor: "ThS. Le D", status: "done" },
        { id: "3", title: "Mobile App", student: "Le Van C", email: "levanc@email.com", phone: "0923456789", password: "", supervisor: "PGS. Nguyen E", status: "progress" },
        { id: "4", title: "Data Mining", student: "Pham Thi D", email: "phamthid@email.com", phone: "0934567890", password: "", supervisor: "TS. Pham F", status: "done" },
        { id: "5", title: "IoT Smart Home", student: "Hoang Van E", email: "hoangvane@email.com", phone: "0945678901", password: "", supervisor: "TS. Tran B", status: "progress" }
    ];

    function t(key) {
        return i18n[lang][key] ?? key;
    }

    function loadProjects() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            projects = saved ? JSON.parse(saved) : [...defaultProjects];
            if (!Array.isArray(projects) || projects.length === 0) {
                projects = [...defaultProjects];
            }
        } catch (e) {
            projects = [...defaultProjects];
        }
    }

    function saveProjects() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    }

    function updateStats() {
        const total = projects.length;
        const done = projects.filter((p) => p.status === "done").length;
        const progress = projects.filter((p) => p.status === "progress").length;
        document.getElementById("stat-total").textContent = total;
        document.getElementById("stat-done").textContent = done;
        document.getElementById("stat-progress").textContent = progress;
    }

    function getFiltered() {
        const q = document.getElementById("filter-input").value.trim().toLowerCase();
        if (!q) return projects;
        return projects.filter(
            (p) =>
                p.title.toLowerCase().includes(q) ||
                p.student.toLowerCase().includes(q) ||
                p.email.toLowerCase().includes(q)
        );
    }

    function renderTable() {
        const tbody = document.getElementById("project-tbody");
        const empty = document.getElementById("table-empty");
        const list = getFiltered();

        if (list.length === 0) {
            tbody.innerHTML = "";
            empty.classList.remove("d-none");
            updateStats();
            return;
        }

        empty.classList.add("d-none");
        tbody.innerHTML = list
            .map(
                (p, i) => `
            <tr>
                <td>${i + 1}</td>
                <td>${escapeHtml(p.title)}</td>
                <td>${escapeHtml(p.student)}</td>
                <td>${escapeHtml(p.email)}</td>
                <td>${escapeHtml(p.phone)}</td>
                <td>${escapeHtml(p.supervisor)}</td>
                <td>
                    <button type="button" class="btn btn-sm btn-secondary btn-edit" data-id="${p.id}">${t("edit")}</button>
                    <button type="button" class="btn btn-sm btn-danger btn-delete" data-id="${p.id}">${t("delete")}</button>
                </td>
            </tr>`
            )
            .join("");

        updateStats();
    }

    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function applyLanguage() {
        document.getElementById("nav-brand").textContent = t("brand");
        document.getElementById("hero-text").textContent = t("hero");
        document.getElementById("lbl-total").textContent = t("statTotal");
        document.getElementById("lbl-done").textContent = t("statDone");
        document.getElementById("lbl-progress").textContent = t("statProgress");
        document.getElementById("btn-filter").textContent = t("filter");
        document.getElementById("btn-add-project").textContent = t("addProject");
        document.getElementById("filter-input").placeholder = t("filterPlaceholder");
        document.getElementById("table-empty").textContent = t("emptyTable");
        document.getElementById("lang-vi").classList.toggle("fw-bold", lang === "vi");
        document.getElementById("lang-en").classList.toggle("fw-bold", lang === "en");
        renderTable();
    }

    function openModal(mode, project) {
        editingId = project ? project.id : null;
        document.getElementById("projectModalLabel").textContent = t("modalTitle");
        document.getElementById("project-id").value = project?.id || "";
        document.getElementById("p-title").value = project?.title || "";
        document.getElementById("p-student").value = project?.student || "";
        document.getElementById("p-email").value = project?.email || "";
        document.getElementById("p-phone").value = project?.phone || "";
        document.getElementById("p-password").value = project?.password || "";
        document.getElementById("p-supervisor").value = project?.supervisor || "TS. Tran B";
        document.getElementById("p-status").value = project?.status || "progress";
        projectModal.show();
    }

    function handleSave(e) {
        e.preventDefault();
        const form = document.getElementById("project-form");
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const payload = {
            id: editingId || String(Date.now()),
            title: document.getElementById("p-title").value.trim(),
            student: document.getElementById("p-student").value.trim(),
            email: document.getElementById("p-email").value.trim(),
            phone: document.getElementById("p-phone").value.trim(),
            password: document.getElementById("p-password").value,
            supervisor: document.getElementById("p-supervisor").value,
            status: document.getElementById("p-status").value
        };

        if (editingId) {
            const idx = projects.findIndex((p) => p.id === editingId);
            if (idx !== -1) projects[idx] = payload;
        } else {
            projects.push(payload);
        }

        saveProjects();
        renderTable();
        projectModal.hide();
    }

    function init() {
        const modalEl = document.getElementById("projectModal");
        if (typeof bootstrap !== "undefined" && modalEl) {
            projectModal = new bootstrap.Modal(modalEl);
        }

        loadProjects();
        applyLanguage();

        document.getElementById("btn-add-project").addEventListener("click", () => openModal("add"));
        document.getElementById("project-form").addEventListener("submit", handleSave);
        document.getElementById("btn-filter").addEventListener("click", renderTable);
        document.getElementById("filter-input").addEventListener("input", renderTable);

        document.getElementById("project-tbody").addEventListener("click", (e) => {
            const editBtn = e.target.closest(".btn-edit");
            const delBtn = e.target.closest(".btn-delete");
            if (editBtn) {
                const p = projects.find((x) => x.id === editBtn.dataset.id);
                if (p) openModal("edit", p);
            }
            if (delBtn) {
                if (confirm(t("confirmDelete"))) {
                    projects = projects.filter((x) => x.id !== delBtn.dataset.id);
                    saveProjects();
                    renderTable();
                }
            }
        });

        document.getElementById("lang-vi").addEventListener("click", (e) => {
            e.preventDefault();
            lang = "vi";
            localStorage.setItem("btth02_lang_projects", lang);
            applyLanguage();
        });

        document.getElementById("lang-en").addEventListener("click", (e) => {
            e.preventDefault();
            lang = "en";
            localStorage.setItem("btth02_lang_projects", lang);
            applyLanguage();
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();