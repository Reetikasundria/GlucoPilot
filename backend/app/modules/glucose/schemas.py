from datetime import datetime

from pydantic import BaseModel, ConfigDict


class GlucoseReadingCreate(BaseModel):
    value: float
    context: str
    timestamp: datetime
    note: str | None = None
    source: str = "manual"


class GlucoseReadingResponse(BaseModel):
    id: int
    value: float
    context: str
    timestamp: datetime
    note: str | None
    source: str
    created_at: datetime

    model_config = ConfigDict(
        from_attributes=True
    )