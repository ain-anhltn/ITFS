# TÀI LIỆU TỔNG HỢP KHUNG NĂNG LỰC ITFS (ITFS MATRIX & ROADMAP)

---

## PHẦN I: TỔNG QUAN KHUNG NĂNG LỰC ITFS

### 1. Khái niệm & Triết lý Cốt lõi

**ITFS (Intentional Thinking Full-Stack)** là khung đánh giá năng lực và lộ trình phát triển chuyên môn chuẩn hóa cho kỹ sư phần mềm. ITFS định hình tư duy phát triển phần mềm toàn diện, dịch chuyển trọng tâm từ việc "viết code theo chỉ dẫn" sang **Chủ động Tư duy (Intentional Thinking)**, làm chủ công nghệ và điều phối công cụ AI để tạo ra giá trị kinh doanh bền vững.

Khung năng lực dựa trên 3 trụ cột phát triển chính:

- **Chuyên môn Kỹ thuật (Technical Mastery):** Gồm 11 Trụ cột kỹ năng từ nền tảng lập trình, kiến trúc, dữ liệu, bảo mật cho đến quy trình và hiểu biết nghiệp vụ domain.
- **AI Fluency (Năng lực Điều phối AI):** Tiến trình tiến hóa từ _Consumer_ (dùng AI cơ bản) → _Orchestrator_ (điều phối AI workflow) → _Strategist_ (kiến tạo văn hóa & quy chuẩn AI).
- **Requirement Thinking (Tư duy Yêu cầu):** Tiến trình tiến hóa từ _Clarify_ (làm rõ yêu cầu) → _Impact Analysis_ (phân tích tác động) → _Trade-off Analysis_ (đánh giá đánh đổi & ra quyết định).

---

### 2. Cấu trúc Level Bands

