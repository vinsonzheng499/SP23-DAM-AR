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
    cursor.execute('SELECT FROM art_table')
    results = [{name: role} for (id, name, role) in cursor]
    cursor.close()
    connection.close()

    return results

# route to get specific artist info

if __name__ == '__main__':
    app.run(host='0.0.0.0')