# ITFS Docs

Website tài liệu Self-learning **ITFS (Intentional Thinking Full-Stack)**.

## Package manager

Chỉ dùng **npm**.

- Không dùng `yarn` / không commit `yarn.lock`
- Khi đổi dependency: cập nhật `package.json` + `package-lock.json`

## Yêu cầu

- Node.js `>=20`
- npm

## Cài đặt lần đầu

```bash
npm install
```

Nếu `package-lock.json` đã ổn định:

```bash
npm ci
```

## Chạy local

```bash
npm start
```

Mở docs: http://localhost:3000/ITFS/

## Lệnh chính

```bash
npm start                 # generate markdown + dev server
npm run build             # generate markdown + build → build/
npm run serve             # serve bản đã build
npm run clear             # xóa cache .docusaurus
npm run typecheck         # kiểm tra TypeScript
npm run generate:markdown # xuất Markdown sạch
```

## Deploy

GitHub Actions (`.github/workflows/deploy.yml`):

- Pull request vào `main`: chạy typecheck + build.
- Push vào `main`: build và deploy lên GitHub Pages.

Thiết lập một lần: **Settings → Pages → Source: GitHub Actions**.

## Viết nội dung

### Component có sẵn trong MDX

Đã đăng ký trong `src/theme/MDXComponents.tsx`:

| Component                             | Dùng khi                                                                              |
| ------------------------------------- | ------------------------------------------------------------------------------------- |
| `<DocCardList />`                     | Liệt kê trang cùng cấp. Truyền `items` để tự chọn link                                |
| `<Tabs>` / `<TabItem>`                | Nội dung theo tab                                                                     |
| `<HtmlEmbed src="..." title="..." />` | Demo HTML đặt trong `static/embed/`. Tuỳ chọn: `height` (px, mặc định 420), `caption` |
| `<LevelBadge level="J2" />`           | Level J1-S3. Sai level thì build fail                                                 |
| `<Table …>`                           | Biến thể bảng (xem mục bảng bên dưới)                                                 |

### Bảng: `<Table>`

Chỉ dùng khi cần khác mặc định. Luôn có dòng trống sau thẻ mở và trước thẻ đóng.

```mdx
<Table variant="matrix" caption="Khung chuẩn Skills Matrix" captionHidden>

| Chiều | J1  | J2  |
| ----- | --- | --- |
| ...   |     |     |

</Table>
```

| Prop                      | Dùng khi                                                    |
| ------------------------- | ----------------------------------------------------------- |
| `variant="matrix"`        | Cột đầu là tên hàng và cần đứng yên khi cuộn ngang          |
| `variant="compact"`       | Bảng tra cứu nhiều hàng, cell ngắn                          |
| `caption="..."`           | Bảng cần tên riêng, khác heading phía trên                  |
| `captionHidden`           | Có caption cho screen reader nhưng không hiện trên màn hình |
| `stickyHeader`            | Bảng ≤ 15 hàng nhưng hàng cao, cần header dính              |
| `stack` / `stack={false}` | Ép bật hoặc tắt chế độ card trên mobile                     |
| `nowrap="1,3"`            | Ép cột 1 và 3 không xuống dòng                              |

Sai tên prop / giá trị thì build fail, thông báo kèm số dòng. `nowrap` nhận `"1,3"` hoặc `{[1, 3]}`.

### Content style

- Mỗi trang một `#` (tiêu đề). Nội dung bắt đầu từ `##`.
- Code block luôn ghi ngôn ngữ. Code thuộc file thì có `title="đường/dẫn/file"`. Block > 15 dòng thêm `showLineNumbers`.
- Callout: `:::note` / `info` / `tip` / `warning` / `danger`. Có tiêu đề thì viết `:::tip[Tiêu đề]`. Trích dẫn dùng `>`. Lời giải dùng `<details>`.
- Phím tắt: `<kbd>Ctrl</kbd>`. Hình cần chú thích: `<figure>` + `<figcaption>`.

### Trước khi mở PR

- [ ] `npm run typecheck`, `npm run build` đều pass (link / anchor hỏng sẽ làm build fail).
- [ ] Đã xem trang trên `npm run serve` ở 375 px và 1280 px, cả light và dark.
