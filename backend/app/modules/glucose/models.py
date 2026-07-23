from datetime import datetime

from sqlalchemy import DateTime, Float, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class GlucoseReading(Base):
    __tablename__ = "glucose_readings"

    id: Mapped[int] = mapped_column(
        primary_key=True,
        index=True,
    )

    value: Mapped[float] = mapped_column(
        Float,
        nullable=False,
    )

    context: Mapped[str] = mapped_column(
        String(50),
        nullable=False,
    )

    timestamp: Mapped[datetime] = mapped_column(
        DateTime,
        nullable=False,
    )

    note: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    source: Mapped[str] = mapped_column(
        String(20),
        nullable=False,
        default="manual",
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        nullable=False,
    )