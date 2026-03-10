from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..database import SessionLocal
from ..models import Employee
from ..schemas import EmployeeCreate

router = APIRouter(prefix="/employees", tags=["Employees"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/")
def create_employee(emp: EmployeeCreate, db: Session = Depends(get_db)):

    existing = db.query(Employee).filter(
        Employee.employee_id == emp.employee_id
    ).first()

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Employee already exists"
        )

    new_emp = Employee(**emp.dict())

    db.add(new_emp)
    db.commit()

    return {"message": "Employee created"}


@router.get("/")
def list_employees(db: Session = Depends(get_db)):

    return db.query(Employee).all()


@router.delete("/{employee_id}")
def delete_employee(employee_id: str, db: Session = Depends(get_db)):

    emp = db.query(Employee).filter(
        Employee.employee_id == employee_id
    ).first()

    if not emp:
        raise HTTPException(status_code=404, detail="Employee not found")

    db.delete(emp)
    db.commit()

    return {"message": "Deleted"}