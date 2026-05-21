# PBT_03 - Nguyen Van Da - MSSV 2451160753

---

## PHAN A

### A1 - 3 cach nhung CSS

Nguon: tuan_2_css_core/08_introduction_css.md

| Cach | Vi du | Uu diem | Nhuoc diem | Khi nao dung |
|------|-------|---------|------------|--------------|
| Inline | `<p style="color:red">` | Nhanh, 1 element | Kho bao tri, lap code | Email HTML, test nhanh |
| Internal | `<style>` trong `<head>` | 1 file HTML, khong request them | Khong tai su dung trang khac | Trang don, demo nho |
| External | `<link rel="stylesheet" href="style.css">` | Tai su dung, cache, de sua | Them 1 HTTP request | Du an that, nhieu trang |

**Cung 1 element co ca 3:** Inline style thang (tru khi co !important trong file CSS). Thu tu: author !important > inline > id > class > element.

---

### A2 - Selectors (du doan)

Nguon: 09_css_selectors.md

1. `h1` -> **ShopTLU**
2. `.price` -> **25.990.000 VND** va **45.990.000 VND** (ca 2 the p.price)
3. `#app header` -> **header** (chua h1 ShopTLU + nav)
4. `nav a:first-child` -> link **Home**
5. `.product.featured h2` -> **MacBook Pro**
6. `article > p` -> 4 the p con truc tiep: 2 gia + 2 mo ta (iPhone va MacBook)
7. `a[href="/"]` -> link **Home**
8. `.top-bar.dark h1` -> **ShopTLU**

Kiem chung: mo `selectors_test.html` - phan tu duoc chon co mau nen.

Screenshot: screenshots/A2_selectors.png

---

### A3 - Box Model tinh toan

Nguon: 11_box_model.md

**Box 1 (content-box):**
- Chieu rong hien thi = 400 + 20*2 + 5*2 = **450px**
- Khong gian chiem (cong margin) = 450 + 10*2 = **470px**

**Box 2 (border-box):**
- Chieu rong hien thi = **400px**
- Content thuc = 400 - 40 - 10 = **350px**
- Khong gian chiem = 400 + 20 = **420px** (margin ngoai)

**Margin collapse (25px + 40px):** khoang cach = **40px** (lay max, khong cong 65px vi margin doc collapse)

**Nang cao (-10px + 40px):** khoang cach = **30px** (40 + (-10))

**B2 do DevTools (ban dien sau khi do):**
```
Hop 1 content-box: chieu rong thuc te = _350__ px
Hop 2 border-box: chieu rong thuc te = __300_ px
```
Screenshot: screenshots/B2_box1_computed.png, B2_box2_computed.png

---

### A4 - Specificity

Nguon: 10_inheritance_cascading.md

| Rule | Selector | a,b,c | Score |
|------|----------|-------|-------|
| A | p | 0,0,1 | 1 |
| B | .price | 0,1,0 | 10 |
| C | #main-price | 1,0,0 | 100 |
| D | p.price | 0,1,1 | 11 |

1. Element mau **do** (Rule C thang)
2. Them `style="color: orange"` -> mau **cam** (inline thang stylesheet)
3. Rule A them `!important` -> mau **den** (!important trong stylesheet thang inline khong co !important)

---

## PHAN B

### B1 - Selectors trong style.css

1. `*` universal
2. `body`, `header` element
3. `.active`, `nav a` class + descendant
4. `#contact` id
5. `nav a:hover`, `tr:nth-child(even)`, `tr:hover` pseudo-class
6. `thead th`, `tbody tr` descendant

### B3 - 10 rules specificity.html

| # | Rule | a,b,c | Mau |
|---|------|-------|-----|
| 1 | p | 0,0,1 | xam |
| 2 | .highlight | 0,1,0 | cyan |
| 3 | .text | 0,1,0 | xanh |
| 4 | p.text | 0,1,1 | xanh la |
| 5 | .text.highlight | 0,2,0 | tim |
| 6 | #demo | 1,0,0 | do |
| 7 | p#demo | 1,0,1 | cam |
| 8 | #demo.highlight | 1,1,0 | hong |
| 9 | #demo.text.highlight | 1,2,0 | vang |
| 10 | p#demo.text.highlight | 1,2,1 | **den (THANG)** |

Doi thu tu rules trong CSS: neu cung specificity thi rule **viet sau** thang. Rule 10 luon manh nhat nen mau khong doi khi doi thu tu cac rule yeu hon.

Screenshot: screenshots/B3_specificity.png

---

## PHAN C

### C1 - Debug layout

**Chieu rong thuc (content-box):**
- Sidebar: 300 + 40 + 2 = **342px**
- Content: 660 + 60 + 2 = **722px**
- Tong: **1064px > 960px** -> content bi day xuong dong moi

**Cach sua 1:** `box-sizing: border-box` (file debug_layout - fix-borderbox)

**Cach sua 2:** Giam width: sidebar 258px, content 598px (file debug_layout - fix-width)

Screenshot: screenshots/C1_debug_layout.png

### C2 - Cascade (du doan)

1. San pham A (h2): font-size **20px** (.card .title), color **green** (.highlight !important thang #featured red)
2. Mo ta SP A (p): color **blue** (inherit tu .card)
3. San pham B (h2): font-size **20px**, color **blue** (inherit tu .card, khong co #featured)
4. Mo ta SP B (p.highlight): color **green** (!important)

Kiem chung: `cascade_verify.html`

Screenshot: screenshots/C2_cascade.png

---

## PHAN D - VIDEO

File: videos/PBT03_NguyenVanDa_2451160753.mp4
Link (neu can): ___________________

---

## SCREENSHOTS CAN NOP

- A2_selectors.png
- B2_box1_computed.png
- B2_box2_computed.png
- B2_layout_overflow.png
- B2_layout_fit.png
- B3_specificity.png
- C1_debug_layout.png
- C2_cascade.png
- profile_styled.png (tuy chon)
