const [state, setState] = useState(5);

- state: giá trị của trạng thái
- setState: cập nhật giá trị của trạng thái


== : so sánh về giá trị
===: so sánh cả về giá trị và kiểu dữ liệu


- props: là 1 object chứa các giá trị đầu vào của 1 component được truyền từ component cha

- tạo dự án, tạo 1 state giá trị khởi tạo ban đầu là 'red', render ra UI 
nếu state là 'red' thì render ra thẻ h1 có nội dung là 'Hello', nếu state 
là 'green' thì render ra chữ 'Xin chào'.
