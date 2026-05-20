/**
 * BTTH03 — Bài 2: Quản lý công việc
 * Không làm tìm kiếm / lọc (theo đề).
 */

const STORAGE_KEY = "btth03_tasks_v1";

/** @type {Array<{id:string, title:string, description:string, dueDate:string, priority:string, done:boolean}>} */
let tasks = [];
let editingId = null;

const taskList = document.querySelector("#task-list");
const modalOverlay = document.querySelector("#modal-overlay");
const form = document.querySelector("#task-form");
const modalTitle = document.querySelector("#modal-title");
const messageArea = document.querySelector("#message-area");
const statTotal = document.querySelector("#stat-total");
const statDone = document.querySelector("#stat-done");
const statTodo = document.querySelector("#stat-todo");

const btnOpen = document.querySelector("#btn-open-form");
const btnClose = document.querySelector("#btn-close-modal");
const btnCancel = document.querySelector("#btn-cancel");

const fInternalId = document.querySelector("#f-internal-id");
const fTitle = document.querySelector("#f-title");
const fDescription = document.querySelector("#f-description");
const fDue = document.querySelector("#f-due");
const fPriority = document.querySelector("#f-priority");
const fDone = document.querySelector("#f-done");

function loadTasks() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        tasks = raw ? JSON.parse(raw) : [];
        if (!Array.isArray(tasks)) tasks = [];
    } catch {
        tasks = [];
    }
}

function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function showMessage(text) {
    messageArea.textContent = text || "";
    messageArea.className = "message-area" + (text ? " info" : "");
}

function openModal() {
    modalOverlay.classList.remove("hidden");
    modalOverlay.setAttribute("aria-hidden", "false");
}

function closeModal() {
    modalOverlay.classList.add("hidden");
    modalOverlay.setAttribute("aria-hidden", "true");
}

function resetForm() {
    form.reset();
    fInternalId.value = "";
    fDone.checked = false;
    editingId = null;
    modalTitle.textContent = "Thêm công việc";
}

function priorityClass(p) {
    if (p === "high") return "priority-high";
    if (p === "low") return "priority-low";
    return "priority-medium";
}

function priorityLabel(p) {
    if (p === "high") return "Cao";
    if (p === "low") return "Thấp";
    return "TB";
}

function updateTaskSummary() {
    const total = tasks.length;
    const done = tasks.filter((t) => t.done).length;
    statTotal.textContent = String(total);
    statDone.textContent = String(done);
    statTodo.textContent = String(total - done);
}

function escapeHtml(s) {
    const d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
}

function escapeAttr(s) {
    return String(s).replace(/"/g, "&quot;");
}

function renderTasks() {
    taskList.innerHTML = "";
    if (tasks.length === 0) {
        const li = document.createElement("li");
        li.className = "empty-hint";
        li.textContent = "Chưa có công việc. Bấm \"Thêm công việc\" để bắt đầu.";
        taskList.appendChild(li);
        return;
    }

    tasks.forEach((t) => {
        const li = document.createElement("li");
        li.className = "task-card" + (t.done ? " done" : "");
        li.dataset.id = t.id;
        const pr = priorityClass(t.priority);
        const prText = priorityLabel(t.priority);
        li.innerHTML = `
            <p class="task-title">
                ${escapeHtml(t.title)}
                <span class="priority-badge ${pr}">${escapeHtml(prText)}</span>
            </p>
            <p class="task-meta">${escapeHtml(t.description)}</p>
            <p class="task-meta">Hạn: <strong>${escapeHtml(t.dueDate)}</strong></p>
            <div class="task-actions">
                <label>
                    <input type="checkbox" class="toggle-done" data-id="${escapeAttr(t.id)}" ${t.done ? "checked" : ""}>
                    Hoàn thành
                </label>
                <button type="button" class="btn btn-edit" data-action="edit" data-id="${escapeAttr(t.id)}">Sửa</button>
                <button type="button" class="btn btn-delete" data-action="delete" data-id="${escapeAttr(t.id)}">Xóa</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

function handleOpenAdd() {
    resetForm();
    modalTitle.textContent = "Thêm công việc";
    showMessage("");
    openModal();
    fTitle.focus();
}

function fillForm(t) {
    fInternalId.value = t.id;
    fTitle.value = t.title;
    fDescription.value = t.description;
    fDue.value = t.dueDate;
    fPriority.value = t.priority;
    fDone.checked = !!t.done;
}

function handleEdit(id) {
    const t = tasks.find((x) => x.id === id);
    if (!t) return;
    editingId = id;
    modalTitle.textContent = "Cập nhật công việc";
    fillForm(t);
    showMessage("");
    openModal();
}

function handleDelete(id) {
    const t = tasks.find((x) => x.id === id);
    if (!t) return;
    if (!confirm(`Xóa công việc "${t.title}"?`)) return;
    tasks = tasks.filter((x) => x.id !== id);
    saveTasks();
    renderTasks();
    updateTaskSummary();
    showMessage("Đã xóa công việc.");
}

function readForm() {
    return {
        title: fTitle.value.trim(),
        description: fDescription.value.trim(),
        dueDate: fDue.value,
        priority: fPriority.value,
        done: fDone.checked,
    };
}

function handleSubmit(e) {
    e.preventDefault();
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    const data = readForm();

    if (editingId) {
        const idx = tasks.findIndex((x) => x.id === editingId);
        if (idx === -1) return;
        tasks[idx] = { ...tasks[idx], ...data };
        showMessage("Đã cập nhật công việc.");
    } else {
        const id = crypto.randomUUID ? crypto.randomUUID() : "t-" + Date.now();
        tasks.push({ id, ...data });
        showMessage("Đã thêm công việc.");
    }

    saveTasks();
    renderTasks();
    updateTaskSummary();
    closeModal();
    resetForm();
}

taskList.addEventListener("click", (e) => {
    const editBtn = e.target.closest("button[data-action='edit']");
    const delBtn = e.target.closest("button[data-action='delete']");
    if (editBtn) {
        handleEdit(editBtn.getAttribute("data-id"));
        return;
    }
    if (delBtn) {
        handleDelete(delBtn.getAttribute("data-id"));
    }
});

taskList.addEventListener("change", (e) => {
    const cb = e.target.closest(".toggle-done");
    if (!cb) return;
    const id = cb.getAttribute("data-id");
    const t = tasks.find((x) => x.id === id);
    if (!t) return;
    t.done = cb.checked;
    saveTasks();
    renderTasks();
    updateTaskSummary();
    showMessage("Đã cập nhật trạng thái.");
});

btnOpen.addEventListener("click", handleOpenAdd);
btnClose.addEventListener("click", () => {
    closeModal();
    resetForm();
});
btnCancel.addEventListener("click", () => {
    closeModal();
    resetForm();
});
modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
        closeModal();
        resetForm();
    }
});

form.addEventListener("submit", handleSubmit);

document.addEventListener("DOMContentLoaded", () => {
    loadTasks();
    renderTasks();
    updateTaskSummary();
});
