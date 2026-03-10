# HRMS Lite

A simple Human Resources Management System (HRMS) prototype.

## Structure

- `backend/`: FastAPI backend API service
- `frontend/`: React frontend app (Vite)
- `docker-compose.yml`: local dev setup with backend + frontend

## Run locally

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate   # or .\.venv\Scripts\activate on Windows
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Docker (optional)

```bash
docker compose up --build
```
