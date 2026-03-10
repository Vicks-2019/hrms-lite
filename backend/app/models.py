from sqlalchemy import Column, String, Integer, Date, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base

class Employee(Base):

    __tablename__ = "employees"

    employee_id = Column(String, primary_key=True)
    full_name = Column(String)
    email = Column(String, unique=True)
    department = Column(String)

    attendance = relationship("Attendance", back_populates="employee")


class Attendance(Base):

    __tablename__ = "attendance"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(String, ForeignKey("employees.employee_id"))
    date = Column(Date)
    status = Column(String)

    employee = relationship("Employee", back_populates="attendance")