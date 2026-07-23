from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.modules.glucose.models import GlucoseReading
from app.modules.glucose.schemas import (
    GlucoseReadingCreate,
    GlucoseReadingResponse,
)


router = APIRouter(
    prefix="/glucose",
    tags=["Glucose"],
)


@router.post(
    "",
    response_model=GlucoseReadingResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_glucose_reading(
    payload: GlucoseReadingCreate,
    db: Session = Depends(get_db),
):
    reading = GlucoseReading(
        value=payload.value,
        context=payload.context,
        timestamp=payload.timestamp,
        note=payload.note,
        source=payload.source,
    )

    db.add(reading)
    db.commit()
    db.refresh(reading)

    return reading

@router.get(
    "",
    response_model=list[GlucoseReadingResponse],
)
def get_glucose_readings(
    db: Session = Depends(get_db),
):
    readings = (
        db.query(GlucoseReading)
        .order_by(
            GlucoseReading.timestamp.desc()
        )
        .all()
    )

    return readings

@router.delete(
    "/{reading_id}",
    status_code=status.HTTP_204_NO_CONTENT,
)
def delete_glucose_reading(
    reading_id: int,
    db: Session = Depends(get_db),
):
    reading = (
        db.query(GlucoseReading)
        .filter(
            GlucoseReading.id == reading_id
        )
        .first()
    )

    if reading is None:
        from fastapi import HTTPException

        raise HTTPException(
            status_code=404,
            detail="Glucose reading not found",
        )

    db.delete(reading)
    db.commit()