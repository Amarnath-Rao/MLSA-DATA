from PIL import Image, ImageFont, ImageDraw
import pandas as pd
excel = "C:/Users/Amar/Downloads/cert/data.xlsx"
df = pd.read_excel(excel)
Name = df["name"]
font_size = 32
font = ImageFont.truetype("arial.ttf", size=font_size)
coor= (73, 420)
for i in range(len(df)):
    img = Image.open("mod.jpg")
    Im = ImageDraw.Draw(img)
    name = Name[i]
    Im.text(coor, name, fill=(10, 100, 245), font=font)
    img_name = "C:/Users/Amar/Downloads/cert/certi/" + name + ".jpg"
    img.save(img_name)
