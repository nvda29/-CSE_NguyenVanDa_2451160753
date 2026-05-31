Bai 0.1 — Cau hoi
1. File .jsx khac gi file .js?
File .jsx cho phep viet JSX (HTML ben trong JavaScript).
File .js la JavaScript thuan, khong viet JSX truc tiep (tru khi dung React.createElement).
Trong project React + Vite, component thuong dat ten .jsx de ro rang day la component co JSX.
Vi du App.jsx co JSX: function App() { return

Xin chao
}
Vi du App.js khong co JSX: function App() { return React.createElement('h1', null, 'Xin chao') }

2. Tai sao phai export default App?
export default App de xuat component ra ngoai file.
File khac (vi du main.jsx) can import component do de hien thi len man hinh.
Luong hoat dong: App.jsx export default → main.jsx import App → render()
Neu khong export thi file khac khong lay duoc component App.
3. Thu xoa export default → chuyen gi xay ra?
Trinh duyet se bao loi khi chay app.
main.jsx khong import duoc App → React khong render duoc → man hinh trang hoac loi trong Console.
Loi thuong gap: Uncaught SyntaxError: The requested module does not provide an export named 'default'
