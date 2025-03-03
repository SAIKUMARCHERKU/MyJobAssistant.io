# Use a lightweight Python image as the base
FROM python:3.8-slim

# Set the working directory inside the container
WORKDIR /server

# Copy the requirements file and install dependencies
COPY requirements.txt /server/
RUN pip install -r requirements.txt

# Copy the backend code into the container
COPY . /server/

# Expose the port that Flask will use
EXPOSE 5000

# Set the entrypoint command
CMD ["python", "server.py"]





# # Use Python 3.9 slim as base image
# FROM python:3.9-slim

# # Set the working directory in the container
# WORKDIR /server

# # Copy the requirements file and install dependencies
# COPY requirements.txt /server/
# RUN pip install --no-cache-dir -r requirements.txt

# # Copy the application code
# COPY . /server/

# # Expose the port Flask runs on
# EXPOSE 5000

# # Set the command to run the application
# CMD ["python", "server.py"]
