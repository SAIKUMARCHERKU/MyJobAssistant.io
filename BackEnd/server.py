from flask import Flask, request, jsonify
from flask_cors import CORS
import pymongo

app = Flask(__name__)
CORS(app)

client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["job_tracker"]
collection = db["jobs"]

@app.route("/api/saveJob", methods=["POST"])
def save_job():
    data = request.json
    collection.insert_one(data)
    return jsonify({"message": "Job saved successfully"}), 201

@app.route("/api/getJobs", methods=["GET"])
def get_jobs():
    jobs = list(collection.find({}, {"_id": 0}))
    return jsonify(jobs)

if __name__ == "__main__":
    app.run(debug=True)



