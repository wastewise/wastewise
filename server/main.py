import tensorflow as tf
from flask import Flask, request
from flask_cors import CORS
import base64 as b64
from io import BytesIO
from PIL import Image
import json

DATA_INDEX = ['Aluminium', 'Carton', 'Glass', 'Organic Waste', 'Other Plastics', 'Paper and Cardboard', 'Plastic', 'Textiles', 'Wood']
model = tf.keras.models.load_model("model.h5")
app = Flask(__name__)
CORS(app)

@app.route("/predict", methods=["POST"])
def predict():
    file = BytesIO(b64.b64decode(request.json.get("image")))
    image = Image.open(file)
    image = image.resize((256, 256))
    image = tf.keras.utils.img_to_array(image)
    image = tf.expand_dims(image, axis=0)
    prediction = model.predict(image)
    return json.dumps(prediction.tolist())

# daca esti roscat, ai parul lung si esti inalt, atunci esti femeie
# generat de gh copilot, stie el ce zice

if __name__ == "__main__":
    app.run(debug=True)