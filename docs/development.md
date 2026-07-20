# GlucoPilot Development History

## Vision

Build an AI-powered personal diabetes companion that learns from each user's history instead of relying only on LLM memory.

The system should:

- Help users manage glucose daily.
- Generate meal plans.
- Predict glucose trends.
- Learn from previous experiences.
- Generate doctor reports.
- Support both CGM and non-CGM users.

---

# Tech Stack

Frontend

- Next.js 15
- React 19
- TypeScript
- TailwindCSS v4
- shadcn/ui (Base UI)
- React Hook Form
- Zod

Backend (planned)

- FastAPI
- PostgreSQL
- Redis
- ChromaDB / Qdrant
- LangGraph
- OpenAI
- Docker

---

# Project Structure

src/

app/

(auth)

(dashboard)

(onboarding)

features/

auth/

dashboard/

onboarding/

doctor/

meal/

timeline/

glucose/

chat/

components/

hooks/

providers/

store/

services/

---

# Authentication

Completed

Login UI

Signup UI

Reusable Auth Layout

Reusable Auth Input

---

# Dashboard

Folder created.

No implementation yet.

---

# Onboarding

Architecture completed.

Folder structure created.

Components

ProgressBar

StepIndicator

NavigationButtons

Steps

BasicInfo

DiabetesInfo

Treatment

Lifestyle

Goals

Hooks

useOnboarding

Constants

Types

---

# React Hook Form Integration

Completed

Added

React Hook Form

Zod

FormProvider

One shared form across every onboarding step.

---

# Current Flow

Landing

↓

Signup

↓

Login

↓

Onboarding

↓

Dashboard (future)

---

# AI Vision

Instead of retraining a model continuously, GlucoPilot will use:

User Database

↓

Vector Search

↓

Past Similar Situations

↓

Recommendation Engine

↓

LLM (only when needed)

The system becomes smarter by retrieving the user's own experiences.

---

# User Memory Philosophy

Every user owns a private memory.

User A never accesses User B's history.

The AI learns only from that user's experiences.

---

# Planned Modules

Authentication

Onboarding

Dashboard

Glucose Tracking

Meal Tracking

Medication Tracking

Stress Tracking

Exercise Tracking

Doctor Reports

AI Chat

Daily Planner

Timeline

Notification Engine

RAG Memory

Recommendation Engine

CGM Integration

BLE Device Support

FastAPI Backend

Docker Deployment

---

# Current Status

Frontend Foundation Completed

Authentication UI Completed

Onboarding Architecture Completed

Ready to build Step 1 (Basic Information)

Version

0.1