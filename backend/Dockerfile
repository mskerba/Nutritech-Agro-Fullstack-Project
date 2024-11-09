FROM python:3.10

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt && \
    pip install psycopg2-binary

COPY . .

EXPOSE 8000

ENTRYPOINT ["python", "manage.py"]

CMD ["runserver", "0.0.0.0:8000"]
