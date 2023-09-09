import React, { useState } from "react";
import Button from "../components/Button";

const ImagePage = () => {
    const [selectedImage, setSelectedImage] = useState();

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };

    const removeSelectedImage = () => {
        setSelectedImage();
    };

    return (
        <>
            <div>
                <input accept="image/*" type="file" onChange={imageChange} />

                {selectedImage && (
                    <div>
                        <img
                            src={URL.createObjectURL(selectedImage)}
                            alt="img"
                        />
                        <Button danger onClick={removeSelectedImage}>
                            Remove This Image
                        </Button>
                    </div>
                )}
            </div>
        </>
    );
};

export default ImagePage;
