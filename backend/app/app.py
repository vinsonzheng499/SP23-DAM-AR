from flask import Flask
import mysql.connector
import json

app = Flask(__name__)

# route to get specific artwork info
def get_artwork(art_id):
    config = {
        'user': 'root',
        'password': 'root',
        'host': 'db',
        'port': '3306',
        'database': 'art'
    }
    connection = mysql.connector.connect(**config)
    cursor = connection.cursor()
    cursor.execute(f'SELECT * FROM art_table WHERE art_id = {art_id}')
    results = [{name: role} for (id, name, role) in cursor]
    cursor.close()
    connection.close()

    return results

# route to get specific artist info

@app.route('/')
def index() -> str:
    return json.dumps('hi')

@app.route('/artwork/<id>')
def artinfo(id) -> str:
    return json.dumps(get_artwork(id))

if __name__ == '__main__':
    app.run(host='0.0.0.0')