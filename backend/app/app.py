from typing import List, Dict
# from flask import Flask, jsonify, request
from flask import Flask
import mysql.connector
import json

app = Flask(__name__)

# route to get specific artwork info
def get_artwork(art_id) -> List[str]:
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

    results = []
    for row in cursor:
        # date type can be converted?
        rowStr = f'art_id: {row[0]}, art_name: {row[2]}, art_date: {row[4]}, art_era: {row[5]}, image_id: {row[7]}, art_desc: {row[8]}, audio_id: {row[9]}'
        results.append(rowStr)

    cursor.close()
    connection.close()

    return results


    # # tag_data = request.args.get('tagData')
    # cursor = mydb.cursor()
    # cursor.execute(f'SELECT * FROM art_table WHERE art_id = {art_id}')
    # # cursor.execute(f'SELECT * FROM art_table WHERE art_id = {tag_data}')
    # result = cursor.fetchone()
    # cursor.close()

    # if result is None:
    #     return {'error': f'Artwork with ID {art_id} not found'}

    # return {
    #     'art_id': result[0]
    #     # 'artist_id': result[1],
    #     # 'art_name': result[2],
    #     # 'museum_name': result[3],
    #     # 'art_date': result[4].isoformat(),
    #     # 'art_era': result[5],
    #     # 'art_type': result[6],
    #     # 'image_id': result[7],
    #     # 'art_description': result[8],
    #     # 'audio_file_id': result[9]
    # }

# route to get specific artist info
def get_artist(artist_id):
    config = {
        'user': 'root',
        'password': 'root',
        'host': 'db',
        'port': '3306',
        'database': 'art'
    }
    connection = mysql.connector.connect(**config)
    cursor = connection.cursor()
    cursor.execute(f'SELECT * FROM artist_table WHERE artist_id = {artist_id}')

    results = []
    for row in cursor:
        rowStr = f'art_id: {row[0]}, art_name: {row[2]}, art_date: {row[4]}, art_era: {row[5]}, image_id: {row[7]}, art_desc: {row[8]}, audio_id: {row[9]}'
        results.append(rowStr)
    cursor.close()

    return results

# Define a route to return the audio file for a given piece of art
# @app.route('/art/<int:art_id>/audio', methods=['GET'])
# def get_art_audio(art_id):
#     # Query the art_table to get the audio_file_id for the given art_id
#     cursor = mydb.cursor()
#     query = "SELECT audio_file_id FROM art_table WHERE art_id = %s"
#     cursor.execute(query, (art_id,))
#     result = cursor.fetchone()
#     if not result:
#         return jsonify({'error': 'Art not found'}), 404
#     audio_file_id = result[0]
    
#     # Query the audio_table to get the audio file address for the retrieved audio_file_id
#     query = "SELECT audio_file_address FROM audio_table WHERE audio_file_id = %s"
#     cursor.execute(query, (audio_file_id,))
#     result = cursor.fetchone()
#     if not result:
#         return jsonify({'error': 'Audio file not found'}), 404
#     audio_file_address = result[0]
    
#     # TODO: Return the audio file located at the retrieved audio_file_address
#     # Retrieve the audio file from the given address and return it in the appropriate format
#     return jsonify({'audio_file_address': audio_file_address}), 200

@app.route('/')
def index() -> str:
    return json.dumps('hihi')

@app.route('/artwork/<id>')
def artinfo(id) -> str:
    return json.dumps(get_artwork(id))

# @app.route('/artist/<int:id>')
# def artistinfo(id) -> str:
#     return json.dumps(get_artist(id))

if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0')

# docker-compose build
# docker-compose up

# localhost:5000/