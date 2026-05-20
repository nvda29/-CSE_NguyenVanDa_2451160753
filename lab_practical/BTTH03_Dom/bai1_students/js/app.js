/**
 * BTTH03 — Bài 1: Quản lý sinh viên
 * Bạn bổ sung validation (bài về nhà) trong handleSubmit / validateForm.
 */

const STORAGE_KEY = "btth03_students_v1";

/** @type {Array<{id:string, studentId:string, fullName:string, dob:string, className:string, gpa:number, email:string}>} */
let students = [];
/** null = thêm mới; string = đang sửa theo id nội bộ */
let editingId = null;

// --- DOM ---
const tbody = document.querySelector("#student-tbody");
const modalOverlay = document.querySelector("#modal-overlay");
const form = document.querySelector("#student-form");
const modalTitle = document.querySelector("#modal-title");
const messageArea = document.querySelector("#message-area");
const statCount = document.querySelector("#stat-count");
const statAvg = document.querySelector("#stat-avg");

const btnOpen = document.querySelector("#btn-open-form");
const btnClose = document.querySelector("#btn-close-modal");
const btnCancel = document.querySelector("#btn-cancel");

const fInternalId = document.querySelector("#f-internal-id");
const fStudentId = document.querySelector("#f-studentId");
const fFullName = document.querySelector("#f-fullName");
const fDob = document.querySelector("#f-dob");
const fClassName = document.querySelector("#f-className");
const fGpa = document.querySelector("#f-gpa");
const fEmail = document.querySelector("#f-email");

function loadStudents() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        students = raw ? JSON.parse(raw) : [];
        if (!Array.isArray(students)) students = [];
    } catch {
        students = [];
    }
}

function saveStudents() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
}

function showMessage(text, type = "info") {
    messageArea.textContent = text || "";
    messageArea.className = "message-area " + (type === "error" ? "error" : "info");
    if (!text) messageArea.className = "message-area";
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
    editingId = null;
    modalTitle.textContent = "Thêm sinh viên";
}

function updateStatistics() {
    const n = students.length;
    statCount.textContent = String(n);
    if (n === 0) {
        statAvg.textContent = "—";
        return;
    }
    const sum = students.reduce((s, st) => s + Number(st.gpa), 0);
    statAvg.textContent = (sum / n).toFixed(2);
}

function renderStudents() {
    tbody.innerHTML = "";
    if (students.length === 0) {
        const tr = document.createElement("tr");
        tr.className = "empty-row";
        tr.innerHTML =
            '<td colspan="7">Chưa có sinh viên. Bấm &quot;Thêm sinh viên&quot; để bắt đầu.</td>';
        tbody.appendChild(tr);
        return;
    }
    students.forEach((st) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${escapeHtml(st.studentId)}</td>
            <td>${escapeHtml(st.fullName)}</td>
            <td>${escapeHtml(st.dob)}</td>
            <td>${escapeHtml(st.className)}</td>
            <td>${escapeHtml(String(st.gpa))}</td>
            <td>${escapeHtml(st.email)}</td>
            <td>
                <button type="button" class="btn-edit" data-action="edit" data-id="${escapeAttr(st.id)}">Sửa</button>
                <button type="button" class="btn-delete" data-action="delete" data-id="${escapeAttr(st.id)}">Xóa</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function escapeHtml(s) {
    const d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
}

function escapeAttr(s) {
    return String(s).replace(/"/g, "&quot;");
}

function handleOpenAdd() {
    resetForm();
    modalTitle.textContent = "Thêm sinh viên";
    showMessage("");
    openModal();
    fStudentId.focus();
}

function fillFormFromStudent(st) {
    fInternalId.value = st.id;
    fStudentId.value = st.studentId;
    fFullName.value = st.fullName;
    fDob.value = st.dob;
    fClassName.value = st.className;
    fGpa.value = st.gpa;
    fEmail.value = st.email;
}

function handleEdit(id) {
    const st = students.find((x) => x.id === id);
    if (!st) return;
    editingId = id;
    modalTitle.textContent = "Cập nhật sinh viên";
    fillFormFromStudent(st);
    showMessage("");
    openModal();
}

function handleDelete(id) {
    const st = students.find((x) => x.id === id);
    if (!st) return;
    const ok = confirm(`Xóa sinh viên "${st.fullName}" (${st.studentId})?`);
    if (!ok) return;
    students = students.filter((x) => x.id !== id);
    saveStudents();
    renderStudents();
    updateStatistics();
    showMessage("Đã xóa sinh viên.", "info");
}

function readFormObject() {
    return {
        studentId: fStudentId.value.trim(),
        fullName: fFullName.value.trim(),
        dob: fDob.value,
        className: fClassName.value.trim(),
        gpa: parseFloat(fGpa.value),
        email: fEmail.value.trim(),
    };
}

/** TODO bài về nhà: thêm validateForm() — email, điểm, ngày, mã SV, độ dài... */
function validateFormBasic() {
    if (!form.checkValidity()) {
        form.reportValidity();
        return false;
    }
    return true;
}

function handleSubmit(e) {
    e.preventDefault();
    if (!validateFormBasic()) return;

    const data = readFormObject();

    if (editingId) {
        const idx = students.findIndex((x) => x.id === editingId);
        if (idx === -1) return;
        students[idx] = { ...students[idx], ...data };
        showMessage("Đã cập nhật sinh viên.", "info");
    } else {
        const id = crypto.randomUUID ? crypto.randomUUID() : "id-" + Date.now();
        students.push({ id, ...data });
        showMessage("Đã thêm sinh viên mới.", "info");
    }

    saveStudents();
    renderStudents();
    updateStatistics();
    closeModal();
    resetForm();
}

// --- Event delegation: Sửa / Xóa trên bảng ---
tbody.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;
    const id = btn.getAttribute("data-id");
    const action = btn.getAttribute("data-action");
    if (!id) return;
    if (action === "edit") handleEdit(id);
    if (action === "delete") handleDelete(id);
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

// --- Khởi động ---
document.addEventListener("DOMContentLoaded", () => {
    loadStudents();
    renderStudents();
    updateStatistics();
});
