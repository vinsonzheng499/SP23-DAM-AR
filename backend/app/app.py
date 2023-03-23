from flask import Flask, jsonify, request
import mysql.connector
import json

# Set up a connection to the MySQL database
mydb = mysql.connector.connect(
  host="db",
  port="3306",
  user="root",
  password="root",
  database="art"
)

app = Flask(__name__)

# route to get specific artwork info
def get_artwork(art_id):
    cursor = mydb.cursor();
    cursor.execute(f'SELECT * FROM art_table WHERE art_id = {art_id}')
    result = cursor.fetchone()
    cursor.close()

    if result is None:
        return {'error': f'Artwork with ID {art_id} not found'}

    return {
        'art_id': result[0],
        'artist_id': result[1],
        'art_name': result[2],
        'museum_name': result[3],
        'art_date': result[4].isoformat(),
        'art_era': result[5],
        'art_type': result[6],
        'image_id': result[7],
        'art_description': result[8],
        'audio_file_id': result[9]
    }

# route to get specific artist info
def get_artist(artist_id):
    cursor = mydb.cursor()
    cursor.execute(f'SELECT * FROM artist_table WHERE artist_id = {artist_id}')
    result = cursor.fetchone()
    cursor.close()

    if result is None:
        return {'error': f'Artwork with ID {artist_id} not found'}

    return {
        'artist_id': result[0],
        'artist_name': result[1],
        'art_lifespan': result[2],
        'image_id': result[3],
        'biography': result[4],
        'audio_file_id': result[5],
    }

# Define a route to return the audio file for a given piece of art
@app.route('/art/<int:art_id>/audio', methods=['GET'])
def get_art_audio(art_id):
    # Query the art_table to get the audio_file_id for the given art_id
    cursor = mydb.cursor()
    query = "SELECT audio_file_id FROM art_table WHERE art_id = %s"
    cursor.execute(query, (art_id,))
    result = cursor.fetchone()
    if not result:
        return jsonify({'error': 'Art not found'}), 404
    audio_file_id = result[0]
    
    # Query the audio_table to get the audio file address for the retrieved audio_file_id
    query = "SELECT audio_file_address FROM audio_table WHERE audio_file_id = %s"
    cursor.execute(query, (audio_file_id,))
    result = cursor.fetchone()
    if not result:
        return jsonify({'error': 'Audio file not found'}), 404
    audio_file_address = result[0]
    
    # TODO: Return the audio file located at the retrieved audio_file_address
    # Retrieve the audio file from the given address and return it in the appropriate format
    return jsonify({'audio_file_address': audio_file_address}), 200

@app.route('/')
def index() -> str:
    return json.dumps('hi')

@app.route('/artwork/<id>')
def artinfo(id) -> str:
    return json.dumps(get_artwork(id))

if __name__ == '__main__':
    app.run(host='0.0.0.0')