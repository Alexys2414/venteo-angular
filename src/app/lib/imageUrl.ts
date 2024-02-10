import { CloudinaryImage } from "@cloudinary/url-gen";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";

export function getImageUrl(image: string, width: number, rounded: boolean = true): string {
  const myImage = new CloudinaryImage(image, {
    cloudName: "drentd62s",
  }).resize(thumbnail().width(width).height(width));

  if (rounded) {
    myImage.roundCorners(byRadius(60));
  }

  return myImage.toURL();
}

export async function uploadImage(image: File): Promise<string> {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "upload_preset");

  return fetch("https://api.cloudinary.com/v1_1/drentd62s/image/upload", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => data.secure_url);
}
