from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text

from app.core.config import settings
from app.db.database import engine
from app.db.init_db import init_db
from sqlalchemy import inspect
from app.modules.glucose.routes import router as glucose_router


app = FastAPI(
    title=settings.APP_NAME,
)

@app.get("/health/database/tables")
def database_tables_check():
    inspector = inspect(engine)

    return {
        "tables": inspector.get_table_names(),
    }
@app.on_event("startup")
def startup_event():
    init_db()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        settings.FRONTEND_URL,
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(
    glucose_router,
    prefix="/api",
)

@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "GlucoPilot API",
    }


@app.get("/health/database")
def database_health_check():
    with engine.connect() as connection:
        connection.execute(text("SELECT 1"))

    return {
        "status": "healthy",
        "database": "connected",
    }