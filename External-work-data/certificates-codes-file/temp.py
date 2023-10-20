# importing the module 
import cv2 

# function to display the coordinates of 
# of the points clicked on the image 
def click_event(event, x, y, flags, params): 

	# checking for left mouse clicks 
	if event == cv2.EVENT_LBUTTONDOWN: 

		# displaying the coordinates 
		# on the Shell 
		print(x, ' ', y) 

		# displaying the coordinates 
		# on the image window 
		font = cv2.FONT_HERSHEY_SIMPLEX 
		cv2.putText(img, str(x) + ',' +
					str(y), (x,y), font, 
					1, (255, 0, 0), 2) 
		cv2.imshow('image', img) 

	# checking for right mouse clicks	 
	if event==cv2.EVENT_RBUTTONDOWN: 

		# displaying the coordinates 
		# on the Shell 
		print(x, ' ', y) 

		# displaying the coordinates 
		# on the image window 
		font = cv2.FONT_HERSHEY_SIMPLEX 
		b = img[y, x, 0] 
		g = img[y, x, 1] 
		r = img[y, x, 2] 
		cv2.putText(img, str(b) + ',' +
					str(g) + ',' + str(r), 
					(x,y), font, 1, 
					(255, 255, 0), 2) 
		cv2.imshow('image', img) 

# driver function 
if __name__=="__main__": 

	# reading the image 
	img = cv2.imread('mod.jpg', 1) 

	# displaying the image 
	cv2.imshow('image', img) 

	# setting mouse handler for the image 
	# and calling the click_event() function 
	cv2.setMouseCallback('image', click_event) 

	# wait for a key to be pressed to exit 
	cv2.waitKey(0) 

	# close the window 
	cv2.destroyAllWindows() 
import io
import base64
from PIL import Image, ImageFont, ImageDraw
import pandas as pd
import cv2
import qrcode
import numpy as np


Name = (399, 381)
imagecor = (55, 233)
YOB = (445, 460)
ABHB = (454, 525)
gendercor = (730, 460)
pmjayidcor = (778, 525)
qrcor=(858, 302)


def write_text_to_image(image_path, output_path, name, base64_string, pmjayid, dob, gender, abha, qrdata,
                        font_size=20, font_color=(0, 0, 0)):
    global Name, imagecor, YOB, ABHB, gendercor, pmjayidcor, qrcor
    try:
        # Open the image
        image = Image.open(image_path)

        # Create a drawing object
        draw = ImageDraw.Draw(image)

        image_data = base64.b64decode(base64_string)
        img = Image.open(io.BytesIO(image_data))

        # Define the font and font size
        font = ImageFont.truetype("arial.ttf", font_size)

        # Write the text to the image
        draw.text(Name, name, fill=font_color, font=font)
        image.paste(img, imagecor)
        draw.text(pmjayidcor, pmjayid, fill=font_color, font=font)
        draw.text(YOB, dob, fill=font_color, font=font)
        draw.text(gendercor, gender, fill=font_color, font=font)
        draw.text(ABHB, abha, fill=font_color, font=font)

        # Generate the QR code as an image using qrcode library
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )
        qr.add_data(qrdata)
        qr.make(fit=True)
        qr_img = qr.make_image(fill_color="black", back_color="white")

        # Convert the QR code to a PIL Image
        qr_img = qr_img.convert("RGBA")

        width, height=qr_img.size
        new_width = int(width * 0.05)
        new_height = int(height * 0.05)
        qr_img=qr_img.resize((new_width, new_height), Image.LANCZOS)

        # Paste the QR code onto the main image
        image.paste(qr_img, qrcor, mask=qr_img)

        # Save the edited image
        image.save(output_path)
    except Exception as e:
        print(f"An error occurred: {e}")



