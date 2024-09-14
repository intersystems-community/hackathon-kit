FROM python:3.11-slim
WORKDIR /app
COPY intersystems_irispython-3.2.0-py3-none-any.whl intersystems_irispython-3.2.0-py3-none-any.whl
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["python", "flaskBackend.py"]
