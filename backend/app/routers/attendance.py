from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import SessionLocal
from ..models import Attendance
from ..schemas import AttendanceCreate

router = APIRouter(prefix="/attendance", tags=["Attendance"])

def get_db():

    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()


@router.post("/")
def mark_attendance(att: AttendanceCreate, db: Session = Depends(get_db)):

    record = Attendance(**att.dict())

    db.add(record)
    db.commit()

    return {"message": "Attendance marked"}


@router.get("/{employee_id}")
def get_attendance(employee_id: str, db: Session = Depends(get_db)):

    return db.query(Attendance).filter(
        Attendance.employee_id == employee_id
    ).all()