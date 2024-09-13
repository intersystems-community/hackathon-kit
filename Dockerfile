FROM jupyter/base-notebook

# Install build essentials (gcc, make, etc.)
USER root
RUN apt-get update && apt-get install -y \
    gcc \
    build-essential \
    libssl-dev \
    && rm -rf /var/lib/apt/lists/*
USER jovyan
COPY --chown=jovyan demo "${HOME}/demo"
COPY --chown=jovyan data "${HOME}/data"
COPY requirements.txt "${HOME}"

RUN pip install -r requirements.txt
RUN pip install jupyterlab-execute-time

# run without password
CMD start.sh jupyter lab --LabApp.token=''
