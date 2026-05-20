(function () {
    const STORAGE_KEY = "btth02_devices";
    let lang = localStorage.getItem("btth02_lang") || "vi";
    let devices = [];
    let editingId = null;
    let deviceModal = null;

    const i18n = {
        vi: {
            title: "Quan ly Thiet bi May tinh",
            addDevice: "Them Thiet bi",
            searchPlaceholder: "Tim kiem thiet bi...",
            empty: "Khong tim thay thiet bi.",
            modalAdd: "Them Thiet bi",
            modalEdit: "Sua Thiet bi",
            active: "Hoat dong",
            inactive: "Khong hoat dong",
            edit: "Sua",
            delete: "Xoa",
            sn: "SN",
            confirmDelete: "Ban co chac muon xoa?",
            types: {
                Laptop: "Laptop",
                "May ban": "May ban",
                "May in": "May in",
                "May chu": "May chu",
                "Man hinh": "Man hinh"
            }
        },
        en: {
            title: "Computer Equipment Management",
            addDevice: "Add Equipment",
            searchPlaceholder: "Search equipment...",
            empty: "No equipment found.",
            modalAdd: "Add Equipment",
            modalEdit: "Edit Equipment",
            active: "Active",
            inactive: "Inactive",
            edit: "Edit",
            delete: "Delete",
            sn: "SN",
            confirmDelete: "Delete this device?",
            types: {
                Laptop: "Laptop",
                "May ban": "Desktop",
                "May in": "Printer",
                "May chu": "Server",
                "Man hinh": "Monitor"
            }
        }
    };

    const defaultDevices = [
        { id: "1", name: "Dell OptiPlex 7090", serial: "DL7090001", type: "May ban", status: "active", purchaseDate: "", warranty: "1 nam", email: "" },
        { id: "2", name: "HP LaserJet Pro M404", serial: "HP404001", type: "May in", status: "active", purchaseDate: "", warranty: "1 nam", email: "" },
        { id: "3", name: "Lenovo ThinkPad X1", serial: "LN-X1-001", type: "Laptop", status: "active", purchaseDate: "", warranty: "2 nam", email: "" },
        { id: "4", name: "Ubuntu Server 20.04", serial: "UB-SRV-001", type: "May chu", status: "active", purchaseDate: "", warranty: "3 nam", email: "" },
        { id: "5", name: "LG UltraWide 34WN80C", serial: "LG34WN001", type: "Man hinh", status: "inactive", purchaseDate: "", warranty: "1 nam", email: "" },
        { id: "6", name: "LG 27GP850", serial: "LG27GP85001", type: "Man hinh", status: "active", purchaseDate: "", warranty: "1 nam", email: "" }
    ];

    function t(key) {
        return i18n[lang][key] ?? key;
    }

    function loadDevices() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            devices = saved ? JSON.parse(saved) : [...defaultDevices];
            if (!Array.isArray(devices) || devices.length === 0) {
                devices = [...defaultDevices];
            }
        } catch (e) {
            devices = [...defaultDevices];
        }
    }

    function saveDevices() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(devices));
    }

    function typeLabel(type) {
        return i18n[lang].types[type] || type;
    }

    function applyLanguage() {
        document.getElementById("page-title").textContent = t("title");
        document.getElementById("btn-add-device").textContent = t("addDevice");
        document.getElementById("search-input").placeholder = t("searchPlaceholder");
        document.getElementById("empty-state").textContent = t("empty");
        document.getElementById("btn-lang-vi").classList.toggle("active", lang === "vi");
        document.getElementById("btn-lang-en").classList.toggle("active", lang === "en");
        fillSelectOptions();
        renderDevices();
    }

    function fillSelectOptions() {
        const typeSelect = document.getElementById("f-type");
        const statusSelect = document.getElementById("f-status");
        const warrantySelect = document.getElementById("f-warranty");

        typeSelect.innerHTML = Object.keys(i18n.vi.types)
            .map((v) => `<option value="${v}">${typeLabel(v)}</option>`)
            .join("");

        statusSelect.innerHTML =
            `<option value="active">${t("active")}</option><option value="inactive">${t("inactive")}</option>`;

        const warranties = lang === "vi" ? ["1 nam", "2 nam", "3 nam"] : ["1 year", "2 years", "3 years"];
        warrantySelect.innerHTML = warranties.map((w) => `<option value="${w}">${w}</option>`).join("");
    }

    function getFilteredDevices() {
        const q = document.getElementById("search-input").value.trim().toLowerCase();
        if (!q) return devices;
        return devices.filter(
            (d) =>
                d.name.toLowerCase().includes(q) ||
                d.serial.toLowerCase().includes(q) ||
                (d.type && d.type.toLowerCase().includes(q))
        );
    }

    function renderDevices() {
        const grid = document.getElementById("device-grid");
        const empty = document.getElementById("empty-state");
        const list = getFilteredDevices();

        if (list.length === 0) {
            grid.innerHTML = "";
            empty.classList.remove("d-none");
            return;
        }

        empty.classList.add("d-none");
        grid.innerHTML = list
            .map(
                (d) => `
        <div class="col-md-4 col-sm-6">
            <div class="device-card">
                <div class="device-name">${escapeHtml(d.name)}</div>
                <div class="device-sn">${t("sn")}: ${escapeHtml(d.serial)}</div>
                <div class="device-type">${escapeHtml(typeLabel(d.type))}</div>
                <div class="device-status ${d.status === "active" ? "active" : "inactive"}">${d.status === "active" ? t("active") : t("inactive")}</div>
                <div class="card-actions">
                    <a href="#" data-action="edit" data-id="${d.id}">${t("edit")}</a>
                    <a href="#" data-action="delete" data-id="${d.id}">${t("delete")}</a>
                </div>
            </div>
        </div>`
            )
            .join("");
    }

    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function openModal(mode, device) {
        editingId = device ? device.id : null;
        document.getElementById("deviceModalLabel").textContent = mode === "add" ? t("modalAdd") : t("modalEdit");
        document.getElementById("device-id").value = device?.id || "";
        document.getElementById("f-name").value = device?.name || "";
        document.getElementById("f-serial").value = device?.serial || "";
        document.getElementById("f-type").value = device?.type || "Laptop";
        document.getElementById("f-purchase-date").value = device?.purchaseDate || "";
        document.getElementById("f-warranty").value = device?.warranty || "1 nam";
        document.getElementById("f-email").value = device?.email || "";
        document.getElementById("f-status").value = device?.status || "active";
        deviceModal.show();
    }

    function handleSave(e) {
        e.preventDefault();
        const form = document.getElementById("device-form");
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const payload = {
            id: editingId || String(Date.now()),
            name: document.getElementById("f-name").value.trim(),
            serial: document.getElementById("f-serial").value.trim(),
            type: document.getElementById("f-type").value,
            purchaseDate: document.getElementById("f-purchase-date").value,
            warranty: document.getElementById("f-warranty").value,
            email: document.getElementById("f-email").value.trim(),
            status: document.getElementById("f-status").value
        };

        if (editingId) {
            const idx = devices.findIndex((d) => d.id === editingId);
            if (idx !== -1) devices[idx] = payload;
        } else {
            devices.push(payload);
        }

        saveDevices();
        renderDevices();
        deviceModal.hide();
    }

    function init() {
        const modalEl = document.getElementById("deviceModal");
        if (typeof bootstrap !== "undefined" && modalEl) {
            deviceModal = new bootstrap.Modal(modalEl);
        }

        loadDevices();
        fillSelectOptions();
        applyLanguage();

        document.getElementById("btn-add-device").addEventListener("click", () => openModal("add"));
        document.getElementById("device-form").addEventListener("submit", handleSave);
        document.getElementById("search-input").addEventListener("input", renderDevices);

        document.getElementById("device-grid").addEventListener("click", (e) => {
            const link = e.target.closest("[data-action]");
            if (!link) return;
            e.preventDefault();
            const action = link.dataset.action;
            const id = link.dataset.id;
            const device = devices.find((d) => d.id === id);
            if (!device) return;
            if (action === "edit") openModal("edit", device);
            if (action === "delete" && confirm(t("confirmDelete"))) {
                devices = devices.filter((d) => d.id !== id);
                saveDevices();
                renderDevices();
            }
        });

        document.getElementById("btn-lang-vi").addEventListener("click", () => {
            lang = "vi";
            localStorage.setItem("btth02_lang", lang);
            applyLanguage();
        });

        document.getElementById("btn-lang-en").addEventListener("click", () => {
            lang = "en";
            localStorage.setItem("btth02_lang", lang);
            applyLanguage();
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();