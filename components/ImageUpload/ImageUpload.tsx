import Upload from 'rc-upload';
import { UploadProps } from 'rc-upload';
import Image from 'next/image';
import Placeholder from '../../public/placeholder.png';
import type { StaticImageData } from 'next/image';
import { useState } from 'react';
import UploadMask from './UploadMask';

type ImgUpload = {
    className?: string | undefined;
    placeholder?: string | StaticImageData;
    props?: UploadProps;
};

const ImageUpload = ({ className, placeholder, props }: ImgUpload) => {
    const [uploadIcon, setUploadIcon] = useState(false);

    return (
        <Upload {...props}>
            <div className={className + ' overflow-hidden relative w-52 h-52'} onMouseEnter={() => setUploadIcon(true)} onMouseLeave={() => setUploadIcon(false)}>
                {uploadIcon && <UploadMask />}
                <Image src={placeholder ?? Placeholder} alt="Upload Icon" />
            </div>
        </Upload>
    );
};

export default ImageUpload;
