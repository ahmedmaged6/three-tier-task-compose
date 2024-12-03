# app.py
from flask import Flask, request, jsonify
from models import db, Task
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Configure the PostgreSQL database URI (make sure to adjust these credentials)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://user:password@database-container:5432/task_manager'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

# push context manually to app
with app.app_context():
    db.create_all()

# GET all tasks
@app.route('/tasks', methods=['GET'])
def get_tasks():
    tasks = Task.query.all()
    task_list = [{'id': task.id, 'name': task.name, 'description': task.description} for task in tasks]
    return jsonify(task_list)

# POST new task
@app.route('/tasks', methods=['POST'])
def create_task():
    data = request.get_json()
    new_task = Task(name=data['name'], description=data['description'])
    db.session.add(new_task)
    db.session.commit()
    return jsonify({'id': new_task.id, 'name': new_task.name, 'description': new_task.description}), 201

# PUT (Update) task
@app.route('/tasks/<int:id>', methods=['PUT'])
def update_task(id):
    data = request.get_json()
    task = db.session.get(Task, id)  # Updated

    if not task:
        return jsonify({'message': 'Task not found'}), 404

    task.name = data['name']
    task.description = data['description']
    db.session.commit()

    return jsonify({'id': task.id, 'name': task.name, 'description': task.description})

# DELETE task
@app.route('/tasks/<int:id>', methods=['DELETE'])
def delete_task(id):
    task = db.session.get(Task, id)  # Updated

    if not task:
        return jsonify({'message': 'Task not found'}), 404

    db.session.delete(task)
    db.session.commit()
    return jsonify({'message': 'Task deleted successfully'})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
