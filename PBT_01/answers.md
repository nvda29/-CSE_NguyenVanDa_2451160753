# PBT_01 - Nguyen Van Da - MSSV 2451160753

---

## PHAN A

### Cau A1 - HTTP va Browser

Nguon: tuan_1_html5/01_introduction_html_universe.md (phần DNS, request/response, render)

1. Thu tu khi vao https://shopee.vn:
   - Nhap URL, trinh duyet phan tich URL
   - DNS lookup: shopee.vn -> IP
   - Ket noi TCP + TLS (HTTPS)
   - Gui HTTP GET request
   - Server tra response (HTML, status 200)
   - Parse HTML -> DOM
   - Tai CSS, JS, anh (request tiep)
   - Render hien thi trang

2. Tab Network: danh sach request, Status Code, thoi gian load, loai file (document, stylesheet, script).

Screenshot: screenshots/A1_network.png (khoanh Status Code, tong load, 1 dong CSS)

---

### Cau A2 - Semantic HTML

Nguon: chuong 04 semantic

SEO thap vi dung div thay semantic, Google va screen reader khong hieu cau truc.

4 loi:
1. div.header -> header
2. div.menu -> nav
3. div.product -> article trong main
4. div.footer -> footer
5. Thieu main bao noi dung chinh
6. div.title -> h2 hoac h3

Code sua: dung header, nav, main, article, footer (xem de bai).

---

### Cau A3 - Block vs Inline

Nguon: 03_block_inline.md

Hien thi:
[Hop 1 - div block, xuong dong]
Text A Text B (span inline, cung dong)
[Hop 2]
Text C Text D
[Hop 3]

Giai thich: div la block chiem ca dong; span va strong la inline tren cung dong.

---

### Cau A4 - Table

Nguon: 05_tables_hyperlinks.md

- thead: tieu de cot
- tbody: du lieu chinh
- tfoot: tong ket / ghi chu

3 ly do khong dung table lam layout:
1. Sai muc dich (table cho du lieu, khong phai layout)
2. Kho responsive mobile
3. SEO va accessibility kem, code kho sua

---

## BAI B3 - LOI DEBUG (debug.html)

Loi 1: DOCTYPE -> <!DOCTYPE html>
Loi 2: thieu lang="vi" tren html
Loi 3: title khong dong -> </title>
Loi 4: charset utf8 -> UTF-8
Loi 5: h1 dong sai </h1>
Loi 6: the a thieu </a>
Loi 7: img src khong ngoac kep, thieu alt
Loi 8: nesting b va p sai -> strong trong p
Loi 9: table thieu thead tbody
Loi 10: 2 the main -> main thu 2 thanh aside
Loi 11: footer p khong dong, thieu dong html
Loi 12: thieu meta viewport

File da sua: debug.html

---

## BAI B4 - shopee.vn

Trang chon: https://shopee.vn

1. Semantic dung: header (logo, search), nav (link), footer (chinh sach).
   Chua tot: nhieu div thay main, article cho san pham.
   Anh: screenshots/B4_semantic.png

2. Table: thong so ky thuat san pham. Co thead/tbody tuy trang.
   Anh: screenshots/B4_table.png

3. Form tim kiem: method GET, input text/search.
   Anh: screenshots/B4_form.png

Validator: screenshots/B4_validator.png (validator.w3.org, upload profile.html)

---

## PHAN C

### Cau C1 - Cau truc trang chi tiet san pham

Da lam trong file: product_structure.html (header, breadcrumb nav+ol, main+article, table thong so, section danh gia, aside san pham tuong tu, footer). Moi the co comment giai thich trong file.

### Cau C2 - Phan bien div vs semantic (khoang 250 tu)

Dong nghiep noi chi can div + class la du — quan diem ngan han.

Ve SEO: Google can header, main, article de hieu noi dung. Chi div + class buoc Google doan, giam do tin cay index.

Ve Accessibility: screen reader dung landmark nav, main. Nguoi khiem thi dieu huong nhanh. Div khong co nghia ngam dinh.

Vi du: trang ban hang dung article cho tung san pham giup rich snippet (gia, danh gia).

Truong hop div hop ly: wrapper layout (container, grid) khi chi can chia bo cuc CSS.

Ket luan: semantic cho noi dung, div cho layout — khong thay the nhau hoan toan.

---

## PHAN D - VIDEO

File: videos/PBT01_NguyenVanDa_2451160753.mp4
Link YouTube/Drive (neu file lon): ___________________

Checklist: gioi thieu ten MSSV, webcam, go tay, giai thich header/nav/article/figure/lazy, cuoi video mo DevTools.

---

## SCREENSHOTS DA NOP

- A1_network.png
- B4_semantic.png
- B4_table.png
- B4_form.png
- B4_validator.png
- profile.png
- products.png