Khung ITFS chia lộ trình phát triển thành 3 Band với 9 Level, chiếu tương ứng theo **Thang đo Tư duy Bloom (Bloom's Taxonomy)**:

| Band                 | Level  | Tương ứng Bloom                    | Ý nghĩa & Phạm vi Tác động                                                                                                                      |
| :------------------- | :----- | :--------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Junior**           | **J1** | **REMEMBER** (Ghi nhớ)             | Thực thi task đơn lẻ theo hướng dẫn; viết code đúng syntax, tuân thủ convention.                                                                |
|                      | **J2** | **UNDERSTAND** (Hiểu, giải thích)  | Hiểu code flow, kết nối giữa các task; giải thích được tại sao áp dụng convention.                                                              |
|                      | **J3** | **UNDERSTAND → APPLY**             | Tự implement feature ít cần guidance; bắt đầu mở rộng năng lực Cross-stack (FE ↔ BE).                                                           |
| **Middle**           | **M1** | **APPLY** (Áp dụng thành thạo)     | Own nhóm/module feature end-to-end; trình bày ≥2 giải pháp kèm ưu/nhược điểm.                                                                   |
| _(Dual-Track từ M2)_ | **M2** | **APPLY → ANALYZE**                | **Management:** Review kiến trúc, phòng ngừa over-engineering.<br>**Expert:** Phân tích sâu hệ thống, master nhiều stack, làm chủ side-effects. |
|                      | **M3** | **ANALYZE** (Phân tích hệ thống)   | **Management:** Định hình quy trình & chuẩn mực cho Line/Project.<br>**Expert:** Go-to person cho các quyết định kỹ thuật phức tạp toàn dự án.  |
| **Senior**           | **S1** | **ANALYZE → EVALUATE**             | Đánh giá & phê duyệt giải pháp/tech stack cho nhiều dự án (Multi-project/Multi-line).                                                           |
|                      | **S2** | **EVALUATE** (Đánh giá, lập chuẩn) | Thiết lập chuẩn mực công nghệ, quy trình bảo mật & chất lượng cấp Khối/Phòng (Department).                                                      |
|                      | **S3** | **EVALUATE → CREATE**              | Sáng tạo hệ thống/framework mới; kiến tạo tầm nhìn & văn hóa công nghệ toàn Tổ chức.                                                            |

---

### 3. Bảng Ma trận Cấp độ Chung (General Competency Matrix)

| Cấp độ | Bloom's Anchor     | Scope                | Role               | AI Fluency (Hành vi)                                                                              | Requirement Thinking (Hành vi)                                                                              |
| :----- | :----------------- | :------------------- | :----------------- | :------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------- |
| **J1** | REMEMBER           | Task đơn lẻ          | Member             | Dùng AI tools cơ bản; nhận biết AI có thể trả về thông tin sai hoặc vi phạm convention.           | Nhận biết khi requirement chưa rõ ràng; biết chủ động đặt câu hỏi hỏi ai.                                   |
| **J2** | UNDERSTAND         | Kết nối tasks        | Member             | Hiểu hiện tượng hallucination; đọc, giải thích và kiểm tra logic code do AI sinh ra.              | Chủ động đặt câu hỏi làm rõ khi mơ hồ; dùng AI gợi ý danh sách câu hỏi clarify.                             |
| **J3** | UNDERSTAND → APPLY | Bản thân → Nhóm      | Member             | Viết Prompt có Context Packet; kiểm tra & validate output của AI có hệ thống trước khi commit.    | Clarify scope (In/Out of scope) trước khi code; kiểm tra tác động cơ bản lên module liên quan.              |
| **M1** | APPLY              | Own nhóm             | Member             | Thiết lập workflow Req → Design → Code → Test; phân định rõ task nào cho AI vs Human.             | Không code khi còn mơ hồ; phân tích tác động trước khi code; trình bày ≥2 options kèm ưu/nhược điểm.        |
| **M2** | APPLY → ANALYZE    | Cross-team           | Member / Line Lead | Kỹ thuật Prompt engineering phức tạp; đánh giá AI output patterns; coach team kỷ luật AI.         | Coach team cách clarify; phân tích phụ thuộc cross-module và các tác động phụ (side-effects) tiềm ẩn.       |
| **M3** | ANALYZE            | Line / Project       | Line Lead          | Phân tích giới hạn của AI đối với domain nghiệp vụ; thiết lập AI Guidelines cho dự án.            | Nâng cao chất lượng requirement toàn project; phân tích trade-off cho stakeholders dựa trên data.           |
| **S1** | ANALYZE → EVALUATE | Multi Line / Project | LL / Line Manager  | Đánh giá tác động của AI-augmented dev practices trên nhiều dự án; thúc đẩy văn hóa AI.           | Đánh giá toàn diện requirement, impact và trade-off trên nhiều dự án song song.                             |
| **S2** | EVALUATE           | Department           | Line Manager       | Thiết lập AI Guidelines & Standards cấp Khối; đảm bảo AI gia tăng năng suất mà không tạo lỗ hổng. | Thiết lập standards về quản lý yêu cầu; tối ưu hóa bài toán cân bằng giữa Chi phí - Thời gian - Chất lượng. |
| **S3** | EVALUATE → CREATE  | Organization         | LM / General Mgr   | Kiến tạo văn hóa và SDLC framework hỗ trợ AI-augmented cho toàn bộ Tổ chức.                       | Kiến tạo văn hóa Requirement Engineering & định hình phương pháp ra quyết định cho doanh nghiệp.            |

---

## PHẦN II: CHI TIẾT 11 TRỤ CỘT CHUYÊN MÔN (11 PILLARS)

---

### TRỤ CỘT 01: PROGRAMMING & FRAMEWORKS (Mã: 01 | Loại: Foundation)

> **Sứ mệnh:** Viết code đúng. Dùng framework chuẩn. Từ thực thi đến kiến tạo công nghệ.

#### Lộ trình học 9 giai đoạn:

1. **Problem Solving Basics:** Decomposition, inputs/outputs, constraints — tư duy giải quyết bài toán trước khi gõ code.
2. **Code Foundations:** Biến, hàm, kiểu dữ liệu, luồng điều khiển — thể hiện logic bằng mã nguồn.
3. **Data & State:** Data models, state management, persistence — cấu trúc dữ liệu quyết định hành vi ứng dụng.
4. **Program Structure:** Modules, tái sử dụng, dependencies — cấu trúc giữ cho codebase dễ mở rộng.
5. **Runtime & Execution:** Luồng thực thi, bất đồng bộ (async), bất đồng thời (concurrency).
6. **Application Flow:** Routing, validation, authentication, lifecycle — điều phối luồng ứng dụng.
7. **Framework Fundamentals:** Conventions, abstractions, design patterns — hiểu lý do framework tồn tại và quy chuẩn chung.
8. **Integration & Trade-offs:** APIs, databases, message queues, stack selection — đánh giá ranh giới và sự đánh đổi.
9. **Quality, Scale & Evolution:** Testing, security, performance, deployment — đảm bảo phần mềm sống sót qua thay đổi.

#### Ma trận năng lực 9 cấp độ (Kỹ năng & AI Fluency):

- **J1 (REMEMBER):** Viết code đúng syntax theo hướng dẫn. Nhận biết cấu trúc project & conventions. _AI Fluency:_ Dùng AI hỗ trợ coding cơ bản; nhận biết khi AI vi phạm convention.
- **J2 (UNDERSTAND):** Giải thích code flow, logic module; đọc hiểu codebase người khác; phân biệt code "chạy được" nhưng sai approach. _AI Fluency:_ Viết prompt có context; phát hiện AI dùng thư viện/pattern không phù hợp.
- **J3 (APPLY):** Tự implement feature ít guidance; áp dụng clean code nhất quán; self-review trước khi submit; bắt đầu cross-stack (FE ↔ BE). _AI Fluency:_ Cung cấp Context Packet trước khi prompt; review & refactor AI output.
- **M1 (APPLY):** Own module/feature end-to-end; thành thạo ≥1 stack, làm việc tốt ở secondary stack; code review chất lượng; refactor có hệ thống. _AI Fluency:_ Chịu trách nhiệm chất lượng AI code; đảm bảo DoR/DoD trước khi merge.
- **M2 (ANALYZE):** [Mgmt] Review code chiến lược, phân tích trade-off chọn tech stack. [Expert] Phân tích sâu internals của framework, viết shared libraries, master nhiều stacks. _AI Fluency:_ Phát hiện khi team skip quality gates do lạm dụng AI.
- **M3 (ANALYZE):** [Mgmt] Định nghĩa coding standards cho Line/Project. [Expert] Phân tích công nghệ mới, làm chỗ dựa kỹ thuật (go-to person). _AI Fluency:_ Ban hành AI coding guidelines cho dự án.
- **S1 (EVALUATE):** [Mgmt] Đánh giá tech stack decisions across projects. [Expert] Đánh giá emerging frameworks, tư vấn kỹ thuật cross-project. _AI Fluency:_ Đánh giá AI-augmented dev practices trên các dự án.
- **S2 (EVALUATE):** [Mgmt] Thiết lập technology standards & hiring bar cho Department. [Expert] Đánh giá technology roadmap. _AI Fluency:_ Lập chuẩn AI-augmented development cho Department.
- **S3 (CREATE):** [Mgmt] Tạo dựng technology vision cho tổ chức. [Expert] Sáng tạo frameworks/tools mới, đóng góp cho ngành. _AI Fluency:_ Kiến tạo AI-augmented development culture cho tổ chức.

---

### TRỤ CỘT 02: SOFTWARE DESIGN & ARCHITECTURE (Mã: 02 | Loại: Foundation)

> **Sứ mệnh:** Thiết kế đúng. Kiến trúc vững. Từ sử dụng pattern đến định hình hệ thống. (Trọng tâm: Impact Analysis + Trade-off Analysis).

#### Lộ trình học 9 giai đoạn:

1. **Clean Code:** Naming, structure, readability — mã nguồn rõ ràng giúp giảm bug và dễ thay đổi.
2. **Programming Paradigms:** Procedural, OOP, Functional — các tư duy tổ chức mã nguồn khác nhau.
3. **Object-Oriented Programming:** Abstraction, Encapsulation, Inheritance, Polymorphism.
4. **Design Principles:** SOLID, DRY, YAGNI, Composition over Inheritance.
5. **Design Patterns:** Creational, Structural, Behavioral patterns (Singleton, Factory, Observer, Strategy,...).
6. **Architectural Principles:** Coupling, Cohesion, Module Boundaries, Policy vs Detail.
7. **Architectural Styles:** Layered, Client-Server, Monolithic, Component-based architecture.
8. **Architectural Patterns:** MVC, MVVM, Domain-Driven Design (DDD).
9. **Enterprise Patterns:** DTO, Repository, Mapper, Value Object, Transaction Script.

#### Ma trận năng lực 9 cấp độ:

- **J1:** Nhận biết kiến trúc MVC/MVVM, OOP cơ bản, nhận biết code thuộc layer nào. _AI:_ Nhận biết khi AI đặt code sai layer.
- **J2:** Giải thích lý do tách layers, dependency giữa các modules; hiểu Singleton, Factory, SOLID. _AI:_ Phát hiện AI suggest pattern không hợp context.
- **J3:** Áp dụng Singleton, Factory, DI; thiết kế module tuân thủ SOLID; vẽ Component Diagram. _AI:_ Dùng AI gợi ý pattern nhưng tự quyết định kiến trúc.
- **M1:** Thiết kế kiến trúc feature/module end-to-end; áp dụng Observer, Strategy, Decorator; trình bày ≥2 design options kèm pros/cons. _AI:_ Tạo Implementation Plan trước khi để AI sinh code.
- **M2:** [Mgmt] Phân tích design decisions, phòng ngừa over/under-engineering. [Expert] Event-Driven, CQRS, Pub/Sub, Monolith vs Microservices. _AI:_ Đóng vai trò màng lọc ngăn AI lạm dụng sự phức tạp (bias toward complexity).
- **M3:** [Mgmt] Quản lý Technical Debt, viết ADRs, align architecture với mục tiêu business. [Expert] Thiết kế kiến trúc toàn project (scalability, failover, trade-offs). _AI:_ Định hướng AI phù hợp với business goals.
- **S1:** Đánh giá kiến trúc trên nhiều dự án; chuẩn hóa quy trình Architecture Review. _AI:_ Đánh giá AI architecture dựa trên ràng buộc thực tế.
- **S2:** Thiết lập Architecture Standards & Governance; thành lập Architecture Review Board. _AI:_ Xây dựng chuẩn mực kiến trúc hỗ trợ AI ở cấp Department.
- **S3:** Tạo dựng Governance Framework & Enterprise Architecture Vision cho toàn tổ chức. _AI:_ Sáng tạo AI-augmented architecture design process.

---

### TRỤ CỘT 03: DATA & DATABASE (Mã: 03 | Loại: Foundation)

> **Sứ mệnh:** Mô hình hóa dữ liệu. Tối ưu truy vấn. Từ query cơ bản đến thiết kế data platform.

#### Lộ trình học 9 giai đoạn:

1. **Query Basics:** CRUD, data types, database schemas, ORM cơ bản.
2. **Data Modeling Fundamentals:** Normalization (1NF-3NF), quan hệ (1-1, 1-n, n-n), constraints, SQL vs NoSQL.
3. **Schema & Query Optimization:** Indexing, profiling query, database migrations, Redis caching cơ bản.
4. **Advanced Data Modeling:** Cấu trúc dữ liệu phức tạp, composite indexes, integrity rules, rollback migration.
5. **Data Systems & Caching:** RDBMS, Document, Key-Value, In-memory caching, Aggregations.
6. **Project Data Architecture:** Data conventions, scaling strategies, Search engines, Polyglot Persistence.
7. **Database Platform Selection:** Đánh giá tính phù hợp của nền tảng dựa trên độ trễ, tính nhất quán và quy mô.
8. **Migration, Performance & Governance:** Migration rủi ro cao, hard query tuning, review gates.
9. **Enterprise Data Architecture:** Reference Data Architecture, Multi-platform strategy, Enterprise Data Platform.

#### Ma trận năng lực 9 cấp độ:

- **J1:** Viết câu lệnh CRUD cơ bản, nhận biết schema và kiểu dữ liệu, dùng ORM theo mẫu. _AI:_ Dùng AI sinh query; nhận biết khi câu lệnh trả kết quả sai.
- **J2:** Hiểu RDBMS (normalization, constraints), giải thích Indexing, SQL vs NoSQL, Data Flow. _AI:_ Phát hiện câu lệnh SQL không tối ưu do AI viết (N+1 query, thiếu index).
- **J3:** Thiết kế schema cho feature đơn giản; optimize query bằng Indexing & Profiler; viết Migration script. _AI:_ Validate kết quả query AI bằng Profiler trên dữ liệu thực.
- **M1:** Thiết kế Data Model phức tạp; làm việc thành thạo với RDBMS + ≥1 NoSQL; dùng Composite Index và Redis Caching. _AI:_ AI tạo draft schema, engineer validate lại theo quy tắc nghiệp vụ.
- **M2:** [Mgmt] Review quyết định Data Model, phân tích nghẽn dữ liệu. [Expert] Chuyên sâu Redis, MongoDB Aggregation, Cache Invalidation strategy. _AI:_ Đánh giá giải pháp dữ liệu của AI dưới góc độ sản xuất (production constraints).
- **M3:** [Mgmt] Định hình Data Architecture cho toàn project. [Expert] ElasticSearch Custom Tokenizer, Polyglot Persistence, High-traffic Data Model. _AI:_ Đặt ra quy định cấm AI tự ý can thiệp các thao tác dữ liệu nguy hiểm.
- **S1:** Phê duyệt lựa chọn Database; thiết kế kiến trúc dữ liệu phân tán, Replication, Clustering, CDC. _AI:_ Đánh giá sự đánh đổi Định lý CAP mà AI không tự phân tích được.
- **S2:** Thiết lập Data Governance & Standards cấp Khối; xây dựng Data Lake/Warehouse/Mart. _AI:_ Đặt Quality Gates bắt buộc kiểm duyệt schema do AI tạo ra.
- **S3:** Xây dựng Chiến lược Dữ liệu Doanh nghiệp (Enterprise Data Strategy) & Kiến tạo AI-augmented Data Engineering.

---

### TRỤ CỘT 04: API DESIGN & INTEGRATION (Mã: 04 | Loại: Foundation)

> **Sứ mệnh:** Thiết kế API rõ ràng. Kết nối vững. Từ consume API đến kiến tạo platform.

#### Lộ trình học 9 giai đoạn:

1. **API Basics:** HTTP Methods, Status Codes, Request/Response body, API Clients (Postman/Insomnia).
2. **API Principles:** Nguyên tắc RESTful, Auth (Header/Token), Versioning, REST vs GraphQL.
3. **API Contract Design:** Thiết kế API Contract, Validation, Error Handling chuẩn, Swagger/OpenAPI spec.
4. **Advanced API Contracts:** Backward compatibility, OAuth2/SSO, Pagination, Rate Limiting.
5. **API Patterns & Performance:** REST, GraphQL, gRPC, WebSockets/Real-time APIs.
6. **Project API Architecture:** API Gateways, Versioning Strategy, Service-to-Service Integration.
7. **Integration Strategy:** Microservices integration patterns, API Security, Reliability.
8. **API Governance & Platforms:** Chuẩn hóa API-first culture, Developer Experience (DX), Quality Gates.
9. **Enterprise API Strategy:** Developer Portals, Enterprise API Ecosystem, AI-augmented API Workflows.

#### Ma trận năng lực 9 cấp độ:

- **J1:** Nhận biết HTTP Methods, Status Codes; gọi API theo tài liệu bằng Postman. _AI:_ Dùng AI sinh code gọi API; nhận biết khi AI dùng sai Method/Status Code.
- **J2:** Hiểu nguyên tắc RESTful, JWT/Authentication, REST vs GraphQL, API Versioning. _AI:_ Phát hiện AI vi phạm chuẩn quy ước RESTful.
- **J3:** Thiết kế và implement API Contract; xử lý Input Validation & Error Handling; viết docs Swagger/OpenAPI. _AI:_ AI sinh implementation từ Contract, engineer kiểm tra business logic & edge cases.
- **M1:** Thiết kế API Contract phức tạp đảm bảo Backward Compatibility; tích hợp OAuth2/SSO; phân trang & Rate Limiting. _AI:_ AI viết code chi tiết từ Spec, engineer làm chủ thiết kế Contract & phối hợp FE-BE.
- **M2:** [Mgmt] Review API Design toàn tính năng. [Expert] So sánh REST vs GraphQL vs gRPC; xây dựng OAuth2/SSO Server, Real-time APIs. _AI:_ Đảm bảo code API của AI nhất quán với hệ thống Contract sẵn có.
- **M3:** [Mgmt] Định hình API Architecture & Guidelines cho project. [Expert] API Gateway patterns, System-to-system Integration. _AI:_ Phân định ranh giới: AI dành cho implementation, Human làm chủ API Design.
- **S1:** Phê duyệt chiến lược tích hợp hệ thống; Microservice Patterns (Saga, Choreography), API Security. _AI:_ Đánh giá độ tin cậy của code tích hợp do AI gợi ý.
- **S2:** Xây dựng API Governance cấp Khối; thúc đẩy văn hóa API-First; thiết kế API Platform. _AI:_ Xây dựng Quality Gates kiểm duyệt API do AI sinh ra.
- **S3:** Định hình Chiến lược API Doanh nghiệp (Enterprise API Strategy) & Developer Portal.

---

### TRỤ CỘT 05: UI/UX ENGINEERING (Mã: 05 | Loại: Foundation)

> **Sứ mệnh:** Xây giao diện chuẩn. Trải nghiệm mượt. Từ implement UI đến kiến tạo design system.

#### Lộ trình học 9 giai đoạn:

1. **UI Foundations:** HTML Semantic, CSS Box Model, Flexbox/Grid, UI Component Libraries.
2. **Component Foundations:** State Management, Responsive Design, Web Accessibility (a11y), CSR vs SSR.
3. **UI Implementation:** Chuyển đổi từ Design Spec (Figma), Form Validation, Loading/Error/Empty States.
4. **Feature UI Ownership:** Reusable Components, Complex State, xử lý UX Edge Cases.
5. **UI Architecture & Performance:** Shared Component Libraries, SSR/SSG/ISR, Core Web Vitals optimization.
6. **Project Frontend Architecture:** Conventions, Design Systems, Design Tokens, Cross-browser strategy.
7. **Cross-Project Strategy:** Chuẩn hóa Design System & Accessibility trên nhiều sản phẩm.
8. **Frontend Governance:** Frontend Infrastructure, UI/UX Standards, Frontend Roadmap.
9. **Engineering Platform Vision:** Component Ecosystem, AI-augmented Design-to-Code pipelines.

#### Ma trận năng lực 9 cấp độ:

- **J1:** Thẻ HTML Semantic, CSS Flexbox/Grid, sử dụng UI Library theo docs. _AI:_ Dùng AI sinh UI component; nhận biết khi AI thiếu HTML Semantic hoặc a11y.
- **J2:** Hiểu cấu trúc Component, State Management, Responsive, a11y cơ bản, CSR vs SSR. _AI:_ Phát hiện cấu trúc Component không hợp lý do AI tạo ra.
- **J3:** Cắt UI chuẩn từ Figma; xử lý trọn vẹn Validation, Loading, Error và Empty States. _AI:_ Dùng AI sinh code UI nhanh, engineer bổ sung responsive & a11y mà AI bỏ sót.
- **M1:** Own giao diện phức tạp; xây dựng Reusable Components; đảm bảo tiêu chuẩn a11y; chủ động phát hiện lỗi UX. _AI:_ Kiểm tra AI code đảm bảo tương thích người dùng thực và Design System.
- **M2:** [Mgmt] Review chất lượng codebase Frontend, phát hiện sự không đồng bộ UI. [Expert] SSR/SSG/ISR, Tối ưu Core Web Vitals, xây dựng Shared Libraries. _AI:_ Phân tích mẫu code UI của AI để tránh phá vỡ Design System.
- **M3:** [Mgmt] Kiến trúc Frontend toàn dự án. [Expert] Xây dựng Design System (Tokens, Primitives), chiến lược Cross-browser. _AI:_ Viết Design Spec rõ ràng trước khi prompt AI sinh code UI (Garbage in, Garbage out).
- **S1:** Phê duyệt lựa chọn công nghệ Frontend; đánh giá mức độ trưởng thành (Maturity) của Design System. _AI:_ Đánh giá giao diện do AI sinh ra dựa trên chuẩn a11y và UX best practices.
- **S2:** B hành Frontend Standards cấp Khối; quản trị hạ tầng và công cụ Frontend. _AI:_ Thiết lập tiêu chuẩn phát triển UI có AI hỗ trợ ở cấp Department.
- **S3:** Định hình Tầm nhìn Kiến trúc Frontend & Kiến tạo AI-augmented Design-to-Code Pipeline.

---

### TRỤ CỘT 06: TESTING & QUALITY ASSURANCE (Mã: 06 | Loại: Foundation)

> **Sứ mệnh:** Test đúng chỗ. Chất lượng đúng mức. Từ viết test đến xây dựng quality culture. (Trọng tâm: Test Non-Negotiable).

#### Lộ trình học 9 giai đoạn:

1. **Test Basics:** Các loại Test (Unit, Integration, E2E), Testing Pyramid, Test Suite execution.
2. **Testing Principles:** Mocks, Stubs, Spies, Test Coverage vs Test Confidence.
3. **Test Case Design:** Thiết kế Test Scenarios, Edge Cases, Boundary Values, Test Evidence.
4. **Feature Test Strategy:** Phối hợp Layered Testing (Unit + Integration + E2E) trên luồng DB/API thực.
5. **Test Automation:** Tự động hóa kiểm thử bằng Playwright/Cypress, Test Automation Patterns.
6. **Project Quality Architecture:** Metrics chất lượng, CI Test Pipelines, Quality Gates cho dự án.
7. **Cross-Project QA Strategy:** Kiểm thử hệ thống găng (Critical Systems), QA Automation ở quy mô lớn.
8. **QA Governance & Standards:** Reference Quality Architecture, Xây dựng văn hóa chất lượng (Quality Culture).
9. **Enterprise Quality Vision:** Enterprise Quality Framework, AI-augmented Testing Workflows.

#### Ma trận năng lực 9 cấp độ:

- **J1:** Nhận biết các loại Test trong Testing Pyramid; chạy Test Suites và đọc kết quả. _AI:_ Dùng AI sinh Unit Test; nhận biết AI chỉ tập trung test luồng thành công (Happy Path).
- **J2:** Hiểu Mocks/Stubs/Spies; nhận thức được Coverage cao không đồng nghĩa với Chất lượng cao. _AI:_ Đánh giá Test do AI viết có ý nghĩa thực tế không; phát hiện test "đúng syntax nhưng sai logic".
- **J3:** Chủ động nghĩ Edge Cases để viết Test; chuẩn bị Test Environment; giữ Bug Rate ≤1/4. _AI:_ AI sinh code mẫu (Boilerplate), engineer tự định nghĩa Scenarios & Boundary Values.
- **M1:** Xây dựng Test Strategy toàn diện cho feature; viết Integration Test trên DB/API thực; Bug Rate ≤1/6. _AI:_ Làm chủ chất lượng toàn bộ code và test case do AI sinh ra.
- **M2:** [Mgmt] Đánh giá ý nghĩa của Test Suites toàn team (tránh chạy theo Coverage %). [Expert] Tự động hóa kiểm thử (Playwright/Cypress); Bug Rate ≤1/8. _AI:_ Phân tích nguyên nhân gốc rễ khi AI Test pass nhưng Bug vẫn lọt ra Production.
- **M3:** [Mgmt] Định hình Quality Metrics toàn project; khẳng định "Quality is thinking, not tooling". [Expert] Xây dựng CI Pipeline & Test Infrastructure; Bug Rate ≤1/10. _AI:_ Áp dụng quy chuẩn review nghiêm ngặt cho cả code test do AI sinh.
- **S1:** Phê duyệt Test Strategy cho các hệ thống quan trọng (Critical Systems). _AI:_ Cảnh báo hiện tượng "False Confidence" khi lạm dụng AI sinh test.
- **S2:** B hành Quality Standards cấp Khối; kiến tạo Văn hóa Chất lượng (Quality Culture) ở quy mô lớn. _AI:_ Thiết lập chuẩn mực kiểm thử AI-assisted cấp Department.
- **S3:** Định hình Tầm nhìn Chất lượng Doanh nghiệp (Enterprise Quality Vision) & AI-augmented QA Framework.

---

### TRỤ CỘT 07: PERFORMANCE & OPTIMIZATION (Mã: 07 | Loại: Foundation)

> **Sứ mệnh:** Đo lường trước. Tối ưu đúng. Từ nhận biết bottleneck đến hệ thống hiệu năng cao.

#### Lộ trình học 9 giai đoạn:

1. **Performance Basics:** Response time, Throughput, Load time, Sử dụng Browser DevTools & Network tab.
2. **Performance Principles:** Phát hiện N+1 Query, Database Indexing, Lazy Loading, Code Splitting, Core Web Vitals.
3. **Profiling & Optimization:** Đọc EXPLAIN Plan, Slow Query Log, Profiling CPU/Memory, Đo lường thực tế.
4. **Benchmarking & Caching:** Chạy Benchmark (Apache Benchmark, k6), Caching với Redis, Tối ưu hóa FE & BE.
5. **Deep Optimization Strategy:** Thiết lập Performance Budget, Cache Invalidation Strategy, Trade-offs.
6. **Project Performance Architecture:** CDN, Reverse Proxy Caching, I/O Bottlenecks, Multi-tier Caching.
7. **Cross-Project Strategy:** Load Balancing, Concurrency Handling (10k+ active users), Performance Testing Standard.
8. **Performance Governance:** B hành tiêu chuẩn hiệu năng, Performance Review Gates trong CI/CD.
9. **Enterprise Performance Vision:** High-Performance Architecture Framework, AI-augmented Optimization.

#### Ma trận năng lực 9 cấp độ:

- **J1:** Nhận biết Response Time, Throughput; dùng DevTools đo load time; nhận biết ứng dụng chậm. _AI:_ Nhận biết và tránh bẫy tối ưu hóa sớm (Premature Optimization) khi nghe AI gợi ý.
- **J2:** Hiểu nguyên nhân N+1, phương pháp đo hiệu năng, Indexing, Lazy Loading, Code Splitting. _AI:_ Đánh giá tính hợp lý trong lời khuyên tối ưu của AI.
- **J3:** Sử dụng Query Profiler (Explain, Slow Log); áp dụng Indexing & Code Splitting; báo cáo metrics rõ ràng. _AI:_ Kiểm chứng mọi gợi ý tối ưu của AI bằng Profiler trên dữ liệu thực.
- **M1:** Chạy Benchmark (k6, Lighthouse); triển khai Redis Caching; tối ưu FE+BE đạt Target metrics. _AI:_ Validate chiến lược Caching của AI dựa trên mô hình truy cập dữ liệu thực tế.
- **M2:** [Mgmt] Đánh giá hiệu năng toàn tính năng, đặt Performance Budget. [Expert] Xây dựng k6 test scenarios, xử lý Cache Invalidation, Deep Profiling. _AI:_ Phân biệt gợi ý chung chung của AI với Bottleneck thực sự.
- **M3:** [Mgmt] Định hình Performance Architecture cho project. [Expert] Cấu hình CDN, Proxy Cache, xử lý I/O Bottleneck. _AI:_ Bắt buộc kiểm chứng bằng thực nghiệm trước khi áp dụng AI code tối ưu.
- **S1:** Phê duyệt đầu tư hạ tầng hiệu năng; thiết kế hệ thống chịu tải $10k+$ Concurrency. _AI:_ Đảm bảo team không áp dụng mù quáng các đoạn code tối ưu của AI.
- **S2:** B hành Tiêu chuẩn Hiệu năng cấp Khối; xây dựng High-Performance Architectures. _AI:_ Lập chuẩn phân tích hiệu năng có sự hỗ trợ của AI.
- **S3:** Kiến tạo Văn hóa Hiệu năng (Performance Culture) & AI-augmented Optimization Framework.

---

### TRỤ CỘT 08: SECURITY ENGINEERING (Mã: 08 | Loại: Foundation)

> **Sứ mệnh:** Bảo mật từ đầu. Phòng thủ chủ động. Từ nhận biết lỗ hổng đến security culture. (Trọng tâm: Secure by Default).

#### Lộ trình học 9 giai đoạn:

1. **Security Basics:** Lỗ hổng cơ bản (XSS, SQL Injection, CSRF), Sensitive Data Protection.
2. **Secure Coding Principles:** Authentication vs Authorization, HTTPS, CORS, Quản lý Secrets (không hardcode).
3. **Secure Delivery Practices:** Input Validation, Output Encoding, Environment Variables, Security Checklists.
4. **Auth & Application Security:** JWT, Session Management, RBAC, OWASP Top 10, Encryption at Rest/in Transit.
5. **Security Architecture & Review:** OAuth2, SSO, Tích hợp SAST/DAST vào CI/CD, Security Review Gates.
6. **Project Security Architecture:** Pentest remediation, Defense-in-depth, B hành Security Standards cho dự án.
7. **Cross-Project Strategy:** Đánh giá công cụ bảo mật, mở rộng diện tích tấn công (Attack Surface Management).
8. **Security Governance & Standards:** Xây dựng văn hóa Bảo mật là trên hết (Security-First Culture).
9. **Enterprise Security Vision:** AI-Safe Development Practices, Automated Security Scanning at Scale.

#### Ma trận năng lực 9 cấp độ:

- **J1:** Nhận biết XSS, SQL Injection, CSRF; nắm quy tắc Secure Coding cơ bản. _AI:_ Phát hiện lỗi bảo mật trong code AI (hardcoded secrets, thiếu validation) — MINIMUM BAR.
- **J2:** Hiểu cơ chế tấn công, AuthN vs AuthZ, HTTPS, CORS; tuyệt đối không hardcode secrets. _AI:_ Hiểu tại sao code AI có thể bị khai thác (exploit) dù "chạy hoàn toàn đúng".
- **J3:** Viết code bảo mật nhất quán; dùng Environment Variables; thực hiện Security Checklist trước khi ship. _AI:_ Thực hiện Security Review bắt buộc cho MỌI dòng code do AI sinh ra.
- **M1:** Triển khai luồng Auth phức tạp (JWT, RBAC); làm chủ OWASP Top 10; Mã hóa dữ liệu. _AI:_ Làm chủ rủi ro bảo mật; cảnh giác với các lỗi AI hay mắc phải: Auth yếu, thiếu Rate Limit, IDOR.
- **M2:** [Mgmt] Kiểm soát rủi ro bảo mật tính năng, đảm bảo team tuân thủ Checklist. [Expert] Thiết kế kiến trúc OAuth2/SSO, SAST/DAST, sửa lỗ hổng cấp hệ thống. _AI:_ Thiết lập Review Gates bắt buộc cho AI code.
- **M3:** [Mgmt] Định hình Security Posture toàn project. [Expert] Đọc kết quả Pentest, phân tích Attack Vectors, xây dựng chiến lược phòng thủ. _AI:_ Áp dụng Nguyên tắc Zero Tolerance cho rủi ro bảo mật từ AI.
- **S1:** Phê duyệt Kiến trúc Bảo mật cho các dự án; đánh giá và lựa chọn công cụ Security. _AI:_ Cảnh báo: AI tăng tốc độ gõ code nhưng sẽ làm tăng diện tích tấn công nếu thiếu kiểm duyệt.
- **S2:** B hành Tiêu chuẩn Bảo mật cấp Khối; phát triển Security-First Culture. _AI:_ Lập quy định kiểm duyệt an ninh cho AI code cấp Department.
- **S3:** Kiến tạo Chiến lược Bảo mật Doanh nghiệp (Enterprise Security Strategy) & AI-Safe Development Framework.

---

### TRỤ CỘT 09: ENGINEERING PROCESS (Mã: 09 | Loại: Process)

> **Sứ mệnh:** Quy trình rõ. Tiêu chuẩn vững. Từ tuân thủ đến kiến tạo quy chuẩn. (Trọng tâm: DoR/DoD, Shift-Left Thinking).

#### Lộ trình học 9 giai đoạn:

1. **Process Basics:** Git cơ bản, Branching Strategy, Pull Requests (PR), Linters, Formatters.
2. **Engineering Conventions:** Clean Code rules, Code Review culture, CI/CD pipeline hiểu biết cơ bản.
3. **PR & Delivery Discipline:** Nguyên tắc DRY, Naming convention, Self-review kỷ luật, PR Evidence.
4. **Feature Delivery Process:** Quy trình Backlog, Định nghĩa DoR (Definition of Ready) & DoD (Definition of Done).
5. **Team Process Effectiveness:** Tối ưu workflow team, Backlog Hygiene, Tooling, Coaching quy trình.
6. **Project Process Architecture:** Thiết lập Quality Gates, Tech-Lead discipline trong 5 pha phát triển.
7. **Cross-Project Standards:** Workflow Tooling, Engineering Handbook, Quy trình phê duyệt thay đổi (CAB).
8. **Process Governance & Excellence:** Khung cải tiến quy trình liên tục (Continuous Improvement Framework).
9. **Organizational Engineering Culture:** Xây dựng Văn hóa Kỹ thuật (Engineering Culture) & Manifesto Adoption.

#### Ma trận năng lực 9 cấp độ:

- **J1:** Sử dụng Git cơ bản, Linter, Formatter, tuân thủ quy trình tạo Branch & PR. _AI:_ Không bao giờ commit code AI chưa qua Linter/Formatter; nhận biết khi AI vi phạm quy ước project.
- **J2:** Hiểu bản chất Clean Code, Git Flow, CI/CD Pipeline và vai trò của Code Review. _AI:_ Ý thức được AI tăng tốc độ viết code nhưng dễ gây rủi ro bỏ qua (bypass) quy trình kiểm duyệt.
- **J3:** Tuân thủ Clean Code nhất quán; viết PR Description rõ ràng kèm Self-review và Evidence. _AI:_ Áp dụng trọn vẹn quy trình kiểm duyệt cho code AI: Linting, PR, Self-review, Evidence.
- **M1:** Thực hiện Task với đầy đủ How-to-do & Evidence; Code review chi tiết cho đồng nghiệp. _AI:_ Đảm bảo quy trình DoR → Implement → DoD → Merge cho toàn bộ output (Human + AI).
- **M2:** [Mgmt] Quản lý hiệu quả quy trình Git/Backlog cho team. [Expert] Tự động hóa quy trình bằng Code Generators & Custom Tooling. _AI:_ Quan sát và điều chỉnh hành vi của team khi lạm dụng AI làm suy giảm kỷ luật quy trình.
- **M3:** [Mgmt] Triển khai & giám sát kỷ luật quy trình toàn project. [Expert] Cải tiến quy trình kỹ thuật, hỗ trợ PO chuẩn hóa yêu cầu. _AI:_ Ban hành quy trình làm việc chuẩn với AI: bắt buộc Context Packet & Review Gates.
- **S1:** Phê duyệt quy trình làm việc cross-project; định hình nội dung Engineering Handbook. _AI:_ Đánh giá tác động của AI đến việc tuân thủ quy trình ở quy mô lớn.
- **S2:** B hành Tiêu chuẩn Quy trình Kỹ thuật cấp Khối (Department Engineering Standards). _AI:_ Cân bằng giữa Tốc độ phát triển do AI mang lại và Kỷ luật Quy trình bền vững.
- **S3:** Kiến tạo Văn hóa Kỹ thuật Doanh nghiệp (Organizational Engineering Culture) & AI-Era SDLC Framework.

---

### TRỤ CỘT 10: TECHNICAL DOCUMENTATION (Mã: 10 | Loại: Process)

> **Sứ mệnh:** Vẽ rõ ràng. Viết mạch lạc. Từ ghi chép đến truyền đạt kiến trúc hệ thống.

#### Lộ trình học 9 giai đoạn:

1. **Documentation Basics:** Các sơ đồ cơ bản (Flowchart, ERD), Meeting Notes, Task Notes, Công cụ (Notion, draw.io).
2. **Documentation Principles:** Đọc hiểu Technical Specs, Ý thức được việc thiếu tài liệu tạo ra rủi ro dự án.
3. **Technical Notes & Setup Docs:** Vẽ Activity Diagram, Database Diagram, Viết README, Setup Guide sử dụng được.
4. **Design & Decision Docs:** Class/Component/Sequence Diagrams, Swagger API Docs, Viết ADRs (Architecture Decision Records).
5. **Architecture Communication:** Architecture/Infra/State Machine Diagrams, Viết Technical Proposals thuyết phục.
6. **Project Documentation Architecture:** Chuẩn hóa Knowledge Base, Review Process cho tài liệu dự án.
7. **Cross-Project Knowledge Strategy:** Nâng cao chất lượng viết (Technical Writing Quality), System Design Docs.
8. **Governance & Platforms:** Nền tảng quản trị tri thức (Knowledge Management Platform) cấp Khối.
9. **Enterprise Knowledge Vision:** Tầm nhìn Quản trị Tri thức Doanh nghiệp, AI-augmented Documentation Workflows.

#### Ma trận năng lực 9 cấp độ:

- **J1:** Nhận biết các sơ đồ cơ bản; ghi chép Meeting/Task Notes đầy đủ bằng Notion/Confluence/draw.io. _AI:_ Dùng AI hỗ trợ nháp Notes; nhận biết khi AI đưa thông tin sai lệch vào tài liệu.
- **J2:** Hiểu tầm quan trọng của tài liệu; giải thích được sơ đồ; đọc hiểu Technical Specs. _AI:_ Kiểm tra tính chính xác của tài liệu do AI tạo — tránh bẫy "đọc nghe rất hay nhưng sai thực tế".
- **J3:** Vẽ thành thạo Activity & Database Diagram; viết README và Setup Guide hoàn chỉnh. _AI:_ Dùng AI tạo bản thảo tài liệu, tự mình xác minh mọi chi tiết kỹ thuật đối chiếu với code thực tế.
- **M1:** Vẽ Class, Component, Sequence Diagrams; viết API Docs & ADRs giải thích quyết định kỹ thuật. _AI:_ Dùng AI tạo khung tài liệu (Skeleton), tự mình điền chi tiết chính xác và lý do ra quyết định.
- **M2:** [Mgmt] Phát hiện khoảng trống tài liệu (Documentation gaps), review chất lượng tài liệu. [Expert] Vẽ Sơ đồ Kiến trúc/Hạ tầng, viết Solution Proposals dễ hiểu cho stakeholders. _AI:_ Phân tích thiếu sót của AI so với góc nhìn của Senior Engineer.
- **M3:** [Mgmt] Thiết lập chuẩn mực Documentation & Knowledge Base cho dự án. [Expert] Viết các đề xuất giải pháp kỹ thuật phức tạp cho khách hàng (≥4 proposals/năm). _AI:_ Định nghĩa quy trình kiểm duyệt tài liệu AI trước khi publish.
- **S1:** Phê duyệt các tài liệu System Design quan trọng; dẫn dắt hoạt động Quản trị Tri thức. _AI:_ Đánh giá tiêu chuẩn chính xác của tài liệu do AI hỗ trợ trên nhiều dự án.
- **S2:** B hành Tiêu chuẩn Tài liệu Kỹ thuật cấp Khối; đầu tư nền tảng Knowledge Management. _AI:_ Lập tiêu chuẩn viết tài liệu có AI hỗ trợ ở cấp Department.
- **S3:** Định hình Chiến lược Quản trị Tri thức Doanh nghiệp & Kiến tạo AI-augmented Documentation System.

---

### TRỤ CỘT 11: BUSINESS & DOMAIN UNDERSTANDING (Mã: 11 | Loại: Domain)

> **Sứ mệnh:** Hiểu nghiệp vụ. Nắm domain. Từ đọc requirement đến phân tích hệ thống. (Trọng tâm: Chủ động Clarify - Requirement Thinking).

#### Lộ trình học 9 giai đoạn:

1. **Requirements Basics:** Đọc hiểu Requirements, User Stories, Acceptance Criteria (AC), Stakeholders.
2. **Feature Intent Understanding:** Hiểu Bối cảnh Kinh doanh (Business Context) & Giá trị đem lại cho End-User; biết đặt câu hỏi Clarify.
3. **Scope & Flow Translation:** Chuyển đổi Requirement → Tasks, Activity Flows, Xác định Ranh giới Scope (In/Out-of-scope).
4. **Domain Clarification & Modeling:** Viết Use Cases, vẽ Wireframes, Mô hình hóa Quy tắc Domain (Domain Rules).
5. **Cross-Feature Analysis:** Phân tích luồng nghiệp vụ liên tính năng, phát hiện mâu thuẫn & khoảng trống yêu cầu.
6. **Project Requirement Architecture:** Làm cầu nối giữa Business ↔ Engineering; đảm bảo chất lượng Yêu cầu cho dự án.
7. **Cross-Project Domain Strategy:** Áp dụng Domain-Driven Design (DDD), Chia sẻ tri thức Domain giữa các teams.
8. **Requirement Governance & Standards:** Ngăn ngừa lãng phí lập trình do hiểu sai ý khách hàng; xây dựng Domain Culture.
9. **Enterprise Business Understanding Vision:** BA Frameworks, Cross-domain Knowledge, AI-augmented Domain Work.

#### Ma trận năng lực 9 cấp độ:

- **J1:** Đọc hiểu User Stories & ACs; nhận biết khi yêu cầu chưa rõ ràng và biết chủ động tìm đúng người để hỏi. _AI:_ Nhận biết khi AI viết code không đúng với ý định (Intent) của User Story.
- **J2:** Hiểu bối cảnh kinh doanh của tính năng; chủ động đặt câu hỏi làm rõ khi gặp mơ hồ, không ngồi chờ. _AI:_ Phát hiện code AI "đúng spec nhưng sai intent"; dùng AI gợi ý danh sách câu hỏi Clarify.
- **J3:** Chuyển đổi Yêu cầu → Tasks & Activity Diagram; làm rõ Ranh giới Scope trước khi code; tạo Context Packet. _AI:_ Cung cấp đầy đủ bối cảnh kinh doanh và Domain Rules rõ ràng khi viết Prompt/Context Packet cho AI.
- **M1:** Phân tích yêu cầu phức tạp (UML, Use Cases, Wireframes); KHÔNG CODE KHI CÒN MƠ HỒ; thảo luận Trade-offs bằng ngôn ngữ Business. _AI:_ Hiểu sâu Domain giúp viết Prompt tốt hơn; validate AI code dựa trên các quy tắc nghiệp vụ ngầm (unwritten domain rules).
- **M2:** [Mgmt] Rà soát mâu thuẫn yêu cầu cross-feature; coach team thói quen Clarify thay vì cắm đầu viết code. [Expert] Phân tích luồng nghiệp vụ Cross-module, am hiểu ≥2-3 domains. _AI:_ Đánh giá xem team có thực sự hiểu domain hay chỉ copy-paste spec cho AI.
- **M3:** [Mgmt] Chịu trách nhiệm chất lượng Yêu cầu toàn project; đảm bảo team không bỏ qua bước Clarify dù AI viết code rất nhanh. [Expert] Am hiểu ≥ 5$ domains, vẽ BPMN, thiết kế luồng End-to-End. _AI:_ Khẳng định: Hiểu biết Domain là điều kiện tiên quyết để dùng AI hiệu quả.
- **S1:** Đánh giá quy trình quản lý Yêu cầu cross-project; thúc đẩy thói quen chia sẻ tri thức Domain; áp dụng DDD. _AI:_ Đánh giá xem các giải pháp của AI có thực sự align với mục tiêu kinh doanh thực tế.
- **S2:** B hành Tiêu chuẩn Requirement Engineering cấp Khối; ngăn ngừa lãng phí tài nguyên do hiểu sai khách hàng; am hiểu ≥7 domains. _AI:_ Đặt ngưỡng hiểu biết Domain tối thiểu trước khi cho phép dùng AI làm các tính năng Business-critical.
- **S3:** Kiến tạo Văn hóa "Xây đúng thứ khách hàng cần" (Build the Right Thing) & BA Framework cho toàn bộ Doanh nghiệp. _AI:_ Kết hợp Hiểu biết Nghiệp vụ sâu sắc + Năng lực AI = Lợi thế cạnh tranh vượt trội (Unfair Advantage).

---

## PHẦN III: NGUYÊN TẮC THỰC THI & QUY TRÌNH PHỐI HỢP AI-HUMAN (ITFS EXECUTION)

### 1. Bộ 6 Giá trị Văn hóa & Nguyên tắc Vàng (Manifesto Highlights)

1. **Intentional Over Automatic:** Mọi dòng code, mọi quyết định kiến trúc đều phải xuất phát từ tư duy có chủ đích, không làm theo thói quen thụ động hoặc copy-paste mù quáng.
2. **Quality at the Source (Shift-Left):** Chất lượng phần mềm phải được kiểm soát ngay từ khâu Clarify Yêu cầu và Thiết kế (DoR), không đợi đến khi chạy Test mới tìm bug.
3. **Secure by Default:** Bảo mật là thuộc tính mặc định của mọi thành phần phần mềm. Không có ngoại lệ cho code "chạy thử" hay code do AI tạo ra.
4. **Test Non-Negotiable:** Kiểm thử là bắt buộc. Đo lường giá trị kiểm thử bằng kịch bản thực tế và ý nghĩa bảo vệ hệ thống, không chạy theo chỉ số phần trăm vô nghĩa.
5. **Human Accountability in AI-Era:** AI là công cụ gia tăng vận tốc, con người (Engineer) chịu trách nhiệm hoàn toàn 100% về tính đúng đắn, an toàn và hiệu năng của sản phẩm.
6. **Continuous Improvement & Knowledge Sharing:** Liên tục đo lường, rút kinh nghiệm và tài liệu hóa tri thức để xây dựng năng lực tổ chức bền vững.

---

### 2. Mô hình Kiểm soát Chất lượng AI (AI Quality Gates & Context Packet)

Để làm chủ công cụ AI trong chu trình phát triển phần mềm (SDLC), ITFS quy định quy trình 4 bước bắt buộc:

```
[1. Requirement Clarify] ──► [2. Context Packet] ──► [3. AI Generation] ──► [4. Human Quality Gate]
(DoR & Business Intent)     (Specs, Rules, Stack)    (Draft Implementation)    (Review, Test, DoD)
```

- **Bước 1 — Requirement Clarify (DoR):** Làm rõ bối cảnh, mục tiêu người dùng và ranh giới Scope. Tuyệt đối không prompt AI khi yêu cầu còn mơ hồ.
- **Bước 2 — Context Packet:** Chuẩn bị bộ ngữ cảnh đầu vào cho AI gồm: Business Context, Technical Constraints, Coding Conventions, và Existing Interfaces.
- **Bước 3 — AI Generation:** AI đóng vai trò người trợ lý tạo bản thảo (Drafting) hoặc viết boilerplate code dựa trên Context Packet.
- **Bước 4 — Human Quality Gate (DoD):** Engineer trực tiếp rà soát (Code Review, Security Scan, Profiling, Edge Cases Test) trước khi đưa code vào nhánh chính hoặc merge PR.
