---
title: "Amt-Vernetzt"
summary: "Cross-agency platform for secure collaboration — digital case management and inter-agency liaison (Amtshilfe 2.0)."
date: "Sep 15 2025"
draft: false
tags:
- Next.js
- TypeScript
- PostgreSQL
- Prisma
- RBAC
demoUrl: https://amt-vernetzt.de
---

## Amt-Vernetzt — Amtshilfe 2.0

Amt-Vernetzt is a multi-tenant platform that allows government agencies to manage cases digitally, share them securely with other organizations, and collaborate efficiently as a team. Strict tenant isolation and compliance are at its core.

### Core Features

- **Multi-tenant Case Management** — Digital case files with status, priority, and assignments
- **Amtshilfe** — Secure sharing of cases with other agencies (VIEW, COLLAB, HANDOVER)
- **Audit Log** — Tamper-proof logging of all actions
- **RBAC** — Four roles: ORG_ADMIN, CASE_MANAGER, CASE_WORKER, AUDITOR
- **Case Chat** — Context-based messaging directly on a case (internal & shared)
- **Inbox** — Direct messages (1:1 chat) between colleagues
- **Kanban Board** — Visual workflow management
- **Real-time Notifications** — For tasks, assignments, and messages

### Security

End-to-end type safety from the database schema to the React client. Server Actions with CSRF protection. Argon2id password hashing. Server-side RBAC guards on every request.

### Tech Stack

Next.js 15 (App Router) · TypeScript · PostgreSQL · Prisma ORM · Tailwind CSS · Shadcn/UI · NextAuth.js v5 · Zod · Lucide React